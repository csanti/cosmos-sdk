package types

import "github.com/cosmos/cosmos-sdk/crypto/types"

type SignatureData interface {
	isSignatureData()
}

type SingleSignatureData struct {
	SignMode  SignMode
	Signature []byte
}

type MultiSignatureData struct {
	BitArray   *types.CompactBitArray
	Signatures []SignatureData
}

var _, _ SignatureData = &SingleSignatureData{}, &MultiSignatureData{}

func (m *SingleSignatureData) isSignatureData() {}
func (m *MultiSignatureData) isSignatureData()  {}

func ModeInfoToSignatureData(modeInfo *ModeInfo, sig []byte) (SignatureData, error) {
	switch modeInfo := modeInfo.Sum.(type) {
	case *ModeInfo_Single_:
		return &SingleSignatureData{
			SignMode:  modeInfo.Single.Mode,
			Signature: sig,
		}, nil

	case *ModeInfo_Multi_:
		multi := modeInfo.Multi

		sigs, err := types.DecodeMultisignatures(sig)
		if err != nil {
			return nil, err
		}

		sigv2s := make([]SignatureData, len(sigs))
		for i, mi := range multi.ModeInfos {
			sigv2s[i], err = ModeInfoToSignatureData(mi, sigs[i])
			if err != nil {
				return nil, err
			}
		}

		return &MultiSignatureData{
			BitArray:   multi.Bitarray,
			Signatures: sigv2s,
		}, nil

	default:
		panic("unexpected case")
	}
}
