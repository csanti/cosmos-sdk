(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{662:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"interacting-with-the-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-node"}},[e._v("#")]),e._v(" Interacting with the Node")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC, REST and Tendermint Endpoints")])],1),e._v(" "),o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/run-node/run-node.html"}},[e._v("Running a Node")])],1)]),e._v(" "),o("h2",{attrs:{id:"using-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),o("p",[e._v("Now that your chain is running, it is time to try sending tokens from the first account you created to a second account. In a new terminal window, start by running the following query command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBiYW5rIGJhbGFuY2VzICRNWV9WQUxJREFUT1JfQUREUkVTUyAtLWNoYWluLWlkIG15LXRlc3QtY2hhaW4K"}}),e._v(" "),o("p",[e._v("You should see the current balance of the account you created, equal to the original balance of "),o("code",[e._v("stake")]),e._v(" you granted it minus the amount you delegated via the "),o("code",[e._v("gentx")]),e._v(". Now, create a second account:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBrZXlzIGFkZCByZWNpcGllbnQgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdAoKIyBQdXQgdGhlIGdlbmVyYXRlZCBhZGRyZXNzIGluIGEgdmFyaWFibGUgZm9yIGxhdGVyIHVzZS4KUkVDSVBJRU5UPSQoc2ltZCBrZXlzIHNob3cgcmVjaXBpZW50IC1hIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QpCg=="}}),e._v(" "),o("p",[e._v("The command above creates a local key-pair that is not yet registered on the chain. An account is created the first time it receives tokens from another account. Now, run the following command to send tokens to the "),o("code",[e._v("recipient")]),e._v(" account:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBiYW5rIHNlbmQgJE1ZX1ZBTElEQVRPUl9BRERSRVNTICRSRUNJUElFTlQgMTAwMDAwMHN0YWtlIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbiAtLWtleXJpbmctYmFja2VuZCB0ZXN0CgojIENoZWNrIHRoYXQgdGhlIHJlY2lwaWVudCBhY2NvdW50IGRpZCByZWNlaXZlIHRoZSB0b2tlbnMuCnNpbWQgcXVlcnkgYmFuayBiYWxhbmNlcyAkUkVDSVBJRU5UIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbgo="}}),e._v(" "),o("p",[e._v("Finally, delegate some of the stake tokens sent to the "),o("code",[e._v("recipient")]),e._v(" account to the validator:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzdGFraW5nIGRlbGVnYXRlICQoc2ltZCBrZXlzIHNob3cgbXlfdmFsaWRhdG9yIC0tYmVjaCB2YWwgLWEgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdCkgNTAwc3Rha2UgLS1mcm9tIHJlY2lwaWVudCAtLWNoYWluLWlkIG15LXRlc3QtY2hhaW4gLS1rZXlyaW5nLWJhY2tlbmQgdGVzdAoKIyBRdWVyeSB0aGUgdG90YWwgZGVsZWdhdGlvbnMgdG8gYHZhbGlkYXRvcmAuCnNpbWQgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9ucy10byAkKHNpbWQga2V5cyBzaG93IG15X3ZhbGlkYXRvciAtLWJlY2ggdmFsIC1hIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QpIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbgo="}}),e._v(" "),o("p",[e._v("You should see two delegations, the first one made from the "),o("code",[e._v("gentx")]),e._v(", and the second one you just performed from the "),o("code",[e._v("recipient")]),e._v(" account.")]),e._v(" "),o("h2",{attrs:{id:"using-grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-grpc"}},[e._v("#")]),e._v(" Using gRPC")]),e._v(" "),o("p",[e._v("The Protobuf ecosystem developed tools for different use cases, including code-generation from "),o("code",[e._v("*.proto")]),e._v(" files into various languages. These tools allow to build clients easily. Often, the client connection (i.e. the transport) can be plugged and replaced very easily. Let's explore one of the most popular transport: "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC")]),e._v(".")],1),e._v(" "),o("p",[e._v("Since the code generation library largely depends on your own tech stack, we will only present three alternatives:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("grpcurl")]),e._v(" for generic debugging and testing,")]),e._v(" "),o("li",[e._v("programmatically via Go,")]),e._v(" "),o("li",[e._v("CosmJS for JavaScript/TypeScript developers.")])]),e._v(" "),o("h3",{attrs:{id:"grpcurl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpcurl"}},[e._v("#")]),e._v(" grpcurl")]),e._v(" "),o("p",[e._v("[grpcurl])https://github.com/fullstorydev/grpcurl is like "),o("code",[e._v("curl")]),e._v(" but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it.")]),e._v(" "),o("p",[e._v("Assuming you have a local node running (either a localnet, or connected a live network), you should be able to run the following command to list the Protobuf services available (you can replace "),o("code",[e._v("localhost:9000")]),e._v(" by the gRPC server endpoint of another node, which is configured under the "),o("code",[e._v("grpc.address")]),e._v(" field inside "),o("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v("):")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGxpc3QK"}}),e._v(" "),o("p",[e._v("You should see a list of gRPC services, like "),o("code",[e._v("cosmos.bank.v1beta1.Query")]),e._v(". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against.")]),e._v(" "),o("p",[e._v("In the Cosmos SDK, we use "),o("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),o("OutboundLink")],1),e._v(" for code generation, and "),o("a",{attrs:{href:"https://github.com/grpc/grpc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-go"),o("OutboundLink")],1),e._v(" for creating the gRPC server. Unfortunately, these two don't play well together, and more in-depth reflection (such as using grpcurl's "),o("code",[e._v("describe")]),e._v(") is not possible. See "),o("a",{attrs:{href:"https://github.com/grpc/grpc-go/issues/1873",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),o("p",[e._v("Instead, we need to manually pass the reference to relevant "),o("code",[e._v(".proto")]),e._v(" files. For example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtaW1wb3J0LXBhdGggLi9wcm90byBcICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBJbXBvcnQgdGhlc2UgcHJvdG8gZmlsZXMgdG9vCiAgICAtaW1wb3J0LXBhdGggLi90aGlyZF9wYXJ0eS9wcm90byBcICAgICAgICAgICAgICAgICAgIyBJbXBvcnQgdGhlc2UgcHJvdG8gZmlsZXMgdG9vCiAgICAtcHJvdG8gLi9wcm90by9jb3Ntb3MvYmFuay92MWJldGExL3F1ZXJ5LnByb3RvIFwgICAgIyBUaGF0J3MgdGhlIHByb3RvIGZpbGUgd2l0aCB0aGUgZGVzY3JpcHRpb24gb2YgeW91ciBzZXJ2aWNlCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBkZXNjcmliZSBjb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5ICAgICAgICAgICAgICAgICAgIyBTZXJ2aWNlIHdlIHdhbnQgdG8gaW5zcGVjdAo="}}),e._v(" "),o("p",[e._v("Once the Protobuf definitions are given, making a gRPC query is then straightforward, by calling the correct "),o("code",[e._v("Query")]),e._v(" service RPC method, and by passing the request argument as data ("),o("code",[e._v("-d")]),e._v(" flag):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0CiAgICAtaW1wb3J0LXBhdGggLi9wcm90byBcCiAgICAtaW1wb3J0LXBhdGggLi90aGlyZF9wYXJ0eS9wcm90byBcCiAgICAtcHJvdG8gLi9wcm90by9jb3Ntb3MvYmFuay92MWJldGExL3F1ZXJ5LnByb3RvIFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDskTVlfVkFMSURBVE9SJnF1b3Q7fScgXAogICAgbG9jYWxob3N0OjkwOTAgXAogICAgY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeS9BbGxCYWxhbmNlcwo="}}),e._v(" "),o("p",[e._v("The list of all available gRPC query endpoints is "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7786",target:"_blank",rel:"noopener noreferrer"}},[e._v("coming soon"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"query-for-historical-state-using-grpcurl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-grpcurl"}},[e._v("#")]),e._v(" Query for historical state using grpcurl")]),e._v(" "),o("p",[e._v("You may also query for historical data by passing some "),o("a",{attrs:{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC metadata"),o("OutboundLink")],1),e._v(" to the query: the "),o("code",[e._v("x-cosmos-block-height")]),e._v(" metadata should contain the block to query. Using grpcurl as above, the command looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0CiAgICAtaW1wb3J0LXBhdGggLi9wcm90byBcCiAgICAtaW1wb3J0LXBhdGggLi90aGlyZF9wYXJ0eS9wcm90byBcCiAgICAtcHJvdG8gLi9wcm90by9jb3Ntb3MvYmFuay92MWJldGExL3F1ZXJ5LnByb3RvIFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7IFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDskTVlfVkFMSURBVE9SJnF1b3Q7fScgXAogICAgbG9jYWxob3N0OjkwOTAgXAogICAgY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeS9BbGxCYWxhbmNlcwo="}}),e._v(" "),o("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),o("h3",{attrs:{id:"programmatically-via-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programmatically-via-go"}},[e._v("#")]),e._v(" Programmatically via Go")]),e._v(" "),o("p",[e._v("The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKCiAgICBzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy90eCZxdW90OwopCgpmdW5jIHF1ZXJ5U3RhdGUoKSBlcnJvciB7CiAgICBteUFkZHJlc3MsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoJnF1b3Q7Y29zbW9zMS4uLiZxdW90OykKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICAvLyBDcmVhdGUgYSBjb25uZWN0aW9uIHRvIHRoZSBnUlBDIHNlcnZlci4KICAgIGdycGNDb25uIDo9IGdycGMuRGlhbCgKICAgICAgICAmcXVvdDsxMjcuMC4wLjE6OTA5MCZxdW90OywgLy8geW91ciBnUlBDIHNlcnZlciBhZGRyZXNzLgogICAgICAgIGdycGMuV2l0aEluc2VjdXJlKCksIC8vIFRoZSBTREsgZG9lc24ndCBzdXBwb3J0IGFueSB0cmFuc3BvcnQgc2VjdXJpdHkgbWVjaGFuaXNtLgogICAgKQogICAgZGVmZXIgZ3JwY0Nvbm4uQ2xvc2UoKQoKICAgIC8vIFRoaXMgY3JlYXRlcyBhIGdSUEMgY2xpZW50IHRvIHF1ZXJ5IHRoZSB4L2Jhbmsgc2VydmljZS4KICAgIGJhbmtDbGllbnQgOj0gYmFua3R5cGVzLk5ld1F1ZXJ5Q2xpZW50KGdycGNDb25uKQogICAgYmFua1JlcywgZXJyIDo9IGJhbmtDbGllbnQuQmFsYW5jZSgKICAgICAgICBjb250ZXh0LkJhY2tncm91bmQoKSwKICAgICAgICAmYW1wO2Jhbmt0eXBlcy5RdWVyeUJhbGFuY2VSZXF1ZXN0e0FkZHJlc3M6IG15QWRkcmVzcywgRGVub206ICZxdW90O2F0b20mcXVvdDt9LAogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIGZtdC5QcmludGxuKGJhbmtSZXMuR2V0QmFsYW5jZSgpKSAvLyBQcmludHMgdGhlIGFjY291bnQgYmFsYW5jZQoKICAgIHJldHVybiBuaWwKfQo="}}),e._v(" "),o("p",[e._v("You can replace the query client (here we are using "),o("code",[e._v("x/bank")]),e._v("'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7786",target:"_blank",rel:"noopener noreferrer"}},[e._v("coming soon"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"query-for-historical-state-using-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-go"}},[e._v("#")]),e._v(" Query for historical state using Go")]),e._v(" "),o("p",[e._v("Querying for historical blocks is done by adding the block height metadata in the gRPC request.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKICAgICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKICAgICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMvbWV0YWRhdGEmcXVvdDsKCiAgICBncnBjdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9ncnBjJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIC8vIC0tc25pcC0tCgogICAgdmFyIGhlYWRlciBtZXRhZGF0YS5NRAogICAgYmFua1JlcywgZXJyID0gYmFua0NsaWVudC5CYWxhbmNlKAogICAgICAgIG1ldGFkYXRhLkFwcGVuZFRvT3V0Z29pbmdDb250ZXh0KGNvbnRleHQuQmFja2dyb3VuZCgpLCBncnBjdHlwZXMuR1JQQ0Jsb2NrSGVpZ2h0SGVhZGVyLCAmcXVvdDsxMiZxdW90OyksIC8vIEFkZCBtZXRhZGF0YSB0byByZXF1ZXN0CiAgICAgICAgJmFtcDtiYW5rdHlwZXMuUXVlcnlCYWxhbmNlUmVxdWVzdHtBZGRyZXNzOiBteUFkZHJlc3MsIERlbm9tOiBkZW5vbX0sCiAgICAgICAgZ3JwYy5IZWFkZXIoJmFtcDtoZWFkZXIpLCAvLyBSZXRyaWV2ZSBoZWFkZXIgZnJvbSByZXNwb25zZQogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQogICAgYmxvY2tIZWlnaHQgPSBoZWFkZXIuR2V0KGdycGN0eXBlcy5HUlBDQmxvY2tIZWlnaHRIZWFkZXIpCgogICAgZm10LlByaW50bG4oYmxvY2tIZWlnaHQpIC8vIFByaW50cyB0aGUgYmxvY2sgaGVpZ2h0ICgxMikKCiAgICByZXR1cm4gbmlsCn0K"}}),e._v(" "),o("h3",{attrs:{id:"cosmjs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmjs"}},[e._v("#")]),e._v(" CosmJS")]),e._v(" "),o("p",[e._v("CosmJS documentation can be found at "),o("a",{attrs:{href:"https://cosmos.github.io/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cosmos.github.io/cosmjs"),o("OutboundLink")],1),e._v(". As of January 2021, CosmJS documentation is still work in progress.")]),e._v(" "),o("h2",{attrs:{id:"using-the-rest-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-rest-endpoints"}},[e._v("#")]),e._v(" Using the REST Endpoints")]),e._v(" "),o("p",[e._v("As described in the "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC guide")]),e._v(", all gRPC services on the Cosmos SDK are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the "),o("code",[e._v("cosmos.bank.v1beta1.Query/AllBalances")]),e._v(" method is "),o("code",[e._v("GET /cosmos/bank/v1beta1/balances/{address}")]),e._v(". Request arguments are passed as query parameters.")],1),e._v(" "),o("p",[e._v("As a concrete example, the "),o("code",[e._v("curl")]),e._v(" command to make balances request is:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIGh0dHA6Ly9sb2NhbGhvc3Q6MTMxNy9jb3Ntb3MvYmFuay92MWJldGExL2JhbGFuY2VzLyRNWV9WQUxJREFUT1IK"}}),e._v(" "),o("p",[e._v("Make sure to replace "),o("code",[e._v("localhost:1317")]),e._v(" with the REST endpoint of your node, configured under the "),o("code",[e._v("api.address")]),e._v(" field.")]),e._v(" "),o("p",[e._v("The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at "),o("code",[e._v("localhost:1317/swagger")]),e._v(". Make sure that the "),o("code",[e._v("api.swagger")]),e._v(" field is set to true in your "),o("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v(" file.")],1),e._v(" "),o("h3",{attrs:{id:"query-for-historical-state-using-rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-rest"}},[e._v("#")]),e._v(" Query for historical state using REST")]),e._v(" "),o("p",[e._v("Querying for historical state is done using the HTTP header "),o("code",[e._v("x-cosmos-block-height")]),e._v(". For example, a curl command would look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7CiAgICBodHRwOi8vbG9jYWxob3N0OjEzMTcvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy8kTVlfVkFMSURBVE9SCg=="}}),e._v(" "),o("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),o("h3",{attrs:{id:"cross-origin-resource-sharing-cors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-cors"}},[e._v("#")]),e._v(" Cross-Origin Resource Sharing (CORS)")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS policies"),o("OutboundLink")],1),e._v(" are not enabled by default to help with security. If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy, this can be done with "),o("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx"),o("OutboundLink")],1),e._v(". For testing and development purposes there is an "),o("code",[e._v("enabled-unsafe-cors")]),e._v(" field inside "),o("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v(".")],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Sending transactions using gRPC and REST requires some additional steps: generating the transaction, signing it, and finally broadcasting it. Read about "),o("RouterLink",{attrs:{to:"/run-node/txs.html"}},[e._v("generating and signing transactions")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);