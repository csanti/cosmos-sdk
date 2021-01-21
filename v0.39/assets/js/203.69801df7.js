(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{695:function(e,a,t){"use strict";t.r(a);var o=t(1),d=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"lasttotalpower"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lasttotalpower"}},[e._v("#")]),e._v(" LastTotalPower")]),e._v(" "),t("p",[e._v("LastTotalPower tracks the total amounts of bonded tokens recorded during the previous end block.")]),e._v(" "),t("ul",[t("li",[e._v("LastTotalPower: "),t("code",[e._v("0x12 -> amino(sdk.Int)")])])]),e._v(" "),t("h2",{attrs:{id:"params"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[e._v("#")]),e._v(" Params")]),e._v(" "),t("p",[e._v("Params is a module-wide configuration structure that stores system parameters\nand defines overall functioning of the staking module.")]),e._v(" "),t("ul",[t("li",[e._v("Params: "),t("code",[e._v('Paramsspace("staking") -> amino(params)')])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQYXJhbXMgc3RydWN0IHsKICAgIFVuYm9uZGluZ1RpbWUgdGltZS5EdXJhdGlvbiAvLyB0aW1lIGR1cmF0aW9uIG9mIHVuYm9uZGluZwogICAgTWF4VmFsaWRhdG9ycyB1aW50MTYgICAgICAgIC8vIG1heGltdW0gbnVtYmVyIG9mIHZhbGlkYXRvcnMKICAgIE1heEVudHJpZXMgICAgdWludDE2ICAgICAgICAvLyBtYXggZW50cmllcyBmb3IgZWl0aGVyIHVuYm9uZGluZyBkZWxlZ2F0aW9uIG9yIHJlZGVsZWdhdGlvbiAocGVyIHBhaXIvdHJpbykKICAgIEJvbmREZW5vbSAgICAgc3RyaW5nICAgICAgICAvLyBib25kYWJsZSBjb2luIGRlbm9taW5hdGlvbgp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),t("p",[e._v("Validators can have one of three statuses")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Unbonded")]),e._v(": The validator is not in the active set. They cannot sign blocks and do not earn\nrewards. They can receive delegations.")]),e._v(" "),t("li",[t("code",[e._v("Bonded")]),e._v('": Once the validator receives sufficient bonded tokens they automtically join the\nactive set during '),t("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html#validator-set-changes"}},[t("code",[e._v("EndBlock")])]),e._v(" and their status is updated to "),t("code",[e._v("Bonded")]),e._v(".\nThey are signing blocks and receiving rewards. They can receive further delegations.\nThey can be slashed for misbehavior. Delegators to this validator who unbond their delegation\nmust wait the duration of the UnbondingTime, a chain-specific param. during which time\nthey are still slashable for offences of the source validator if those offences were committed\nduring the period of time that the tokens were bonded.")],1),e._v(" "),t("li",[t("code",[e._v("Unbonding")]),e._v(": When a validator leaves the active set, either by choice or due to slashing or\ntombstoning, an unbonding of all their delegations begins. All delegations must then wait the UnbondingTime\nbefore moving receiving their tokens to their accounts from the "),t("code",[e._v("BondedPool")]),e._v(".")])]),e._v(" "),t("p",[e._v("Validators objects should be primarily stored and accessed by the\n"),t("code",[e._v("OperatorAddr")]),e._v(", an SDK validator address for the operator of the validator. Two\nadditional indices are maintained per validator object in order to fulfill\nrequired lookups for slashing and validator-set updates. A third special index\n("),t("code",[e._v("LastValidatorPower")]),e._v(") is also maintained which however remains constant\nthroughout each block, unlike the first two indices which mirror the validator\nrecords within a block.")]),e._v(" "),t("ul",[t("li",[e._v("Validators: "),t("code",[e._v("0x21 | OperatorAddr -> amino(validator)")])]),e._v(" "),t("li",[e._v("ValidatorsByConsAddr: "),t("code",[e._v("0x22 | ConsAddr -> OperatorAddr")])]),e._v(" "),t("li",[e._v("ValidatorsByPower: "),t("code",[e._v("0x23 | BigEndian(ConsensusPower) | OperatorAddr -> OperatorAddr")])]),e._v(" "),t("li",[e._v("LastValidatorsPower: "),t("code",[e._v("0x11 OperatorAddr -> amino(ConsensusPower)")])])]),e._v(" "),t("p",[t("code",[e._v("Validators")]),e._v(" is the primary index - it ensures that each operator can have only one\nassociated validator, where the public key of that validator can change in the\nfuture. Delegators can refer to the immutable operator of the validator, without\nconcern for the changing public key.")]),e._v(" "),t("p",[t("code",[e._v("ValidatorByConsAddr")]),e._v(" is an additional index that enables lookups for slashing.\nWhen Tendermint reports evidence, it provides the validator address, so this\nmap is needed to find the operator. Note that the "),t("code",[e._v("ConsAddr")]),e._v(" corresponds to the\naddress which can be derived from the validator's "),t("code",[e._v("ConsPubKey")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("ValidatorsByPower")]),e._v(" is an additional index that provides a sorted list o\npotential validators to quickly determine the current active set. Here\nConsensusPower is validator.Tokens/10^6.  Note that all validators where\n"),t("code",[e._v("Jailed")]),e._v(" is true are not stored within this index.")]),e._v(" "),t("p",[t("code",[e._v("LastValidatorsPower")]),e._v(" is a special index that provides a historical list of the\nlast-block's bonded validators. This index remains constant during a block but\nis updated during the validator set update process which takes place in "),t("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html"}},[t("code",[e._v("EndBlock")])]),e._v(".")],1),e._v(" "),t("p",[e._v("Each validator's state is stored in a "),t("code",[e._v("Validator")]),e._v(" struct:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3Igc3RydWN0IHsKICAgIE9wZXJhdG9yQWRkcmVzcyAgICAgICAgIHNkay5WYWxBZGRyZXNzICAvLyBhZGRyZXNzIG9mIHRoZSB2YWxpZGF0b3IncyBvcGVyYXRvcjsgYmVjaCBlbmNvZGVkIGluIEpTT04KICAgIENvbnNQdWJLZXkgICAgICAgICAgICAgIGNyeXB0by5QdWJLZXkgICAvLyB0aGUgY29uc2Vuc3VzIHB1YmxpYyBrZXkgb2YgdGhlIHZhbGlkYXRvcjsgYmVjaCBlbmNvZGVkIGluIEpTT04KICAgIEphaWxlZCAgICAgICAgICAgICAgICAgIGJvb2wgICAgICAgICAgICAvLyBoYXMgdGhlIHZhbGlkYXRvciBiZWVuIGphaWxlZCBmcm9tIGJvbmRlZCBzdGF0dXM/CiAgICBTdGF0dXMgICAgICAgICAgICAgICAgICBzZGsuQm9uZFN0YXR1cyAgLy8gdmFsaWRhdG9yIHN0YXR1cyAoYm9uZGVkL3VuYm9uZGluZy91bmJvbmRlZCkKICAgIFRva2VucyAgICAgICAgICAgICAgICAgIHNkay5JbnQgICAgICAgICAvLyBkZWxlZ2F0ZWQgdG9rZW5zIChpbmNsLiBzZWxmLWRlbGVnYXRpb24pCiAgICBEZWxlZ2F0b3JTaGFyZXMgICAgICAgICBzZGsuRGVjICAgICAgICAgLy8gdG90YWwgc2hhcmVzIGlzc3VlZCB0byBhIHZhbGlkYXRvcidzIGRlbGVnYXRvcnMKICAgIERlc2NyaXB0aW9uICAgICAgICAgICAgIERlc2NyaXB0aW9uICAgICAvLyBkZXNjcmlwdGlvbiB0ZXJtcyBmb3IgdGhlIHZhbGlkYXRvcgogICAgVW5ib25kaW5nSGVpZ2h0ICAgICAgICAgaW50NjQgICAgICAgICAgIC8vIGlmIHVuYm9uZGluZywgaGVpZ2h0IGF0IHdoaWNoIHRoaXMgdmFsaWRhdG9yIGhhcyBiZWd1biB1bmJvbmRpbmcKICAgIFVuYm9uZGluZ0NvbXBsZXRpb25UaW1lIHRpbWUuVGltZSAgICAgICAvLyBpZiB1bmJvbmRpbmcsIG1pbiB0aW1lIGZvciB0aGUgdmFsaWRhdG9yIHRvIGNvbXBsZXRlIHVuYm9uZGluZwogICAgQ29tbWlzc2lvbiAgICAgICAgICAgICAgQ29tbWlzc2lvbiAgICAgIC8vIGNvbW1pc3Npb24gcGFyYW1ldGVycwogICAgTWluU2VsZkRlbGVnYXRpb24gICAgICAgc2RrLkludCAgICAgICAgIC8vIHZhbGlkYXRvcidzIHNlbGYgZGVjbGFyZWQgbWluaW11bSBzZWxmIGRlbGVnYXRpb24KfQoKdHlwZSBDb21taXNzaW9uIHN0cnVjdCB7CiAgICBDb21taXNzaW9uUmF0ZXMKICAgIFVwZGF0ZVRpbWUgdGltZS5UaW1lIC8vIHRoZSBsYXN0IHRpbWUgdGhlIGNvbW1pc3Npb24gcmF0ZSB3YXMgY2hhbmdlZAp9CgpDb21taXNzaW9uUmF0ZXMgc3RydWN0IHsKICAgIFJhdGUgICAgICAgICAgc2RrLkRlYyAvLyB0aGUgY29tbWlzc2lvbiByYXRlIGNoYXJnZWQgdG8gZGVsZWdhdG9ycywgYXMgYSBmcmFjdGlvbgogICAgTWF4UmF0ZSAgICAgICBzZGsuRGVjIC8vIG1heGltdW0gY29tbWlzc2lvbiByYXRlIHdoaWNoIHZhbGlkYXRvciBjYW4gZXZlciBjaGFyZ2UsIGFzIGEgZnJhY3Rpb24KICAgIE1heENoYW5nZVJhdGUgc2RrLkRlYyAvLyBtYXhpbXVtIGRhaWx5IGluY3JlYXNlIG9mIHRoZSB2YWxpZGF0b3IgY29tbWlzc2lvbiwgYXMgYSBmcmFjdGlvbgp9Cgp0eXBlIERlc2NyaXB0aW9uIHN0cnVjdCB7CiAgICBNb25pa2VyICAgICAgICAgIHN0cmluZyAvLyBuYW1lCiAgICBJZGVudGl0eSAgICAgICAgIHN0cmluZyAvLyBvcHRpb25hbCBpZGVudGl0eSBzaWduYXR1cmUgKGV4LiBVUG9ydCBvciBLZXliYXNlKQogICAgV2Vic2l0ZSAgICAgICAgICBzdHJpbmcgLy8gb3B0aW9uYWwgd2Vic2l0ZSBsaW5rCiAgICBTZWN1cml0eUNvbnRhY3QgIHN0cmluZyAvLyBvcHRpb25hbCBlbWFpbCBmb3Igc2VjdXJpdHkgY29udGFjdAogICAgRGV0YWlscyAgICAgICAgICBzdHJpbmcgLy8gb3B0aW9uYWwgZGV0YWlscwp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"delegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegation"}},[e._v("#")]),e._v(" Delegation")]),e._v(" "),t("p",[e._v("Delegations are identified by combining "),t("code",[e._v("DelegatorAddr")]),e._v(" (the address of the delegator)\nwith the "),t("code",[e._v("ValidatorAddr")]),e._v(" Delegators are indexed in the store as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Delegation: "),t("code",[e._v("0x31 | DelegatorAddr | ValidatorAddr -> amino(delegation)")])])]),e._v(" "),t("p",[e._v("Stake holders may delegate coins to validators; under this circumstance their\nfunds are held in a "),t("code",[e._v("Delegation")]),e._v(" data structure. It is owned by one\ndelegator, and is associated with the shares for one validator. The sender of\nthe transaction is the owner of the bond.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZWxlZ2F0aW9uIHN0cnVjdCB7CiAgICBEZWxlZ2F0b3JBZGRyIHNkay5BY2NBZGRyZXNzCiAgICBWYWxpZGF0b3JBZGRyIHNkay5WYWxBZGRyZXNzCiAgICBTaGFyZXMgICAgICAgIHNkay5EZWMgICAgICAgIC8vIGRlbGVnYXRpb24gc2hhcmVzIHJlY2VpdmVkCn0K"}}),e._v(" "),t("h3",{attrs:{id:"delegator-shares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegator-shares"}},[e._v("#")]),e._v(" Delegator Shares")]),e._v(" "),t("p",[e._v("When one Delegates tokens to a Validator they are issued a number of delegator shares based on a\ndynamic exchange rate, calculated as follows from the total number of tokens delegated to the\nvalidator and the number of shares issued so far:")]),e._v(" "),t("p",[t("code",[e._v("Shares per Token = validator.TotalShares() / validator.Tokens()")])]),e._v(" "),t("p",[e._v("Only the number of shares received is stored on the DelegationEntry. When a delegator then\nUndelegates, the token amount they receive is calculated from the number of shares they currently\nhold and the inverse exchange rate:")]),e._v(" "),t("p",[t("code",[e._v("Tokens per Share = validator.Tokens() / validatorShares()")])]),e._v(" "),t("p",[e._v("These "),t("code",[e._v("Shares")]),e._v(" are simply an accounting mechanism. They are not a fungible asset. The reason for\nthis mechanism is to simplify the accounting around slashing. Rather than iteratively slashing the\ntokens of every delegation entry, instead the Validators total bonded tokens can be slashed,\neffectively reducing the value of each issued delegator share.")]),e._v(" "),t("h2",{attrs:{id:"unbondingdelegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unbondingdelegation"}},[e._v("#")]),e._v(" UnbondingDelegation")]),e._v(" "),t("p",[e._v("Shares in a "),t("code",[e._v("Delegation")]),e._v(" can be unbonded, but they must for some time exist as\nan "),t("code",[e._v("UnbondingDelegation")]),e._v(", where shares can be reduced if Byzantine behavior is\ndetected.")]),e._v(" "),t("p",[t("code",[e._v("UnbondingDelegation")]),e._v(" are indexed in the store as:")]),e._v(" "),t("ul",[t("li",[e._v("UnbondingDelegation: "),t("code",[e._v("0x32 | DelegatorAddr | ValidatorAddr -> amino(unbondingDelegation)")])]),e._v(" "),t("li",[e._v("UnbondingDelegationsFromValidator: "),t("code",[e._v("0x33 | ValidatorAddr | DelegatorAddr -> nil")])])]),e._v(" "),t("p",[e._v("The first map here is used in queries, to lookup all unbonding delegations for\na given delegator, while the second map is used in slashing, to lookup all\nunbonding delegations associated with a given validator that need to be\nslashed.")]),e._v(" "),t("p",[e._v("A UnbondingDelegation object is created every time an unbonding is initiated.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVbmJvbmRpbmdEZWxlZ2F0aW9uIHN0cnVjdCB7CiAgICBEZWxlZ2F0b3JBZGRyIHNkay5BY2NBZGRyZXNzICAgICAgICAgICAgIC8vIGRlbGVnYXRvcgogICAgVmFsaWRhdG9yQWRkciBzZGsuVmFsQWRkcmVzcyAgICAgICAgICAgICAvLyB2YWxpZGF0b3IgdW5ib25kaW5nIGZyb20gb3BlcmF0b3IgYWRkcgogICAgRW50cmllcyAgICAgICBbXVVuYm9uZGluZ0RlbGVnYXRpb25FbnRyeSAvLyB1bmJvbmRpbmcgZGVsZWdhdGlvbiBlbnRyaWVzCn0KCnR5cGUgVW5ib25kaW5nRGVsZWdhdGlvbkVudHJ5IHN0cnVjdCB7CiAgICBDcmVhdGlvbkhlaWdodCBpbnQ2NCAgICAgLy8gaGVpZ2h0IHdoaWNoIHRoZSB1bmJvbmRpbmcgdG9vayBwbGFjZQogICAgQ29tcGxldGlvblRpbWUgdGltZS5UaW1lIC8vIHVuaXggdGltZSBmb3IgdW5ib25kaW5nIGNvbXBsZXRpb24KICAgIEluaXRpYWxCYWxhbmNlIHNkay5Db2luICAvLyBhdG9tcyBpbml0aWFsbHkgc2NoZWR1bGVkIHRvIHJlY2VpdmUgYXQgY29tcGxldGlvbgogICAgQmFsYW5jZSAgICAgICAgc2RrLkNvaW4gIC8vIGF0b21zIHRvIHJlY2VpdmUgYXQgY29tcGxldGlvbgp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"redelegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redelegation"}},[e._v("#")]),e._v(" Redelegation")]),e._v(" "),t("p",[e._v("The bonded tokens worth of a "),t("code",[e._v("Delegation")]),e._v(" may be instantly redelegated from a\nsource validator to a different validator (destination validator). However when\nthis occurs they must be tracked in a "),t("code",[e._v("Redelegation")]),e._v(" object, whereby their\nshares can be slashed if their tokens have contributed to a Byzantine fault\ncommitted by the source validator.")]),e._v(" "),t("p",[t("code",[e._v("Redelegation")]),e._v(" are indexed in the store as:")]),e._v(" "),t("ul",[t("li",[e._v("Redelegations: "),t("code",[e._v("0x34 | DelegatorAddr | ValidatorSrcAddr | ValidatorDstAddr -> amino(redelegation)")])]),e._v(" "),t("li",[e._v("RedelegationsBySrc: "),t("code",[e._v("0x35 | ValidatorSrcAddr | ValidatorDstAddr | DelegatorAddr -> nil")])]),e._v(" "),t("li",[e._v("RedelegationsByDst: "),t("code",[e._v("0x36 | ValidatorDstAddr | ValidatorSrcAddr | DelegatorAddr -> nil")])])]),e._v(" "),t("p",[e._v("The first map here is used for queries, to lookup all redelegations for a given\ndelegator. The second map is used for slashing based on the "),t("code",[e._v("ValidatorSrcAddr")]),e._v(",\nwhile the third map is for slashing based on the "),t("code",[e._v("ValidatorDstAddr")]),e._v(".")]),e._v(" "),t("p",[e._v('A redelegation object is created every time a redelegation occurs.  To prevent\n"redelegation hopping" redelegations may not occur under the situation that:')]),e._v(" "),t("ul",[t("li",[e._v("the (re)delegator already has another immature redelegation in progress\nwith a destination to a validator (let's call it "),t("code",[e._v("Validator X")]),e._v(")")]),e._v(" "),t("li",[e._v("and, the (re)delegator is attempting to create a "),t("em",[e._v("new")]),e._v(" redelegation\nwhere the source validator for this new redelegation is "),t("code",[e._v("Validator-X")]),e._v(".")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZWRlbGVnYXRpb24gc3RydWN0IHsKICAgIERlbGVnYXRvckFkZHIgICAgc2RrLkFjY0FkZHJlc3MgICAgICAvLyBkZWxlZ2F0b3IKICAgIFZhbGlkYXRvclNyY0FkZHIgc2RrLlZhbEFkZHJlc3MgICAgICAvLyB2YWxpZGF0b3IgcmVkZWxlZ2F0aW9uIHNvdXJjZSBvcGVyYXRvciBhZGRyCiAgICBWYWxpZGF0b3JEc3RBZGRyIHNkay5WYWxBZGRyZXNzICAgICAgLy8gdmFsaWRhdG9yIHJlZGVsZWdhdGlvbiBkZXN0aW5hdGlvbiBvcGVyYXRvciBhZGRyCiAgICBFbnRyaWVzICAgICAgICAgIFtdUmVkZWxlZ2F0aW9uRW50cnkgLy8gcmVkZWxlZ2F0aW9uIGVudHJpZXMKfQoKdHlwZSBSZWRlbGVnYXRpb25FbnRyeSBzdHJ1Y3QgewogICAgQ3JlYXRpb25IZWlnaHQgaW50NjQgICAgIC8vIGhlaWdodCB3aGljaCB0aGUgcmVkZWxlZ2F0aW9uIHRvb2sgcGxhY2UKICAgIENvbXBsZXRpb25UaW1lIHRpbWUuVGltZSAvLyB1bml4IHRpbWUgZm9yIHJlZGVsZWdhdGlvbiBjb21wbGV0aW9uCiAgICBJbml0aWFsQmFsYW5jZSBzZGsuQ29pbiAgLy8gaW5pdGlhbCBiYWxhbmNlIHdoZW4gcmVkZWxlZ2F0aW9uIHN0YXJ0ZWQKICAgIEJhbGFuY2UgICAgICAgIHNkay5Db2luICAvLyBjdXJyZW50IGJhbGFuY2UgKGN1cnJlbnQgdmFsdWUgaGVsZCBpbiBkZXN0aW5hdGlvbiB2YWxpZGF0b3IpCiAgICBTaGFyZXNEc3QgICAgICBzZGsuRGVjICAgLy8gYW1vdW50IG9mIGRlc3RpbmF0aW9uLXZhbGlkYXRvciBzaGFyZXMgY3JlYXRlZCBieSByZWRlbGVnYXRpb24KfQo="}}),e._v(" "),t("h2",{attrs:{id:"queues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),t("p",[e._v("All queues objects are sorted by timestamp. The time used within any queue is\nfirst rounded to the nearest nanosecond then sorted. The sortable time format\nused is a slight modification of the RFC3339Nano and uses the the format string\n"),t("code",[e._v('"2006-01-02T15:04:05.000000000"')]),e._v(". Notably this format:")]),e._v(" "),t("ul",[t("li",[e._v("right pads all zeros")]),e._v(" "),t("li",[e._v("drops the time zone info (uses UTC)")])]),e._v(" "),t("p",[e._v("In all cases, the stored timestamp represents the maturation time of the queue\nelement.")]),e._v(" "),t("h3",{attrs:{id:"unbondingdelegationqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unbondingdelegationqueue"}},[e._v("#")]),e._v(" UnbondingDelegationQueue")]),e._v(" "),t("p",[e._v("For the purpose of tracking progress of unbonding delegations the unbonding\ndelegations queue is kept.")]),e._v(" "),t("ul",[t("li",[e._v("UnbondingDelegation: "),t("code",[e._v("0x41 | format(time) -> []DVPair")])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEVlBhaXIgc3RydWN0IHsKICAgIERlbGVnYXRvckFkZHIgc2RrLkFjY0FkZHJlc3MKICAgIFZhbGlkYXRvckFkZHIgc2RrLlZhbEFkZHJlc3MKfQo="}}),e._v(" "),t("h3",{attrs:{id:"redelegationqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redelegationqueue"}},[e._v("#")]),e._v(" RedelegationQueue")]),e._v(" "),t("p",[e._v("For the purpose of tracking progress of redelegations the redelegation queue is\nkept.")]),e._v(" "),t("ul",[t("li",[e._v("UnbondingDelegation: "),t("code",[e._v("0x42 | format(time) -> []DVVTriplet")])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEVlZUcmlwbGV0IHN0cnVjdCB7CiAgICBEZWxlZ2F0b3JBZGRyICAgIHNkay5BY2NBZGRyZXNzCiAgICBWYWxpZGF0b3JTcmNBZGRyIHNkay5WYWxBZGRyZXNzCiAgICBWYWxpZGF0b3JEc3RBZGRyIHNkay5WYWxBZGRyZXNzCn0K"}}),e._v(" "),t("h3",{attrs:{id:"validatorqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validatorqueue"}},[e._v("#")]),e._v(" ValidatorQueue")]),e._v(" "),t("p",[e._v("For the purpose of tracking progress of unbonding validators the validator\nqueue is kept.")]),e._v(" "),t("ul",[t("li",[e._v("ValidatorQueueTime: "),t("code",[e._v("0x43 | format(time) -> []sdk.ValAddress")])])]),e._v(" "),t("p",[e._v("The stored object as each key is an array of validator operator addresses from\nwhich the validator object can be accessed.  Typically it is expected that only\na single validator record will be associated with a given timestamp however it is possible\nthat multiple validators exist in the queue at the same location.")]),e._v(" "),t("h2",{attrs:{id:"historicalinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#historicalinfo"}},[e._v("#")]),e._v(" HistoricalInfo")]),e._v(" "),t("p",[e._v("HistoricalInfo objects are stored and pruned at each block such that the staking keeper persists\nthe "),t("code",[e._v("n")]),e._v(" most recent historical info defined by staking module parameter: "),t("code",[e._v("HistoricalEntries")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIaXN0b3JpY2FsSW5mbyBzdHJ1Y3QgewogICAgSGVhZGVyIGFiY2kuSGVhZGVyCiAgICBWYWxTZXQgW110eXBlcy5WYWxpZGF0b3IKfQo="}}),e._v(" "),t("p",[e._v("At each BeginBlock, the staking keeper will persist the current Header and the Validators that committed\nthe current block in a "),t("code",[e._v("HistoricalInfo")]),e._v(" object. The Validators are sorted on their address to ensure that\nthey are in a determisnistic order.\nThe oldest HistoricalEntries will be pruned to ensure that there only exist the parameter-defined number of\nhistorical entries.")])],1)}),[],!1,null,null,null);a.default=d.exports}}]);