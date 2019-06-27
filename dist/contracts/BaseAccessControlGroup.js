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
      "name": "",
      "type": "address"
    }],
    "name": "members",
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
    "constant": false,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "grantAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [{
      "name": "manager",
      "type": "address"
    }],
    "name": "grantManagerAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
      "name": "candidate",
      "type": "address"
    }],
    "name": "revokeAccess",
    "outputs": [],
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
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "hasAccess",
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
    "constant": false,
    "inputs": [{
      "name": "manager",
      "type": "address"
    }],
    "name": "revokeManagerAccess",
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
      "name": "",
      "type": "address"
    }],
    "name": "managers",
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
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "MemberAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "ManagerAccessGranted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "MemberRevoked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "ManagerAccessRevoked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "operationCode",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "UnauthorizedOperation",
    "type": "event"
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
  "bytecode": "7f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f416363657373496e6465786f7232303139303532383139343230304d4c00000060045560058054600160ff19909116811761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff0000000019166405000000001790915560e06040526080908152600a60a052606460c052620000ac906006906003620001c9565b507f42734163636573734374726c47727032303139303531303135303730304d4c00601b55348015620000de57600080fd5b50604051602080620026a383398101604090815290516001805432600160a060020a031991821681178084556002805484169092179091556005546007805462010000830460ff90811660ff1992831617909255600f805461010085048416908316179055600b8054838516908316179055601380546301000000850484169083161790556017805464010000000090940490921692811692909217905560038054909316600160a060020a039586161790925583166000908152601d6020908152858220805484168517905583549094168152601c90935292909120805490921617905562000287565b600183019183908215620002515791602002820160005b838211156200022057835183826101000a81548160ff021916908360ff1602179055509260200192600101602081600001049283019260010302620001e0565b80156200024f5782816101000a81549060ff021916905560010160208160000104928301926001030262000220565b505b506200025f92915062000263565b5090565b6200028491905b808211156200025f57805460ff191681556001016200026a565b90565b61240c80620002976000396000f3006080604052600436106102e75763ffffffff60e060020a60003504166302d05d3f81146102e9578063048bd5291461031a578063055af48f1461034157806308ae4b0c1461036257806308d865d714610397578063091600e6146103ce5780630ae5e739146103e35780630dc10d3f1461040457806312915a301461041957806315c0bac11461042e57806316aed23214610455578063186897331461046a578063224dcba01461047f5780632d474cbd146104ac5780632fa5c842146104c4578063304f4a7b1461050457806330e66949146105255780633def51401461055757806341c0e1b51461058457806342e7ba7b14610599578063479a0c51146105ba57806354fd4d50146105cf5780635c1d3059146105e45780635d97b6c21461046a5780635faecb76146105f95780636373a411146106205780636813b6d11461063557806368a0469a1461065c57806369881c0c146106715780636c0f79b6146106925780636d2e4b1b146106a75780636ebc8c86146106c857806375861a95146106e05780637709bc78146107015780637cbb7bf2146107225780637fb52f1a1461074f5780638232f3f11461077d57806385e0a2001461079257806385e68531146107a75780638635adb5146107c85780638da5cb5b146107f557806392297d7b1461080a57806395a078e81461081f57806396eba03d1461077d5780639f46133e14610840578063a00b38c414610855578063a4081d6214610883578063a864dfa5146108a4578063a980892d146108cb578063aa3f6952146108e0578063af570c04146108f8578063c4b1978d1461090d578063cb86806d14610922578063cdb849b714610937578063cf8a750314610958578063d15d62a714610970578063d1aeb651146105ba578063d30f8cd014610988578063ebe9314e1461099d578063f17bda91146109b2578063f2fde38b146109df578063fb52222c14610a00578063fccc134f14610a21578063fdff9b4d14610a36578063fe538c5a14610a57575b005b3480156102f557600080fd5b506102fe610a7e565b60408051600160a060020a039092168252519081900360200190f35b34801561032657600080fd5b5061032f610a8d565b60408051918252519081900360200190f35b34801561034d57600080fd5b506102e7600160a060020a0360043516610a9e565b34801561036e57600080fd5b50610383600160a060020a0360043516610aee565b604080519115158252519081900360200190f35b3480156103a357600080fd5b506103b8600160a060020a0360043516610b03565b6040805160ff9092168252519081900360200190f35b3480156103da57600080fd5b506103b8610b21565b3480156103ef57600080fd5b506102e7600160a060020a0360043516610b2a565b34801561041057600080fd5b5061032f610db9565b34801561042557600080fd5b506103b8610dbf565b34801561043a57600080fd5b50610383600160a060020a036004351660ff60243516610dcd565b34801561046157600080fd5b506103b8610ded565b34801561047657600080fd5b506103b8610dfc565b34801561048b57600080fd5b506102e7600160a060020a036004351660ff60243581169060443516610e01565b3480156104b857600080fd5b506102fe600435610e13565b3480156104d057600080fd5b506104d9610e40565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561051057600080fd5b506103b8600160a060020a0360043516610e8b565b34801561053157600080fd5b5061053a610ea9565b6040805160ff909316835260208301919091528051918290030190f35b34801561056357600080fd5b506102e7600160a060020a036004351660ff60243581169060443516610eb8565b34801561059057600080fd5b506102e7610ec5565b3480156105a557600080fd5b50610383600160a060020a0360043516610f01565b3480156105c657600080fd5b506103b8610f24565b3480156105db57600080fd5b5061032f610f29565b3480156105f057600080fd5b5061032f610f2f565b34801561060557600080fd5b50610383600160a060020a036004351660ff60243516610f35565b34801561062c57600080fd5b506103b8610f49565b34801561064157600080fd5b50610383600160a060020a036004351660ff60243516610f5a565b34801561066857600080fd5b506103b8610f74565b34801561067d57600080fd5b506103b8600160a060020a0360043516610f84565b34801561069e57600080fd5b5061053a610fa2565b3480156106b357600080fd5b506102e7600160a060020a0360043516610fb1565b3480156106d457600080fd5b506102fe600435610fff565b3480156106ec57600080fd5b506102e7600160a060020a0360043516611011565b34801561070d57600080fd5b50610383600160a060020a036004351661119e565b34801561072e57600080fd5b506102e7600160a060020a036004351660ff602435811690604435166111a6565b34801561075b57600080fd5b5061038360ff600435811690600160a060020a036024351690604435166111b3565b34801561078957600080fd5b506103b861136a565b34801561079e57600080fd5b5061032f61136f565b3480156107b357600080fd5b506102e7600160a060020a036004351661137b565b3480156107d457600080fd5b506102e7600160a060020a036004351660ff6024358116906044351661157d565b34801561080157600080fd5b506102fe61158a565b34801561081657600080fd5b5061032f611599565b34801561082b57600080fd5b50610383600160a060020a03600435166115a5565b34801561084c57600080fd5b5061053a6115c8565b34801561086157600080fd5b5061038360ff600435811690600160a060020a036024351690604435166115d7565b34801561088f57600080fd5b506103b8600160a060020a0360043516611733565b3480156108b057600080fd5b50610383600160a060020a036004351660ff60243516611751565b3480156108d757600080fd5b5061053a61176d565b3480156108ec57600080fd5b506102fe60043561177c565b34801561090457600080fd5b506102fe61178e565b34801561091957600080fd5b5061053a61179d565b34801561092e57600080fd5b5061032f6117ac565b34801561094357600080fd5b506102e7600160a060020a03600435166117b2565b34801561096457600080fd5b506102fe600435611926565b34801561097c57600080fd5b506102fe600435611938565b34801561099457600080fd5b5061032f61194a565b3480156109a957600080fd5b5061032f611956565b3480156109be57600080fd5b506102e7600160a060020a036004351660ff6024358116906044351661195c565b3480156109eb57600080fd5b506102e7600160a060020a0360043516611969565b348015610a0c57600080fd5b506103b8600160a060020a03600435166119ce565b348015610a2d57600080fd5b5061032f6119ec565b348015610a4257600080fd5b50610383600160a060020a03600435166119f2565b348015610a6357600080fd5b50610383600160a060020a036004351660ff60243516611a07565b600154600160a060020a031681565b6000610a99600b611a22565b905090565b600254600160a060020a0316321480610ac15750600254600160a060020a031633145b1515610acc57600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b601c6020526000908152604090205460ff1681565b600160a060020a031660009081526018602052604090205460ff1690565b60055460ff1681565b336000908152601d60205260408120548190819060ff161515600114610b4f57600080fd5b600160a060020a0384166000818152601c6020908152604091829020805460ff19166001179055815192835290517fb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd9149281900390910190a16003546040805160e060020a6363e6ffdd028152600160a060020a038781166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b158015610bfc57600080fd5b505af1158015610c10573d6000803e3d6000fd5b505050506040513d6020811015610c2657600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b158015610c9357600080fd5b505af1158015610ca7573d6000803e3d6000fd5b505050506040513d6020811015610cbd57600080fd5b5051604080517f479a0c510000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163479a0c519160048083019260209291908290030181600087803b158015610d1a57600080fd5b505af1158015610d2e573d6000803e3d6000fd5b505050506040513d6020811015610d4457600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b158015610d9b57600080fd5b505af1158015610daf573d6000803e3d6000fd5b5050505050505050565b60125490565b600554610100900460ff1681565b600554600090610de690610100900460ff1684846111b3565b9392505050565b60055462010000900460ff1681565b600281565b610e0e6017848484611c8f565b505050565b601180546000919083908110610e2557fe5b600091825260209091200154600160a060020a031692915050565b6000806000806000610e526007611a22565b610e5c600f611a22565b610e66600b611a22565b610e706013611a22565b610e7a6017611a22565b945094509450945094509091929394565b600160a060020a031660009081526010602052604090205460ff1690565b600f5460125460ff9091169082565b610e0e600b848484611c8f565b600254600160a060020a0316321480610ee85750600254600160a060020a031633145b1515610ef357600080fd5b600254600160a060020a0316ff5b600160a060020a03166000908152601d602052604090205460ff16151560011490565b600181565b601b5481565b60165490565b600554600090610de69060ff1684846111b3565b600554640100000000900460ff1681565b600554600090610de69062010000900460ff1684846111b3565b6005546301000000900460ff1681565b600160a060020a03166000908152600c602052604090205460ff1690565b601754601a5460ff9091169082565b600154600160a060020a03163214610fc857600080fd5b600160a060020a0381161515610fdd57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b601980546000919083908110610e2557fe5b60025460009081908190600160a060020a031632148061103b5750600254600160a060020a031633145b151561104657600080fd5b600160a060020a0384166000818152601d602090815260408083208054600160ff199182168117909255601c845293829020805490941617909255815192835290517f93bcaab179551bde429187645251f8e1fb8ac85801fcb1cf91eb2c9043d611179281900390910190a16003546040805160e060020a6363e6ffdd028152600160a060020a038781166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561110757600080fd5b505af115801561111b573d6000803e3d6000fd5b505050506040513d602081101561113157600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b158015610c9357600080fd5b6000903b1190565b610e0e6007848484611c8f565b6000806000806000806111c78989896115d7565b9450600185151514156111dd576001955061135e565b600091505b6012548210156112dd5760118054839081106111fa57fe5b600091825260209091200154600160a060020a0316925082156112d257604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915194955085949185169163a00b38c4916064808201926020929091908290030181600087803b15801561129357600080fd5b505af11580156112a7573d6000803e3d6000fd5b505050506040513d60208110156112bd57600080fd5b50511515600114156112d2576001955061135e565b6001909101906111e2565b87905080600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561131e57600080fd5b505af1158015611332573d6000803e3d6000fd5b505050506040513d602081101561134857600080fd5b5051600254600160a060020a0390811691161495505b50505050509392505050565b600081565b6000610a996013611a22565b336000908152601d60205260408120548190819060ff161515600114806113aa575033600160a060020a038516145b15156113b557600080fd5b600160a060020a0384166000818152601c6020908152604091829020805460ff19169055815192835290517f745cd29407db644ed93e3ceb61cbcab96d1dfb496989ac5d5bf514fc5a9fab9c9281900390910190a16003546040805160e060020a6363e6ffdd028152600160a060020a038781166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561145f57600080fd5b505af1158015611473573d6000803e3d6000fd5b505050506040513d602081101561148957600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a03831691638635adb5913091849163d1aeb6519160048083019260209291908290030181600087803b1580156114f657600080fd5b505af115801561150a573d6000803e3d6000fd5b505050506040513d602081101561152057600080fd5b5051604080517f8232f3f10000000000000000000000000000000000000000000000000000000081529051600160a060020a03871691638232f3f19160048083019260209291908290030181600087803b158015610d1a57600080fd5b610e0e6013848484611c8f565b600254600160a060020a031681565b6000610a996007611a22565b600160a060020a03166000908152601c602052604090205460ff16151560011490565b60135460165460ff9091169082565b600080839050600260009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561163a57600080fd5b505af115801561164e573d6000803e3d6000fd5b505050506040513d602081101561166457600080fd5b5051600160a060020a0316141561167e576001915061172b565b60055460ff868116911614156116a15761169a600b8585612191565b915061172b565b60055460ff8681166101009092041614156116c25761169a600f8585612191565b60055460ff868116620100009092041614156116e45761169a60078585612191565b60055460ff8681166401000000009092041614156117085761169a60178585612191565b60055460ff868116630100000090920416141561172b5761169a60138585612191565b509392505050565b600160a060020a031660009081526014602052604090205460ff1690565b600554600090610de690640100000000900460ff1684846111b3565b600b54600e5460ff9091169082565b601580546000919083908110610e2557fe5b600354600160a060020a031681565b600754600a5460ff9091169082565b600a5490565b60025460009081908190600160a060020a03163314806117da575033600160a060020a038516145b15156117e557600080fd5b600160a060020a0384166000818152601d6020908152604091829020805460ff19169055815192835290517f2d6aa1a9629d125e23a0cf692cda7cd6795dff1652eedd4673b38ec31e387b959281900390910190a16003546040805160e060020a6363e6ffdd028152600160a060020a038781166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561188f57600080fd5b505af11580156118a3573d6000803e3d6000fd5b505050506040513d60208110156118b957600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a03831691638635adb59130918491635d97b6c29160048083019260209291908290030181600087803b1580156114f657600080fd5b600d80546000919083908110610e2557fe5b600980546000919083908110610e2557fe5b6000610a99600f611a22565b600e5490565b610e0e600f848484611c8f565b600254600160a060020a031632148061198c5750600254600160a060020a031633145b151561199757600080fd5b600160a060020a03811615156119ac57600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526008602052604090205460ff1690565b601a5490565b601d6020526000908152604090205460ff1681565b600554600090610de6906301000000900460ff1684846111b3565b600080805b8360030154811015611c8857611a618460020182815481101515611a4757fe5b600091825260209091200154600160a060020a031661119e565b1515611beb577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260818560020183815481101515611a9a57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a160028401805482908110611b0b57fe5b60009182526020909120018054600160a060020a0319169055600384015460019290920191600019018114611bda57836002016001856003015403815481101515611b5257fe5b600091825260209091200154600285018054600160a060020a039092169183908110611b7a57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550836002016001856003015403815481101515611bc057fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055611c83565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260818560020183815481101515611c1e57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b611a27565b5092915050565b6000806000806000611c9f6123c1565b600060ff881615611e7c576003546040805160e060020a6363e6ffdd0281523260048201529051600160a060020a03909216985088916363e6ffdd916024808201926020929091908290030181600087803b158015611cfd57600080fd5b505af1158015611d11573d6000803e3d6000fd5b505050506040513d6020811015611d2757600080fd5b50519550600160a060020a0386161515611dbc5789945084600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611d7c57600080fd5b505af1158015611d90573d6000803e3d6000fd5b505050506040513d6020811015611da657600080fd5b5051600160a060020a03163214611dbc57600080fd5b600160a060020a03861615611e7c578a54604080517f7fb52f1a00000000000000000000000000000000000000000000000000000000815260ff9092166004830152600160a060020a038c8116602484015260026044840152905188965090861691637fb52f1a9160648083019260209291908290030181600087803b158015611e4557600080fd5b505af1158015611e59573d6000803e3d6000fd5b505050506040513d6020811015611e6f57600080fd5b50511515611e7c57600080fd5b600160a060020a038a16600090815260018c01602090815260409182902054600a60ff91821690810682168087526064820681900383169387018490529281039290920316918401919091529250611ed332610f01565b15156001141561200a5760ff88161515611f065760008260ff8b1660038110611ef857fe5b60ff90921660209290920201525b60018260ff8b1660038110611f1757fe5b602002015160ff16148015611f30575060ff8816600114155b15611f7b57600660ff8a1660038110611f4557fe5b602081049091015460ff601f9092166101000a9004811689029083908b1660038110611f6d57fe5b60ff90921660209290920201525b600160ff891610611fce57600660ff8a1660038110611f9657fe5b602091828204019190069054906101000a900460ff16600202828a60ff16600381101515611fc057fe5b60ff90921660209290920201525b60ff8916158015611fe1575060ff881615155b156120055760028260ff8b1660038110611ff757fe5b60ff90921660209290920201525b6120a4565b600160ff89161080159061203257508160ff8a166003811061202857fe5b602002015160ff16155b1561207b57600660ff8a166003811061204757fe5b602081049091015460ff601f9092166101000a900481169083908b166003811061206d57fe5b60ff90921660209290920201525b60ff881615156120a45760008260ff8b166003811061209657fe5b60ff90921660209290920201525b81600260200201518260016020020151836000602002015101019050808b60010160008c600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff16600014158015612115575060ff8316155b15612124576121248b8b6121e5565b60ff8116151561213a576121388b8b61227c565b505b60408051308152600160a060020a038c16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff908116906006908416600381106121c157fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b60028201546003830154101561223e578082600201836003015481548110151561220b57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555061226f565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b83600301548110156123b75782600160a060020a031684600201828154811015156122a757fe5b600091825260209091200154600160a060020a031614156123af57600284018054829081106122d257fe5b60009182526020909120018054600160a060020a0319169055600384015460001901811461239a5783600201600185600301540381548110151561231257fe5b600091825260209091200154600285018054600160a060020a03909216918390811061233a57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561238057fe5b60009182526020909120018054600160a060020a03191690555b60038401805460001901905560019150611c88565b600101612280565b5060009392505050565b60606040519081016040528060039060208202803883395091929150505600a165627a7a7230582022a16f2ce6478a176092155621111b859013a06fa9be6c2d66e3cbc76bf9b2460029"
};
module.exports = contract;