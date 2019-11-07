"use strict";

var contract = {
  "abi": [{
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentObjects",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "name": "setContentSpace",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContractRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_OBJECT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getAccessGroupsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_GROUP",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_LIBRARY",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_CONFIRMED",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContractRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getAccessGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAll",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }],
    "name": "getAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "accessGroups",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentObjectRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "hasManagerAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_TENTATIVE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_EDIT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTRACT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkLibraryRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_TYPE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contracts",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newCreator",
      "type": "address"
    }],
    "name": "transferCreatorship",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContract",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "contractExists",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setLibraryRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_NONE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentTypes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentTypeRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpLibraries",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_SEE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypes",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkDirectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContractRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentObjects",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentSpace",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "setAccessRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "libraries",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getLibrariesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentObject",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_ACCESS",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAccessGroups",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentObjectsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setAccessGroupRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }],
    "name": "getLibraryRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContractsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "principal",
      "type": "address"
    }, {
      "indexed": false,
      "name": "entity",
      "type": "address"
    }, {
      "indexed": false,
      "name": "aggregate",
      "type": "uint8"
    }],
    "name": "RightsChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "a",
      "type": "address"
    }],
    "name": "dbgAddress",
    "type": "event"
  }],
  "bytecode": "7f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f416363657373496e6465786f7232303139303830313134313030304d4c00000060045560058054600160ff19909116811761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff0000000019166405000000001790915560e06040526080908152600a60a052606460c052620000ac9060069060036200013a565b506001805432600160a060020a031991821681179092556002805490911690911790556005546007805462010000830460ff90811660ff1992831617909255600f805461010085048416908316179055600b805483851690831617905560138054630100000085048416908316179055601780546401000000009094049092169216919091179055620001f8565b600183019183908215620001c25791602002820160005b838211156200019157835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000151565b8015620001c05782816101000a81549060ff021916905560010160208160000104928301926001030262000191565b505b50620001d0929150620001d4565b5090565b620001f591905b80821115620001d057805460ff19168155600101620001db565b90565b611a7380620002086000396000f3006080604052600436106102a55763ffffffff60e060020a60003504166302d05d3f81146102a7578063048bd529146102d8578063055af48f146102ff57806308d865d714610320578063091600e6146103575780630dc10d3f1461036c57806312915a301461038157806315c0bac11461039657806316aed232146103d157806318689733146103e6578063224dcba0146103fb5780632d474cbd146104285780632fa5c84214610440578063304f4a7b1461048057806330e66949146104a15780633def5140146104d357806341c0e1b51461050057806342e7ba7b14610515578063479a0c511461053657806354fd4d501461054b5780635c1d3059146105605780635d97b6c2146103e65780635faecb76146105755780636373a4111461059c5780636813b6d1146105b157806368a0469a146105d857806369881c0c146105ed5780636c0f79b61461060e5780636d2e4b1b146106235780636ebc8c86146106445780637709bc781461065c5780637cbb7bf21461067d5780637fb52f1a146106aa5780638232f3f1146106d857806385e0a200146106ed5780638635adb5146107025780638da5cb5b1461072f57806392297d7b1461074457806396eba03d146106d85780639f46133e14610759578063a00b38c41461076e578063a4081d621461079c578063a864dfa5146107bd578063a980892d146107e4578063aa3f6952146107f9578063af570c0414610811578063b8ff1dba14610826578063c4b1978d1461083b578063cb86806d14610850578063cf8a750314610865578063d15d62a71461087d578063d1aeb65114610536578063d30f8cd014610895578063ebe9314e146108aa578063f17bda91146108bf578063f2fde38b146108ec578063fb52222c1461090d578063fccc134f1461092e578063fe538c5a14610943575b005b3480156102b357600080fd5b506102bc61096a565b60408051600160a060020a039092168252519081900360200190f35b3480156102e457600080fd5b506102ed610979565b60408051918252519081900360200190f35b34801561030b57600080fd5b506102a5600160a060020a036004351661098a565b34801561032c57600080fd5b50610341600160a060020a03600435166109da565b6040805160ff9092168252519081900360200190f35b34801561036357600080fd5b506103416109f8565b34801561037857600080fd5b506102ed610a01565b34801561038d57600080fd5b50610341610a07565b3480156103a257600080fd5b506103bd600160a060020a036004351660ff60243516610a15565b604080519115158252519081900360200190f35b3480156103dd57600080fd5b50610341610a35565b3480156103f257600080fd5b50610341610a44565b34801561040757600080fd5b506102a5600160a060020a036004351660ff60243581169060443516610a49565b34801561043457600080fd5b506102bc600435610a5b565b34801561044c57600080fd5b50610455610a88565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561048c57600080fd5b50610341600160a060020a0360043516610ad3565b3480156104ad57600080fd5b506104b6610af1565b6040805160ff909316835260208301919091528051918290030190f35b3480156104df57600080fd5b506102a5600160a060020a036004351660ff60243581169060443516610b00565b34801561050c57600080fd5b506102a5610b0d565b34801561052157600080fd5b506103bd600160a060020a0360043516610b49565b34801561054257600080fd5b50610341610b5d565b34801561055757600080fd5b506102ed610b62565b34801561056c57600080fd5b506102ed610b68565b34801561058157600080fd5b506103bd600160a060020a036004351660ff60243516610b6e565b3480156105a857600080fd5b50610341610b82565b3480156105bd57600080fd5b506103bd600160a060020a036004351660ff60243516610b93565b3480156105e457600080fd5b50610341610bad565b3480156105f957600080fd5b50610341600160a060020a0360043516610bbd565b34801561061a57600080fd5b506104b6610bdb565b34801561062f57600080fd5b506102a5600160a060020a0360043516610bea565b34801561065057600080fd5b506102bc600435610c38565b34801561066857600080fd5b506103bd600160a060020a0360043516610c4a565b34801561068957600080fd5b506102a5600160a060020a036004351660ff60243581169060443516610c52565b3480156106b657600080fd5b506103bd60ff600435811690600160a060020a03602435169060443516610c5f565b3480156106e457600080fd5b50610341610e3a565b3480156106f957600080fd5b506102ed610e3f565b34801561070e57600080fd5b506102a5600160a060020a036004351660ff60243581169060443516610e4b565b34801561073b57600080fd5b506102bc610e58565b34801561075057600080fd5b506102ed610e67565b34801561076557600080fd5b506104b6610e73565b34801561077a57600080fd5b506103bd60ff600435811690600160a060020a03602435169060443516610e82565b3480156107a857600080fd5b50610341600160a060020a0360043516610f32565b3480156107c957600080fd5b506103bd600160a060020a036004351660ff60243516610f50565b3480156107f057600080fd5b506104b6610f6c565b34801561080557600080fd5b506102bc600435610f7b565b34801561081d57600080fd5b506102bc610f8d565b34801561083257600080fd5b506102a5610f9c565b34801561084757600080fd5b506104b6611086565b34801561085c57600080fd5b506102ed611095565b34801561087157600080fd5b506102bc60043561109b565b34801561088957600080fd5b506102bc6004356110ad565b3480156108a157600080fd5b506102ed6110bf565b3480156108b657600080fd5b506102ed6110cb565b3480156108cb57600080fd5b506102a5600160a060020a036004351660ff602435811690604435166110d1565b3480156108f857600080fd5b506102a5600160a060020a03600435166110de565b34801561091957600080fd5b50610341600160a060020a0360043516611143565b34801561093a57600080fd5b506102ed611161565b34801561094f57600080fd5b506103bd600160a060020a036004351660ff60243516611167565b600154600160a060020a031681565b6000610985600b611182565b905090565b600254600160a060020a03163214806109ad5750600254600160a060020a031633145b15156109b857600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526018602052604090205460ff1690565b60055460ff1681565b60125490565b600554610100900460ff1681565b600554600090610a2e90610100900460ff168484610c5f565b9392505050565b60055462010000900460ff1681565b600281565b610a5660178484846113ef565b505050565b601180546000919083908110610a6d57fe5b600091825260209091200154600160a060020a031692915050565b6000806000806000610a9a6007611182565b610aa4600f611182565b610aae600b611182565b610ab86013611182565b610ac26017611182565b945094509450945094509091929394565b600160a060020a031660009081526010602052604090205460ff1690565b600f5460125460ff9091169082565b610a56600b8484846113ef565b600254600160a060020a0316321480610b305750600254600160a060020a031633145b1515610b3b57600080fd5b600254600160a060020a0316ff5b600254600160a060020a0390811691161490565b600181565b60045481565b60165490565b600554600090610a2e9060ff168484610c5f565b600554640100000000900460ff1681565b600554600090610a2e9062010000900460ff168484610c5f565b6005546301000000900460ff1681565b600160a060020a03166000908152600c602052604090205460ff1690565b601754601a5460ff9091169082565b600154600160a060020a03163214610c0157600080fd5b600160a060020a0381161515610c1657600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b601980546000919083908110610a6d57fe5b6000903b1190565b610a5660078484846113ef565b600080600080600080879450600260009054906101000a9004600160a060020a0316600160a060020a031685600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610cc857600080fd5b505af1158015610cdc573d6000803e3d6000fd5b505050506040513d6020811015610cf257600080fd5b5051600160a060020a03161415610d0c5760019550610e2e565b610d17898989610e82565b935060018415151415610d2d5760019550610e2e565b5060005b601254811015610e29576011805482908110610d4957fe5b600091825260209091200154600160a060020a031691508115610e2157604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915193945084939184169163a00b38c4916064808201926020929091908290030181600087803b158015610de257600080fd5b505af1158015610df6573d6000803e3d6000fd5b505050506040513d6020811015610e0c57600080fd5b5051151560011415610e215760019550610e2e565b600101610d31565b600095505b50505050509392505050565b600081565b60006109856013611182565b610a5660138484846113ef565b600254600160a060020a031681565b60006109856007611182565b60135460165460ff9091169082565b60055460009060ff85811691161415610ea857610ea1600b84846117f8565b9050610a2e565b60055460ff858116610100909204161415610ec957610ea1600f84846117f8565b60055460ff85811662010000909204161415610eeb57610ea1600784846117f8565b60055460ff858116640100000000909204161415610f0f57610ea1601784846117f8565b60055460ff8581166301000000909204161415610a2e57610ea1601384846117f8565b600160a060020a031660009081526014602052604090205460ff1690565b600554600090610a2e90640100000000900460ff168484610c5f565b600b54600e5460ff9091169082565b601580546000919083908110610a6d57fe5b600354600160a060020a031681565b600080610fa7611a28565b336000818152600c602081815260408084208054600a60ff8083169182068116808b5260648306819003821683038190038216958b018690526006546101009004821660020282168b8801819052988a9052969095529590940190910191821660ff199093168317905592955090935015801590611026575060ff8316155b1561103657611036600b8561184c565b60408051308152600160a060020a038616602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a150505050565b600754600a5460ff9091169082565b600a5490565b600d80546000919083908110610a6d57fe5b600980546000919083908110610a6d57fe5b6000610985600f611182565b600e5490565b610a56600f8484846113ef565b600254600160a060020a03163214806111015750600254600160a060020a031633145b151561110c57600080fd5b600160a060020a038116151561112157600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526008602052604090205460ff1690565b601a5490565b600554600090610a2e906301000000900460ff168484610c5f565b600080805b83600301548110156113e8576111c184600201828154811015156111a757fe5b600091825260209091200154600160a060020a0316610c4a565b151561134b577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b2608185600201838154811015156111fa57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16002840180548290811061126b57fe5b60009182526020909120018054600160a060020a031916905560038401546001929092019160001901811461133a578360020160018560030154038154811015156112b257fe5b600091825260209091200154600285018054600160a060020a0390921691839081106112da57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561132057fe5b60009182526020909120018054600160a060020a03191690555b6003840180546000190190556113e3565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b26081856002018381548110151561137e57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b611187565b5092915050565b600080600080600080611400611a28565b600080600061140e32610b49565b600354604080517f63e6ffdd0000000000000000000000000000000000000000000000000000000081523260048201529051929c5060009b50600160a060020a03909116995089916363e6ffdd9160248082019260209290919082900301818f87803b15801561147d57600080fd5b505af1158015611491573d6000803e3d6000fd5b505050506040513d60208110156114a757600080fd5b8101908080519060200190929190505050965086955085600160a060020a0316637fb52f1a8f60000160009054906101000a900460ff168f60026040518463ffffffff1660e060020a028152600401808460ff1660ff16815260200183600160a060020a0316600160a060020a031681526020018260ff1660ff1681526020019350505050602060405180830381600087803b15801561154657600080fd5b505af115801561155a573d6000803e3d6000fd5b505050506040513d602081101561157057600080fd5b810190808051906020019092919050505098508d60010160008e600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff169450600a8560ff168115156115c957fe5b0660ff90811680865260648783160681900382166020870181905287030381166040860152600093508b92508216158015611608575089806116085750885b1561161257600192505b60ff8b16158015906116215750895b8015611643575060018460ff8e166003811061163957fe5b602002015160ff16145b156116515760019250600291505b60ff8b16158015906116605750885b8015611683575060028460ff8e166003811061167857fe5b602002015160ff1614155b156116915760019250600191505b60ff8b16158015906116a05750895b80156116a95750885b156116b75760019250600291505b8215156116c357600080fd5b600660ff8d16600381106116d357fe5b602081049091015460ff601f9092166101000a9004811683029085908e16600381106116fb57fe5b60ff909216602092909202015283600260200201518460016020020151856000602002015101019050808e60010160008f600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff16600014158015611779575060ff8516155b15611788576117888e8e61184c565b60ff8116151561179e5761179c8e8e6118e3565b505b60408051308152600160a060020a038f16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff9081169060069084166003811061182857fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b6002820154600383015410156118a5578082600201836003015481548110151561187257fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506118d6565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b8360030154811015611a1e5782600160a060020a0316846002018281548110151561190e57fe5b600091825260209091200154600160a060020a03161415611a16576002840180548290811061193957fe5b60009182526020909120018054600160a060020a03191690556003840154600019018114611a015783600201600185600301540381548110151561197957fe5b600091825260209091200154600285018054600160a060020a0390921691839081106119a157fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055508360020160018560030154038154811015156119e757fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055600191506113e8565b6001016118e7565b5060009392505050565b60606040519081016040528060039060208202803883395091929150505600a165627a7a72305820a240b66677cd3a3de7ae38065c674fe0a5bc1212649b86bf9504ee2b949ed9aa0029"
};
module.exports = contract;