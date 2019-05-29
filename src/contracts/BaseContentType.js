const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"publish","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"stakeholder","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"group","type":"address"},{"name":"access_type","type":"uint8"},{"name":"access","type":"uint8"}],"name":"setGroupRights","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"countVersionHashes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"versionHashes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_objectHash","type":"string"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canPublish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"content_space","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"CommitPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[],"name":"AccessRequest","type":"event"}],"bytecode":"608060408190527f41636365737369626c6532303139303232323133353930304d4c0000000000006000557f4f776e61626c6532303139303532383139333830304d4c0000000000000000006001557f4564697461626c653230313930353232313534303030535300000000000000006005557f42617365436f6e74656e745479706532303139303532383139343030304d4c00600955602080610e0583398101604052516002805432600160a060020a0319918216811790925560038054821690921790915560048054909116600160a060020a03909216919091179055610d18806100ed6000396000f3006080604052600436106100d75763ffffffff60e060020a60003504166302d05d3f81146100d9578063075d47821461010a5780630fe1b5a21461012657806322e564eb14610153578063331b86c01461018057806341c0e1b5146101a757806354fd4d50146101bc5780636d2e4b1b146101d15780637ca8f618146101f25780638da5cb5b1461027f5780639867db7414610294578063af570c04146102ed578063c287e0ed14610302578063cbcd446114610317578063e02dd9c21461032c578063f155188714610341578063f2fde38b14610356575b005b3480156100e557600080fd5b506100ee610377565b60408051600160a060020a039092168252519081900360200190f35b610112610386565b604080519115158252519081900360200190f35b34801561013257600080fd5b506100d7600160a060020a036004351660ff6024358116906044351661045a565b34801561015f57600080fd5b506100d7600160a060020a036004351660ff6024358116906044351661052a565b34801561018c57600080fd5b506101956105bc565b60408051918252519081900360200190f35b3480156101b357600080fd5b506100d76105c3565b3480156101c857600080fd5b506101956105ff565b3480156101dd57600080fd5b506100d7600160a060020a0360043516610605565b3480156101fe57600080fd5b5061020a600435610660565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024457818101518382015260200161022c565b50505050905090810190601f1680156102715780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028b57600080fd5b506100ee610707565b3480156102a057600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100d79436949293602493928401919081908401838280828437509497506107169650505050505050565b3480156102f957600080fd5b506100ee61080f565b34801561030e57600080fd5b506100d761081e565b34801561032357600080fd5b506101126108f4565b34801561033857600080fd5b5061020a610ae5565b34801561034d57600080fd5b50610112610b40565b34801561036257600080fd5b506100d7600160a060020a0360043516610b71565b600254600160a060020a031681565b60006103906108f4565b151561039b57600080fd5b6000600680546001816001161561010002031660029004905011156104145760078054600181810180845560009390935260068054610411937fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880192600261010091831615919091026000190190911604610be3565b50505b600880546104379160069160026000196101006001841615020190911604610be3565b5060408051602081019182905260009081905261045691600891610c64565b5090565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152600160a060020a03878116948201949094529051929091169160009183916363e6ffdd9160248082019260209290919082900301818787803b1580156104ca57600080fd5b505af11580156104de573d6000803e3d6000fd5b505050506040513d60208110156104f457600080fd5b50519050600160a060020a03811615156105185761051385858561052a565b610523565b61052381858561052a565b5050505050565b604080517f3def514000000000000000000000000000000000000000000000000000000000815230600482015260ff80851660248301528316604482015290518491600160a060020a03831691633def51409160648082019260009290919082900301818387803b15801561059e57600080fd5b505af11580156105b2573d6000803e3d6000fd5b5050505050505050565b6007545b90565b600354600160a060020a03163214806105e65750600354600160a060020a031633145b15156105f157600080fd5b600354600160a060020a0316ff5b60095481565b600254600160a060020a0316321461061c57600080fd5b600160a060020a038116151561063157600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600780548290811061066e57fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156106ff5780601f106106d4576101008083540402835291602001916106ff565b820191906000526020600020905b8154815290600101906020018083116106e257829003601f168201915b505050505081565b600354600160a060020a031681565b600354600160a060020a031633148061073257506107326108f4565b151561073d57600080fd5b805160801161074b57600080fd5b805161075e906008906020840190610c64565b5060408051602080825260088054600260001961010060018416150201909116049183018290527fa7021134f9e5141fe46680e9fd6c294f51e7a7e990557d09c689b422dea3ffa5939092918291820190849080156107fe5780601f106107d3576101008083540402835291602001916107fe565b820191906000526020600020905b8154815290600101906020018083116107e157829003601f168201915b50509250505060405180910390a150565b600454600160a060020a031681565b600354600160a060020a031633148061083a575061083a6108f4565b151561084557600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156108e45780601f106108b9576101008083540402835291602001916108e4565b820191906000526020600020905b8154815290600101906020018083116108c757829003601f168201915b50509250505060405180910390a1565b60035460009081908190600160a060020a031632148061091e5750600354600160a060020a031633145b1561092c5760019250610ae0565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152329381019390935251600160a060020a03909116916363e6ffdd9160248083019260209291908290030181600087803b15801561099357600080fd5b505af11580156109a7573d6000803e3d6000fd5b505050506040513d60208110156109bd57600080fd5b50519150600160a060020a03821615610adb5781905080600160a060020a031663fe538c5a3083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610a2157600080fd5b505af1158015610a35573d6000803e3d6000fd5b505050506040513d6020811015610a4b57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b158015610a9c57600080fd5b505af1158015610ab0573d6000803e3d6000fd5b505050506040513d6020811015610ac657600080fd5b5051151560011415610adb5760019250610ae0565b600092505b505090565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106ff5780601f106106d4576101008083540402835291602001916106ff565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600354600160a060020a0316321480610b945750600354600160a060020a031633145b1515610b9f57600080fd5b600160a060020a0381161515610bb457600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1c5780548555610c58565b82800160010185558215610c5857600052602060002091601f016020900482015b82811115610c58578254825591600101919060010190610c3d565b50610456929150610cd2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ca557805160ff1916838001178555610c58565b82800160010185558215610c58579182015b82811115610c58578251825591602001919060010190610cb7565b6105c091905b808211156104565760008155600101610cd85600a165627a7a723058207d61678e1b79cd97dc789d0ff75548b66f89bf91c70707d66215fdcbb6d733320029"}; module.exports=contract;