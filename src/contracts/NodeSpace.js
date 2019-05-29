const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_locator","type":"bytes"}],"name":"submitNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"canNodePublish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numActiveNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"activeNodeLocators","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"activeNodeAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nodeAddr","type":"address"},{"name":"_locator","type":"bytes"}],"name":"addNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pendingNodeLocators","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pendingNodeAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nodeAddr","type":"address"}],"name":"removeNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nodeAddr","type":"address"}],"name":"approveNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numPendingNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"locator","type":"bytes"}],"name":"NodeSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"locator","type":"bytes"}],"name":"NodeApproved","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f4e6f6465537061636532303139303532383137303130304d4c0000000000000060045560018054600160a060020a0319908116329081179092556002805490911690911790556113e48061007e6000396000f3006080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146100fd578063160eee741461012e57806326683e141461018757806341c0e1b5146101bc57806343f59ec7146101d15780635272ae17146101f857806352f82dd81461028557806354fd4d501461029d57806364f0f050146102b257806369e30ff8146103195780636be9514c146103315780636d2e4b1b146103495780638da5cb5b1461036a578063af570c041461037f578063b2b99ec914610394578063dd4c97a0146103b5578063f2fde38b146103d6578063f41a1587146103f7575b005b34801561010957600080fd5b5061011261040c565b60408051600160a060020a039092168252519081900360200190f35b34801561013a57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100fb94369492936024939284019190819084018382808284375094975061041b9650505050505050565b34801561019357600080fd5b506101a8600160a060020a03600435166107db565b604080519115158252519081900360200190f35b3480156101c857600080fd5b506100fb610839565b3480156101dd57600080fd5b506101e6610875565b60408051918252519081900360200190f35b34801561020457600080fd5b5061021060043561087c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024a578181015183820152602001610232565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029157600080fd5b50610112600435610923565b3480156102a957600080fd5b506101e661094b565b3480156102be57600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100fb958335600160a060020a03169536956044949193909101919081908401838280828437509497506109519650505050505050565b34801561032557600080fd5b50610210600435610b60565b34801561033d57600080fd5b50610112600435610b6e565b34801561035557600080fd5b506100fb600160a060020a0360043516610b7c565b34801561037657600080fd5b50610112610bd7565b34801561038b57600080fd5b50610112610be6565b3480156103a057600080fd5b506100fb600160a060020a0360043516610bf5565b3480156103c157600080fd5b506100fb600160a060020a0360043516610c81565b3480156103e257600080fd5b506100fb600160a060020a0360043516610ed4565b34801561040357600080fd5b506101e6610f46565b600154600160a060020a031681565b610551600780548060200260200160405190810160405280929190818152602001828054801561047457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610456575b50505050506008805480602002602001604051908101604052809291908181526020016000905b828210156105465760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156105325780601f1061050757610100808354040283529160200191610532565b820191906000526020600020905b81548152906001019060200180831161051557829003601f168201915b50505050508152602001906001019061049b565b505050503384610f4c565b1561055b57600080fd5b61068660058054806020026020016040519081016040528092919081815260200182805480156105b457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610596575b50505050506006805480602002602001604051908101604052809291908181526020016000905b828210156105465760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156106725780601f1061064757610100808354040283529160200191610672565b820191906000526020600020905b81548152906001019060200180831161065557829003601f168201915b5050505050815260200190600101906105db565b1561069057600080fd5b60075460641161069f57600080fd5b600880546001810180835560009290925282516106e3917ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3019060208501906111fd565b50506007805460018101825560009182527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff19163390811790915560408051828152602081810183815286519383019390935285517fae5645569f32b946f7a747113c64094a29a6b84c5ddf55816ef4381ce8a3a46d958794926060850192908601918190849084905b8381101561079d578181015183820152602001610785565b50505050905090810190601f1680156107ca5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a150565b6000805b60055481101561082e5782600160a060020a031660058281548110151561080257fe5b600091825260209091200154600160a060020a031614156108265760019150610833565b6001016107df565b600091505b50919050565b600254600160a060020a031632148061085c5750600254600160a060020a031633145b151561086757600080fd5b600254600160a060020a0316ff5b6006545b90565b600680548290811061088a57fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561091b5780601f106108f05761010080835404028352916020019161091b565b820191906000526020600020905b8154815290600101906020018083116108fe57829003601f168201915b505050505081565b600580548290811061093157fe5b600091825260209091200154600160a060020a0316905081565b60045481565b600254600160a060020a03163214806109745750600254600160a060020a031633145b151561097f57600080fd5b610ab560058054806020026020016040519081016040528092919081815260200182805480156109d857602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116109ba575b50505050506006805480602002602001604051908101604052809291908181526020016000905b82821015610aaa5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015610a965780601f10610a6b57610100808354040283529160200191610a96565b820191906000526020600020905b815481529060010190602001808311610a7957829003601f168201915b5050505050815260200190600101906109ff565b505050508484610f4c565b15610abf57600080fd5b6005805460018082019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790556006805491820180825560009190915282519091610b5a917ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f9091019060208501906111fd565b50505050565b600880548290811061088a57fe5b600780548290811061093157fe5b600154600160a060020a03163214610b9357600080fd5b600160a060020a0381161515610ba857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b600354600160a060020a031681565b600254600090600160a060020a0316321480610c1b5750600254600160a060020a031633145b1515610c2657600080fd5b5060005b600554811015610c7d5781600160a060020a0316600582815481101515610c4d57fe5b600091825260209091200154600160a060020a03161415610c7557610c75816005600661109a565b600101610c2a565b5050565b6002546000908190600160a060020a0316321480610ca95750600254600160a060020a031633145b1515610cb457600080fd5b5060009050805b600754811015610ec35782600160a060020a0316600782815481101515610cde57fe5b600091825260209091200154600160a060020a03161415610ebb576005600782815481101515610d0a57fe5b600091825260208083209091015483546001810185559383529120909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055600880546006919083908110610d6457fe5b60009182526020808320845460018181018088559686529290942092018054610da8949390930192909160026101009183161591909102600019019091160461127b565b50507fd644c8164f225d3b7fdbcc404f279bb1e823ef0d93f88dd4b24e85d0e7bc6a54600782815481101515610dda57fe5b60009182526020909120015460088054600160a060020a039092169184908110610e0057fe5b600091825260209182902060408051600160a060020a0386168152938401818152919092018054600260001961010060018416150201909116049284018390529291606083019084908015610e965780601f10610e6b57610100808354040283529160200191610e96565b820191906000526020600020905b815481529060010190602001808311610e7957829003601f168201915b5050935050505060405180910390a1610eb2816007600861109a565b60019150610ec3565b600101610cbb565b811515610ecf57600080fd5b505050565b600254600160a060020a0316321480610ef75750600254600160a060020a031633145b1515610f0257600080fd5b600160a060020a0381161515610f1757600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60085490565b60008084518651141515610f5f57600080fd5b5060005b855181101561108c57826040518082805190602001908083835b60208310610f9c5780518252601f199092019160209182019101610f7d565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912088519093508892508491508110610fd857fe5b906020019060200201516040518082805190602001908083835b602083106110115780518252601f199092019160209182019101610ff2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161480611076575083600160a060020a0316868281518110151561106157fe5b90602001906020020151600160a060020a0316145b156110845760019150611091565b600101610f63565b600091505b50949350505050565b8154831080156110aa5750805483105b15156110b557600080fd5b815460001901831461117c578054819060001981019081106110d357fe5b9060005260206000200181848154811015156110eb57fe5b90600052602060002001908054600181600116156101000203166002900461111492919061127b565b5081548290600019810190811061112757fe5b6000918252602090912001548254600160a060020a039091169083908590811061114d57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b80548190600019810190811061118e57fe5b9060005260206000200160006111a491906112f0565b80546111b4826000198301611337565b508154829060001981019081106111c757fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191690558154610b5a83600019830161135b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061123e57805160ff191683800117855561126b565b8280016001018555821561126b579182015b8281111561126b578251825591602001919060010190611250565b5061127792915061137b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106112b4578054855561126b565b8280016001018555821561126b57600052602060002091601f016020900482015b8281111561126b5782548255916001019190600101906112d5565b50805460018160011615610100020316600290046000825580601f106113165750611334565b601f016020900490600052602060002090810190611334919061137b565b50565b815481835581811115610ecf57600083815260209020610ecf918101908301611395565b815481835581811115610ecf57600083815260209020610ecf9181019083015b61087991905b808211156112775760008155600101611381565b61087991905b808211156112775760006113af82826112f0565b5060010161139b5600a165627a7a72305820eaf78744503992a4348972ba0e6621849c98bf87721cda3614b33baa695dfc020029"}; module.exports=contract;