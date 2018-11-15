const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"canContribute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"approvalRequestsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contentTypeContracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"}],"name":"addAccessorGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"content_type","type":"address"}],"name":"createContent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reviewerGroupsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contributorGroups","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"space","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"canReview","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"accessorGroups","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addressKMS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contentTypeLicensingFees","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contributorGroupsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"submitApprovalRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getPendingApprovalRequest","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"}],"name":"addContributorGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"content_contract","type":"address"},{"name":"amount","type":"uint256"}],"name":"payCredit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"approvalRequests","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reviewerGroups","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"hasAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contentTypes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"content_type","type":"address"},{"name":"content_contract","type":"address"},{"name":"licensing_fee","type":"uint256"}],"name":"addContentType","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"content_contract","type":"address"},{"name":"approved","type":"bool"},{"name":"note","type":"string"}],"name":"approveContentExecuted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contentTypesLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"address_KMS","type":"address"}],"name":"setAddressKMS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"}],"name":"addReviewerGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accessorGroupsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"address_KMS","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentAddress","type":"address"},{"indexed":false,"name":"content_type","type":"address"}],"name":"ContentObjectCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"group","type":"address"}],"name":"ContributorGroupAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"group","type":"address"}],"name":"ReviewerGroupAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"group","type":"address"}],"name":"AccessorGroupAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentType","type":"address"},{"indexed":false,"name":"contentContract","type":"address"},{"indexed":false,"name":"licensingFee","type":"uint256"}],"name":"ContentTypeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operationCode","type":"uint256"},{"indexed":false,"name":"candidate","type":"address"}],"name":"UnauthorizedOperation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentAddress","type":"address"},{"indexed":false,"name":"submitter","type":"address"}],"name":"ApproveContentRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentAddress","type":"address"},{"indexed":false,"name":"approved","type":"bool"},{"indexed":false,"name":"note","type":"string"}],"name":"ApproveContentExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PayCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestValidity","type":"uint256"}],"name":"AccessRequest","type":"event"}],"bytecode":"606060405260006010556040516020806136118339810160405280805160008054600160a060020a03328116600160a060020a03199283168117845560018054841690911790556003805433831690841617905560088390556009839055600a92909255600f80549290931691161790555050613590806100816000396000f3006060604052600436106101a85763ffffffff60e060020a60003504166302d05d3f81146101aa5780630eaec2c5146101d9578063163083941461020c5780631cdbee5a146102315780631d0f4351146102505780631e35d8fa1461026f57806321770a841461028e5780632393553b146102a157806327af9e38146102b757806329d00219146102ca5780632c11f392146102e957806332eaf21b146102ff5780633fbb5d711461031257806341c0e1b514610331578063470750bb1461034457806349102e611461035757806363dab9d41461036a578063679a9a3c146103805780636934d45f1461039f5780636d2e4b1b146103c15780638cb13c2e146103e05780638da5cb5b146103f6578063952e464b1461040957806395a078e81461041f578063991a3a7c1461043e578063a90229d514610454578063bf81a0b61461047c578063c287e0ed146104e3578063c65bcbe2146104f6578063c9e8e72d14610509578063dc3c29c014610528578063e02dd9c214610547578063e5538fd21461055a578063f14fcbc81461056d578063f155188714610583578063f2fde38b14610596575b005b34156101b557600080fd5b6101bd6105b5565b604051600160a060020a03909116815260200160405180910390f35b34156101e457600080fd5b6101f8600160a060020a03600435166105c4565b604051901515815260200160405180910390f35b341561021757600080fd5b61021f6106af565b60405190815260200160405180910390f35b341561023c57600080fd5b6101bd600160a060020a03600435166106b5565b341561025b57600080fd5b6101a8600160a060020a03600435166106d0565b341561027a57600080fd5b6101bd600160a060020a036004351661076b565b341561029957600080fd5b61021f61089e565b34156102ac57600080fd5b6101bd6004356108a4565b34156102c257600080fd5b6101bd6108cc565b34156102d557600080fd5b6101f8600160a060020a03600435166108db565b34156102f457600080fd5b6101bd6004356109c3565b341561030a57600080fd5b6101bd6109d1565b341561031d57600080fd5b61021f600160a060020a03600435166109e0565b341561033c57600080fd5b6101a86109f2565b341561034f57600080fd5b61021f610a1b565b341561036257600080fd5b6101f8610a21565b341561037557600080fd5b6101bd600435610cf8565b341561038b57600080fd5b6101a8600160a060020a0360043516610d45565b34156103aa57600080fd5b61021f600160a060020a0360043516602435610de0565b34156103cc57600080fd5b6101a8600160a060020a0360043516610fea565b34156103eb57600080fd5b6101bd600435611071565b341561040157600080fd5b6101bd61107f565b341561041457600080fd5b6101bd60043561108e565b341561042a57600080fd5b6101f8600160a060020a036004351661109c565b341561044957600080fd5b6101bd600435611179565b341561045f57600080fd5b6101a8600160a060020a0360043581169060243516604435611187565b341561048757600080fd5b6101f860048035600160a060020a031690602480351515919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061126795505050505050565b34156104ee57600080fd5b6101a86115c9565b341561050157600080fd5b61021f61161b565b341561051457600080fd5b6101a8600160a060020a0360043516611621565b341561053357600080fd5b6101a8600160a060020a036004351661165e565b341561055257600080fd5b61021f6116f9565b341561056557600080fd5b61021f6116ff565b341561057857600080fd5b6101a8600435611705565b341561058e57600080fd5b6101f861175b565b34156105a157600080fd5b6101a8600160a060020a03600435166117e2565b600054600160a060020a031681565b6000806000806000600480549050600014156105e357600194506106a6565b5060005b6004548110156106a15760048054829081106105ff57fe5b600091825260209091200154600160a060020a0316935083156106995783915081600160a060020a03166395a078e88760405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561066d57600080fd5b5af1151561067a57600080fd5b50505060405180519350506001831515141561069957600194506106a6565b6001016105e7565b600094505b50505050919050565b60105481565b600c60205260009081526040902054600160a060020a031681565b60015432600160a060020a039081169116146106eb57600080fd5b60068054600181016106fd8382611834565b5060009182526020909120018054600160a060020a031916600160a060020a038316179055600a805460010190557f3a94857e4393737f73edb175a7d0c195c7f635d9ae995e12740616ec55c9d41181604051600160a060020a03909116815260200160405180910390a150565b6000806000610779326105c4565b15156107cc577f23de2adc3e22f171f66b3e5a333e17feb9dc30ba9570933bd259cb6c13ef7ab7606532604051918252600160a060020a031660208201526040908101905180910390a160009250610897565b6107d461185d565b604051809103906000f08015156107ea57600080fd5b915081905080600160a060020a031663693489678560405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561083d57600080fd5b5af1151561084a57600080fd5b5050507f3981e74ab81857b375ec391a4f7c31ee89462cd927de6d8fbdb98f77da009c568285604051600160a060020a039283168152911660208201526040908101905180910390a18192505b5050919050565b60095481565b60048054829081106108b257fe5b600091825260209091200154600160a060020a0316905081565b600354600160a060020a031681565b6001546000908190819081908190600160a060020a038781169116141561090557600194506106a6565b5060005b6005548110156106a157600580548290811061092157fe5b600091825260209091200154600160a060020a0316935083156109bb5783915081600160a060020a03166395a078e88760405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561098f57600080fd5b5af1151561099c57600080fd5b5050506040518051935050600183151514156109bb57600194506106a6565b600101610909565b60068054829081106108b257fe5b600f54600160a060020a031681565b600d6020526000908152604090205481565b60015432600160a060020a03908116911614610a0d57600080fd5b600154600160a060020a0316ff5b60085481565b600033808280600160a060020a03328116908416638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610a6857600080fd5b5af11515610a7557600080fd5b50505060405180519050600160a060020a0316141515610a985760009450610cf1565b6009541515610bcd5782600160a060020a031663545b35396040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610ade57600080fd5b5af11515610aeb57600080fd5b5050506040518051925050600160a060020a03831663708f53ab60008460405160e060020a63ffffffff8516028152600481019290925260ff166024820152604401602060405180830381600087803b1515610b4657600080fd5b5af11515610b5357600080fd5b505050604051805190509050610b698382610de0565b507f8a6b83b9f4a16d1fd3ec333d40e20591cfb3ad7c24ecbfbc9a5c5b1a6445cab4846001604051600160a060020a039092168252151560208201526060604080830182905260009183019190915260a0909101905180910390a160019450610cf1565b600160a060020a03841660009081526011602052604090205415610bf45760009450610cf1565b600e546010541015610c405783600e601054815481101515610c1257fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055610c78565b600e805460018101610c528382611834565b5060009182526020909120018054600160a060020a031916600160a060020a0386161790555b60108054600160a060020a038616600090815260116020526040908190206001928301905582549091019091557f0588a34cf0de4e025d359c89ca4bacbcbf175440909952d91c814412d9da996a908590329051600160a060020a039283168152911660208201526040908101905180910390a1600194505b5050505090565b600060105460001480610d0d57508160105411155b15610d1a57506000610d40565b600e805483908110610d2857fe5b600091825260209091200154600160a060020a031690505b919050565b60015432600160a060020a03908116911614610d6057600080fd5b6004805460018101610d728382611834565b5060009182526020909120018054600160a060020a031916600160a060020a0383161790556008805460010190557f218673669018c25b89bfbf1b58d0075e37c8847ef16e707b92355b7833e97d6181604051600160a060020a03909116815260200160405180910390a150565b6000806000806000851115610fdc5785925082600160a060020a03166307b27aca6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610e2f57600080fd5b5af11515610e3c57600080fd5b505050604051805191505080851115610e5757809150610e5b565b8491505b82600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610e9857600080fd5b5af11515610ea557600080fd5b5050506040518051600160a060020a0316905082156108fc0283604051600060405180830381858888f193505050501515610edf57600080fd5b82600160a060020a031663f79444718360405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610f2557600080fd5b5af11515610f3257600080fd5b50505060405180519050507fd8ad32fc5c165753d9da5f44f42ef7daf8002336cab4bdd13b7e58f48b451e3d83600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610f9b57600080fd5b5af11515610fa857600080fd5b5050506040518051905083604051600160a060020a03909216825260208201526040908101905180910390a1819350610fe1565b600093505b50505092915050565b60005432600160a060020a0390811691161461100557600080fd5b600160a060020a038116151561101a57600080fd5b600054600154600160a060020a039081169116141561104f5760018054600160a060020a031916600160a060020a0383161790555b60008054600160a060020a031916600160a060020a0392909216919091179055565b600e8054829081106108b257fe5b600154600160a060020a031681565b60058054829081106108b257fe5b6000806000806000600680549050600014156110bb57600194506106a6565b5060005b6006548110156106a15760068054829081106110d757fe5b600091825260209091200154600160a060020a0316935083156111715783915081600160a060020a03166395a078e88760405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561114557600080fd5b5af1151561115257600080fd5b50505060405180519350506001831515141561117157600194506106a6565b6001016110bf565b60078054829081106108b257fe5b60015432600160a060020a039081169116146111a257600080fd5b60078054600181016111b48382611834565b5060009182526020808320919091018054600160a060020a0319908116600160a060020a03888116918217909355600b805460010190558452600c835260408085208054909216928716929092179055600d909152908190208290557f62c1f342f2a52ee6ac3eeef54df8c836fb31869e9be7c5e5394c042d131c9ecc9084908490849051600160a060020a039384168152919092166020820152604080820192909252606001905180910390a1505050565b60008060008060008060008061127c326108db565b151561128b57600097506115bb565b600160a060020a038b16600090815260116020526040902054600e805460001990920198508c975090889081106112be57fe5b600091825260208083209091018054600160a060020a031916905560108054600019018155600160a060020a038e1683526011909152604082209190915554879011156113b557600e60105481548110151561131657fe5b600091825260209091200154600e8054600160a060020a03909216965086918990811061133f57fe5b906000526020600020900160006101000a815481600160a060020a030219169083600160a060020a03160217905550600e60105481548110151561137f57fe5b600091825260208083209091018054600160a060020a0319169055600160a060020a038716825260119052604090206001880190555b85600160a060020a03166327c1c21d6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156113f257600080fd5b5af115156113ff57600080fd5b505050604051805194505060008413156115b65785600160a060020a031663545b35396040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561145057600080fd5b5af1151561145d57600080fd5b505050604051805193505060018a1515141561147c5760009150611487565b836001016000190291505b85600160a060020a031663708f53ab838560405160e060020a63ffffffff8516028152600481019290925260ff166024820152604401602060405180830381600087803b15156114d657600080fd5b5af115156114e357600080fd5b5050506040518051905090506114f98682610de0565b507f8a6b83b9f4a16d1fd3ec333d40e20591cfb3ad7c24ecbfbc9a5c5b1a6445cab48b8b8b604051600160a060020a0384168152821515602082015260606040820181815290820183818151815260200191508051906020019080838360005b83811015611571578082015183820152602001611559565b50505050905090810190601f16801561159e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1600197506115bb565b600097505b505050505050509392505050565b60015432600160a060020a039081169116146115e457600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b600b5481565b60015432600160a060020a0390811691161461163c57600080fd5b600f8054600160a060020a031916600160a060020a0392909216919091179055565b60015432600160a060020a0390811691161461167957600080fd5b600580546001810161168b8382611834565b5060009182526020909120018054600160a060020a031916600160a060020a0383161790556009805460010190557f1b88a571cc8ac2e87512f05648e79d184f5cc0cbb2889bc487c41f8b9a3202eb81604051600160a060020a03909116815260200160405180910390a150565b60025481565b600a5481565b60015432600160a060020a0390811691161461172057600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60006117663261109c565b156117a7577fca8116fd70ecea0cf35f7c08eb31491cce5ebd6bafef5bd6426862df29840463600060405190815260200160405180910390a15060016117df565b7fca8116fd70ecea0cf35f7c08eb31491cce5ebd6bafef5bd6426862df29840463606960405190815260200160405180910390a15060005b90565b60015432600160a060020a039081169116146117fd57600080fd5b600160a060020a038116151561181257600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b8154818355818115116118585760008381526020902061185891810190830161186d565b505050565b604051611cd98061188c83390190565b6117df91905b808211156118875760008155600101611873565b509056006060604090815260008054600160a060020a03328116600160a060020a03199283168117845560018054841690911790556006805433831693169290921791829055600019600855600b839055600c929092557fc3decc188980e855666b70498ca85e8fa284d97d30483d828fa126f7303d7d199291169051600160a060020a03909116815260200160405180910390a1611c3a8061009f6000396000f3006060604052600436106101925763ffffffff60e060020a60003504166302d05d3f81146101945780630779564b146101c357806307b27aca146101e85780631a735f18146101fb5780632310167f1461024d57806327c1c21d1461026057806332eaf21b1461027357806336ebffca1461028657806341c0e1b5146102995780635267db44146102ac578063545b3539146102c25780635cc4aa9b146102eb57806364ade32b1461031057806369348967146103235780636d2e4b1b14610342578063708f53ab14610361578063879fe48f1461037d5780638da5cb5b146104145780638f77920114610427578063a1ff106e1461043a578063b65240891461054a578063b816f51314610560578063c287e0ed14610573578063c68c1d1f14610586578063c9e8e72d146105d4578063e02dd9c2146105f3578063e538530314610606578063ee56d76714610625578063f14fcbc8146106c5578063f1551887146106db578063f2fde38b146106ee578063f4d9bae81461070d578063f794447114610723578063f94f001414610739575b005b341561019f57600080fd5b6101a761074c565b604051600160a060020a03909116815260200160405180910390f35b34156101ce57600080fd5b6101d661075b565b60405190815260200160405180910390f35b34156101f357600080fd5b6101d6610761565b341561020657600080fd5b61021160043561076b565b6040518084600160a060020a0316600160a060020a031681526020018381526020018260000b60000b8152602001935050505060405180910390f35b341561025857600080fd5b6101a7610796565b341561026b57600080fd5b6101d66107a5565b341561027e57600080fd5b6101a76107ab565b341561029157600080fd5b6101a76107ba565b34156102a457600080fd5b6101926107c9565b34156102b757600080fd5b6101d66004356107f2565b34156102cd57600080fd5b6102d5610891565b60405160ff909116815260200160405180910390f35b6102fc60043560243560443561089a565b604051901515815260200160405180910390f35b341561031b57600080fd5b6101d6610a30565b341561032e57600080fd5b610192600160a060020a0360043516610a36565b341561034d57600080fd5b610192600160a060020a0360043516610c1e565b341561036c57600080fd5b6101d660043560ff60243516610ca5565b341561038857600080fd5b6101d66004803560ff1690604460248035908101908301358060208082020160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610dde95505050505050565b341561041f57600080fd5b6101a7610f46565b341561043257600080fd5b6101d6610f55565b6102fc6004803560ff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949650610f5b95505050505050565b341561055557600080fd5b610192600435611521565b341561056b57600080fd5b6101a761154f565b341561057e57600080fd5b61019261155e565b6102fc6004803560ff169060446024803590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506115b095505050505050565b34156105df57600080fd5b610192600160a060020a03600435166116f3565b34156105fe57600080fd5b6101d6611730565b341561061157600080fd5b610192600160a060020a0360043516611736565b341561063057600080fd5b6102fc6004803590602480351515919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496506117b395505050505050565b34156106d057600080fd5b610192600435611a55565b34156106e657600080fd5b6102fc611aab565b34156106f957600080fd5b610192600160a060020a0360043516611ae7565b341561071857600080fd5b6101d6600435611b39565b341561072e57600080fd5b6101d6600435611b97565b341561074457600080fd5b6101d6611bc8565b600054600160a060020a031681565b600a5481565b600b54600a540390565b600d60205260009081526040812080546001820154600290920154600160a060020a03909116920b83565b600554600160a060020a031681565b60085481565b600454600160a060020a031681565b600354600160a060020a031681565b60015432600160a060020a039081169116146107e457600080fd5b600154600160a060020a0316ff5b60015460009032600160a060020a03908116911614801561082a5750600082128061082a575060008213801561082a57506000600854125b156108355760088290555b60065433600160a060020a03908116911614156108525760088290555b7fda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a260085460405190815260200160405180910390a1506008545b919050565b60095460ff1681565b60055460009060019082908190600160a060020a03161561091957600554600160a060020a0316915081636b2d13248860405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b151561090057600080fd5b5af1151561090d57600080fd5b50505060405180519350505b506000868152600d602052604090208054600160a060020a03161580159061094e5750805433600160a060020a039081169116145b156109d0576002810154600090810b900b151561099c5733600160a060020a03166108fc82600101549081150290604051600060405180830381858888f19350505050151561099c57600080fd5b6000878152600d602052604081208054600160a060020a03191681556001810191909155600201805460ff191690556109d5565b600092505b7f7f1f4b28434ce7beab4983e64a8b5bb96e195a67029fdaff925028aec57fbc6b87878786604051938452602084019290925260408084019190915290151560608301526080909101905180910390a1509095945050505050565b60075481565b60015460009032600160a060020a03908116911614610a5457600080fd5b5060038054600160a060020a031916600160a060020a03838116919091179091556006541680631cdbee5a8360405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610abe57600080fd5b5af11515610acb57600080fd5b505050604051805160058054600160a060020a031916600160a060020a0392831617905582169050633fbb5d718360405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610b3757600080fd5b5af11515610b4457600080fd5b5050506040518051600a5550600160a060020a0381166332eaf21b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610b8d57600080fd5b5af11515610b9a57600080fd5b505050604051805160048054600160a060020a031916600160a060020a03928316179055600554600a547f1c158b764edca9bf03a401a388355220a7395febb3c011729d8060572f065627935085929190911690604051600160a060020a039384168152919092166020820152604080820192909252606001905180910390a15050565b60005432600160a060020a03908116911614610c3957600080fd5b600160a060020a0381161515610c4e57600080fd5b600054600154600160a060020a0390811691161415610c835760018054600160a060020a031916600160a060020a0383161790555b60008054600160a060020a031916600160a060020a0392909216919091179055565b600154600090819081908190819032600160a060020a0390811691161480610cdb575060065433600160a060020a039081169116145b15610dcf576009805460ff191660ff881617905560055460009450600160a060020a03161515610d2f5760095487935060ff166064148015610d1b575086155b15610d2a57600b54600a540393505b610dbd565b600554600160a060020a0316915081633513a8058860405160e060020a63ffffffff841602815260048101919091526024016040805180830381600087803b1515610d7957600080fd5b5af11515610d8657600080fd5b5050506040518051906020018051919450909150506000811215610db957861515610d2a57600b54600a54039350610dbd565b8093505b610dc6836107f2565b50839450610dd4565b600094505b5050505092915050565b6007546005546000919082908190600160a060020a031615610efd57600554600160a060020a031691508163f8117ca28888886040518463ffffffff1660e060020a028152600401808460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610e73578082015183820152602001610e5b565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610eb2578082015183820152602001610e9a565b5050505090500195505050505050602060405180830381600087803b1515610ed957600080fd5b5af11515610ee657600080fd5b505050604051805191505060008112610efd578092505b7fa58326ee5bb617cb8b4f0d0f5f557c469d2d05d7a738f777037deda9c724b370878460405160ff909216825260208201526040908101905180910390a1509095945050505050565b600154600160a060020a031681565b600c5481565b6000806000610f68611bce565b600c80546001019055600654600160a060020a0316925060008080856395a078e83260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610fc857600080fd5b5af11515610fd557600080fd5b50505060405180511515905061105257600080516020611bef8339815191526069600c548e6000604051938452602084019290925260ff16604080840191909152606083019190915260c060808301819052600090830181905261010060a08401819052830152610140909101905180910390a160009650611512565b60015432600160a060020a039081169116146110ea576110738c8a8a610dde565b9450843410156110ea57600080516020611bef8339815191526067600c548e6000604051938452602084019290925260ff16604080840191909152606083019190915260c060808301819052600090830181905261010060a08401819052830152610140909101905180910390a160009650611512565b60606040519081016040908152600160a060020a0333168252346020808401919091526000828401819052600c548152600d90915220909450849081518154600160a060020a031916600160a060020a03919091161781556020820151816001015560408201516002909101805460009290920b60ff1660ff1990921691909117905550600554600160a060020a0316156112f657600554600c54600160a060020a039091169350839063123e0e80908e8c8c6040518563ffffffff1660e060020a028152600401808581526020018460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156112055780820151838201526020016111ed565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561124457808201518382015260200161122c565b505050509050019650505050505050602060405180830381600087803b151561126c57600080fd5b5af1151561127957600080fd5b505050604051805192505081156112f657600080516020611bef83398151915282600c548e6000604051938452602084019290925260ff16604080840191909152606083019190915260c060808301819052600090830181905261010060a08401819052830152610140909101905180910390a160009650611512565b600080516020611bef8339815191526000600c548e6002548f8f6040518681526020810186905260ff851660408201526060810184905260c0608082018181529060a0830190830185818151815260200191508051906020019080838360005b8381101561136e578082015183820152602001611356565b50505050905090810190601f16801561139b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156113d15780820151838201526020016113b9565b50505050905090810190601f1680156113fe5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15060005b885181101561148a5788818151811061142a57fe5b9060200190602002015115611482577f515e0a48b385fce2a8e4d9f169a97c4f6ea669a752358f5e6ab37cc3c2e84c3889828151811061146657fe5b9060200190602002015160405190815260200160405180910390a15b600101611415565b5060005b875181101561150d578881815181106114a357fe5b9060200190602002015115611505577fb6e3239e521a6c66920ae634f8e921a37e6991d520ac44d52f8516397f41b6848882815181106114df57fe5b90602001906020020151604051600160a060020a03909116815260200160405180910390a15b60010161148e565b600196505b50505050505095945050505050565b60015432600160a060020a03908116911614801561154157506000600854125b1561154c57600a8190555b50565b600654600160a060020a031681565b60015432600160a060020a0390811691161461157957600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b6001546000908190819032600160a060020a039081169116146115d257600080fd5b836040518082805190602001908083835b602083106116025780518252601f1990920191602091820191016115e3565b6001836020036101000a0380198251168184511617909252505050919091019250604091505051506116379050600186610ca5565b50600060085413156116e657600654600160a060020a03169150816349102e616040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561168557600080fd5b5af1151561169257600080fd5b5050506040518051905090507f9625d8ae00bbc11bf4dbac17532594047d634ea66e1baa95d4974d086f261c30858260405160ff9092168252151560208201526040908101905180910390a18092506116eb565b600092505b505092915050565b60015432600160a060020a0390811691161461170e57600080fd5b60048054600160a060020a031916600160a060020a0392909216919091179055565b60025481565b60015432600160a060020a0390811691161461175157600080fd5b60058054600160a060020a031916600160a060020a0383811691909117918290557fa6f2e38f0cfebf27212317fced3ac40bc62e00bd33f38d69603710740c69acb79116604051600160a060020a03909116815260200160405180910390a150565b600154600090819033600160a060020a039081169116148015906117e6575060045433600160a060020a03908116911614155b156117f45760009150611a4c565b506000858152600d602052604090208054600160a060020a0316151561181d5760009150611a4c565b6002810154600090810b900b1515611a47578415156118e35780546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561187057600080fd5b60028101805460ff191660ff1790557f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b9127188660006040519182521515602082015260806040808301829052600091830182905260c060608401819052830191909152610100909101905180910390a1611a47565b6001805490820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561191e57600080fd5b60028101805460ff191660019081179091557f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b91271890879086866040518481528315156020820152608060408201818152906060830190830185818151815260200191508051906020019080838360005b838110156119a557808201518382015260200161198d565b50505050905090810190601f1680156119d25780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611a085780820151838201526020016119f0565b50505050905090810190601f168015611a355780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b600191505b50949350505050565b60015432600160a060020a03908116911614611a7057600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60007fca8116fd70ecea0cf35f7c08eb31491cce5ebd6bafef5bd6426862df29840463600060405190815260200160405180910390a150600190565b60015432600160a060020a03908116911614611b0257600080fd5b600160a060020a0381161515611b1757600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b60015460009032600160a060020a03908116911614611b5757600080fd5b60078290557f4114f8ef80b6de2161db580cbefa14e1892d15d3ebe2062c9914e4a5773114a38260405190815260200160405180910390a1505060075490565b60065460009033600160a060020a03908116911614611bb85750600061088c565b50600b8054820190819055919050565b600b5481565b6060604051908101604090815260008083526020830181905290820152905600272aa3d0efd05809b06d40e95792681d6b844a29fe97cd703cfd5eee27510740a165627a7a7230582025c762d56b0f37dda38c7f574c953a484ace84b961f584d69783dd5db28297710029a165627a7a72305820b56170fe9709353d2227ec2d0ff2c5e905fb8105ffcac6a3382ff472683012f40029"}; module.exports=contract;