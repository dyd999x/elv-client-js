"use strict";

var contract = {
  "abi": [{
    "constant": true,
    "inputs": [],
    "name": "parentAddress",
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
      "name": "",
      "type": "uint256"
    }],
    "name": "membersList",
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
    "name": "canConfirm",
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
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "managersList",
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
    "constant": true,
    "inputs": [],
    "name": "countVersionHashes",
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
    "name": "commitPending",
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
    "constant": false,
    "inputs": [],
    "name": "confirmCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
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
    "name": "membersNum",
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
    "constant": false,
    "inputs": [],
    "name": "clearPending",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "pendingHash",
    "outputs": [{
      "name": "",
      "type": "string"
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
    "inputs": [],
    "name": "managersNum",
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
    "inputs": [],
    "name": "canCommit",
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
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionTimestamp",
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
      "type": "uint256"
    }],
    "name": "versionHashes",
    "outputs": [{
      "name": "",
      "type": "string"
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
    "constant": false,
    "inputs": [{
      "name": "_objectHash",
      "type": "string"
    }],
    "name": "commit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [],
    "name": "updateRequest",
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
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }, {
      "name": "mgr",
      "type": "bool"
    }],
    "name": "hasAccessRight",
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
    "name": "objectHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_versionHash",
      "type": "string"
    }],
    "name": "deleteVersion",
    "outputs": [{
      "name": "",
      "type": "int256"
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
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "parentAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "CommitPending",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "UpdateRequest",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "versionHash",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "int256"
    }],
    "name": "VersionDelete",
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
  "bytecode": "7f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f416363657373496e6465786f7232303139313131333230323430304d4c00000060045560058054600160ff19909116811761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff0000000019166405000000001790915560e06040526080908152600a60a052606460c052620000ac906006906003620001fd565b507f4564697461626c6532303139303830313133353530304d4c0000000000000000601b557f42734163636573734374726c47727032303139303732333136353930304d4c006022553480156200010257600080fd5b5060405160208062003da1833981016040525160018054600160a060020a0319908116329081178084556002805484169092179091556005546007805460ff1990811660ff620100008504811691909117909255600f8054821661010085048416179055600b805482168385161790556013805482166301000000850484161790556017805490911664010000000090930490911691909117905560038054600160a060020a039586169084161790556000602481905560258054808601825591527f401968ff42a154441da5f6c4c935ac46b8671f0e062baaa62a7545ba53bb6e4c018054909216931692909217909155602655620002bb565b600183019183908215620002855791602002820160005b838211156200025457835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000214565b8015620002835782816101000a81549060ff021916905560010160208160000104928301926001030262000254565b505b506200029392915062000297565b5090565b620002b891905b808211156200029357805460ff191681556001016200029e565b90565b613ad680620002cb6000396000f3006080604052600436106103ac5763ffffffff60e060020a600035041662821de381146103ae57806302d05d3f146103df578063048bd529146103f4578063055af48f1461041b57806308d865d71461043c578063091600e6146104735780630ae5e739146104885780630dc10d3f146104a957806312915a30146104be57806313b8ad31146104d357806314cfabb3146104eb57806315c0bac11461051457806316aed2321461053b57806318689733146105505780631fcd779414610565578063224dcba01461057d5780632d474cbd146105aa5780632fa5c842146105c2578063304f4a7b1461060257806330e6694914610623578063331b86c014610655578063375a6e7c1461066a5780633def51401461067f57806341c0e1b5146106ac57806342e7ba7b146106c1578063446e8826146106e2578063479a0c51146106ea57806354fd4d50146106ff57806355277a5b146107145780635c1d3059146107295780635d97b6c2146105505780635f6a13011461073e5780635faecb7614610753578063628449fd1461077a5780636373a41114610804578063638d0290146108195780636813b6d11461082e57806368a0469a1461085557806369881c0c1461086a5780636c0f79b61461088b5780636d2e4b1b146108a05780636e375427146108c15780636ebc8c86146108d657806375861a95146108ee5780637709bc781461090f5780637886f747146109305780637ca8f618146109485780637cbb7bf2146109605780637fb52f1a1461098d5780638232f3f1146109bb57806385e0a200146109d057806385e68531146109e55780638635adb514610a065780638da5cb5b14610a3357806392297d7b14610a4857806395a078e814610a5d57806396eba03d146109bb5780639867db7414610a7e5780639f46133e14610ad7578063a00b38c414610aec578063a4081d6214610b1a578063a864dfa514610b3b578063a980892d14610b62578063aa3f695214610b77578063af570c0414610b8f578063b8ff1dba14610ba4578063c287e0ed14610bb9578063c4b1978d14610bce578063cb86806d14610be3578063cdb849b714610bf8578063cf8a750314610c19578063d15d62a714610c31578063d1aeb651146106ea578063d30f8cd014610c49578063d8961c8d14610c5e578063e02dd9c214610c84578063e1a7071714610c99578063ebe9314e14610cf2578063f17bda9114610d07578063f2fde38b14610d34578063fb52222c14610d55578063fccc134f14610d76578063fe538c5a14610d8b575b005b3480156103ba57600080fd5b506103c3610db2565b60408051600160a060020a039092168252519081900360200190f35b3480156103eb57600080fd5b506103c3610dc2565b34801561040057600080fd5b50610409610dd1565b60408051918252519081900360200190f35b34801561042757600080fd5b506103ac600160a060020a0360043516610de2565b34801561044857600080fd5b5061045d600160a060020a0360043516610e32565b6040805160ff9092168252519081900360200190f35b34801561047f57600080fd5b5061045d610e50565b34801561049457600080fd5b506103ac600160a060020a0360043516610e59565b3480156104b557600080fd5b506104096111cb565b3480156104ca57600080fd5b5061045d6111d1565b3480156104df57600080fd5b506103c36004356111df565b3480156104f757600080fd5b50610500611207565b604080519115158252519081900360200190f35b34801561052057600080fd5b50610500600160a060020a036004351660ff602435166112a2565b34801561054757600080fd5b5061045d6112c2565b34801561055c57600080fd5b5061045d6112d1565b34801561057157600080fd5b506103c36004356112d6565b34801561058957600080fd5b506103ac600160a060020a036004351660ff602435811690604435166112e4565b3480156105b657600080fd5b506103c36004356112f6565b3480156105ce57600080fd5b506105d7611323565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561060e57600080fd5b5061045d600160a060020a036004351661136e565b34801561062f57600080fd5b5061063861138c565b6040805160ff909316835260208301919091528051918290030190f35b34801561066157600080fd5b5061040961139b565b34801561067657600080fd5b506105006113a1565b34801561068b57600080fd5b506103ac600160a060020a036004351660ff602435811690604435166113aa565b3480156106b857600080fd5b506103ac6113b7565b3480156106cd57600080fd5b50610500600160a060020a03600435166113f3565b610500611406565b3480156106f657600080fd5b5061045d6115f6565b34801561070b57600080fd5b506104096115fb565b34801561072057600080fd5b50610409611601565b34801561073557600080fd5b50610409611607565b34801561074a57600080fd5b506103ac61160d565b34801561075f57600080fd5b50610500600160a060020a036004351660ff6024351661164b565b34801561078657600080fd5b5061078f61165f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156107c95781810151838201526020016107b1565b50505050905090810190601f1680156107f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561081057600080fd5b5061045d6116ed565b34801561082557600080fd5b506104096116fe565b34801561083a57600080fd5b50610500600160a060020a036004351660ff60243516611704565b34801561086157600080fd5b5061045d61171e565b34801561087657600080fd5b5061045d600160a060020a036004351661172e565b34801561089757600080fd5b5061063861174c565b3480156108ac57600080fd5b506103ac600160a060020a036004351661175b565b3480156108cd57600080fd5b506105006117a9565b3480156108e257600080fd5b506103c36004356117ba565b3480156108fa57600080fd5b506103ac600160a060020a03600435166117cc565b34801561091b57600080fd5b50610500600160a060020a0360043516611a31565b34801561093c57600080fd5b50610409600435611a39565b34801561095457600080fd5b5061078f600435611a58565b34801561096c57600080fd5b506103ac600160a060020a036004351660ff60243581169060443516611acc565b34801561099957600080fd5b5061050060ff600435811690600160a060020a03602435169060443516611ad9565b3480156109c757600080fd5b5061045d611ce0565b3480156109dc57600080fd5b50610409611ce5565b3480156109f157600080fd5b506103ac600160a060020a0360043516611cf1565b348015610a1257600080fd5b506103ac600160a060020a036004351660ff60243581169060443516612094565b348015610a3f57600080fd5b506103c36120a1565b348015610a5457600080fd5b506104096120b0565b348015610a6957600080fd5b50610500600160a060020a03600435166120bc565b348015610a8a57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac9436949293602493928401919081908401838280828437509497506120c99650505050505050565b348015610ae357600080fd5b506106386121f8565b348015610af857600080fd5b5061050060ff600435811690600160a060020a03602435169060443516612207565b348015610b2657600080fd5b5061045d600160a060020a03600435166122c1565b348015610b4757600080fd5b50610500600160a060020a036004351660ff602435166122df565b348015610b6e57600080fd5b506106386122fb565b348015610b8357600080fd5b506103c360043561230a565b348015610b9b57600080fd5b506103c361231c565b348015610bb057600080fd5b506103ac61232b565b348015610bc557600080fd5b506103ac612415565b348015610bda57600080fd5b506106386124eb565b348015610bef57600080fd5b506104096124fa565b348015610c0457600080fd5b506103ac600160a060020a0360043516612500565b348015610c2557600080fd5b506103c360043561277f565b348015610c3d57600080fd5b506103c3600435612791565b348015610c5557600080fd5b506104096127a3565b348015610c6a57600080fd5b50610500600160a060020a036004351660243515156127af565b348015610c9057600080fd5b5061078f612994565b348015610ca557600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104099436949293602493928401919081908401838280828437509497506129ef9650505050505050565b348015610cfe57600080fd5b50610409612f97565b348015610d1357600080fd5b506103ac600160a060020a036004351660ff60243581169060443516612f9d565b348015610d4057600080fd5b506103ac600160a060020a0360043516612faa565b348015610d6157600080fd5b5061045d600160a060020a036004351661300f565b348015610d8257600080fd5b5061040961302d565b348015610d9757600080fd5b50610500600160a060020a036004351660ff60243516613033565b600354600160a060020a03165b90565b600154600160a060020a031681565b6000610ddd600b61304e565b905090565b600254600160a060020a0316321480610e055750600254600160a060020a031633145b1515610e1057600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526018602052604090205460ff1690565b60055460ff1681565b600080600080610e68336113f3565b1515600114610e7657600080fd5b60009350600092505b602454831015610ed15784600160a060020a0316602384815481101515610ea257fe5b600091825260209091200154600160a060020a03161415610ec65760019350610ed1565b600190920191610e7f565b831515610f7f576024546023541415610f3457602380546001810182556000919091527fd57b2b5166478fd4318d2acc6cc2c704584312bdd8781b32d5d06abda57f4230018054600160a060020a031916600160a060020a038716179055610f75565b846023602454815481101515610f4657fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6024805460010190555b60408051600160a060020a038716815290517fb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd9149181900360200190a16003546040805160e060020a639ad54793028152600160a060020a03888116600483015291519190921691639ad547939160248083019260209291908290030181600087803b15801561100d57600080fd5b505af1158015611021573d6000803e3d6000fd5b505050506040513d602081101561103757600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b1580156110a457600080fd5b505af11580156110b8573d6000803e3d6000fd5b505050506040513d60208110156110ce57600080fd5b5051604080517f479a0c510000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163479a0c519160048083019260209291908290030181600087803b15801561112b57600080fd5b505af115801561113f573d6000803e3d6000fd5b505050506040513d602081101561115557600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b1580156111ac57600080fd5b505af11580156111c0573d6000803e3d6000fd5b505050505050505050565b60125490565b600554610100900460ff1681565b60238054829081106111ed57fe5b600091825260209091200154600160a060020a0316905081565b600354604080517f26683e140000000000000000000000000000000000000000000000000000000081523360048201529051600092600160a060020a03169182916326683e149160248082019260209290919082900301818887803b15801561126f57600080fd5b505af1158015611283573d6000803e3d6000fd5b505050506040513d602081101561129957600080fd5b505191505b5090565b6005546000906112bb90610100900460ff168484611ad9565b9392505050565b60055462010000900460ff1681565b600281565b60258054829081106111ed57fe5b6112f160178484846132bb565b505050565b60118054600091908390811061130857fe5b600091825260209091200154600160a060020a031692915050565b6000806000806000611335600761304e565b61133f600f61304e565b611349600b61304e565b611353601361304e565b61135d601761304e565b945094509450945094509091929394565b600160a060020a031660009081526010602052604090205460ff1690565b600f5460125460ff9091169082565b601e5490565b60215460ff1681565b6112f1600b8484846132bb565b600254600160a060020a03163214806113da5750600254600160a060020a031633145b15156113e557600080fd5b600254600160a060020a0316ff5b60006114008260016127af565b92915050565b6000611410611207565b151561141b57600080fd5b60215460ff16151561142c57600080fd5b6000601c80546001816001161561010002031660029004905011156114db57601e80546001818101808455600093909352601c80546114a2937f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e35001926002610100918316159190910260001901909116046138d4565b5050601d54601f80546001810182556000919091527fa03837a25210ee280c2113ff4b77ca23440b19d4866cca721c801278fd08d80701555b602080546114fe91601c91600260001961010060018416150201909116046138d4565b5042601d5560408051602081810192839052600091829052611521929091613955565b506021805460ff1916905560035460408051600160a060020a0390921680835260208301828152601c8054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156115e15780601f106115b6576101008083540402835291602001916115e1565b820191906000526020600020905b8154815290600101906020018083116115c457829003601f168201915b5050935050505060405180910390a150600190565b600181565b60225481565b60245481565b60165490565b6116156117a9565b151561162057600080fd5b6040805160208181019283905260009182905261163e929091613955565b506021805460ff19169055565b6005546000906112bb9060ff168484611ad9565b6020805460408051601f600260001961010060018716150201909416939093049283018490048402810184019091528181529190828201828280156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b505050505081565b600554640100000000900460ff1681565b60265481565b6005546000906112bb9062010000900460ff168484611ad9565b6005546301000000900460ff1681565b600160a060020a03166000908152600c602052604090205460ff1690565b601754601a5460ff9091169082565b600154600160a060020a0316321461177257600080fd5b600160a060020a038116151561178757600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b60198054600091908390811061130857fe5b600254600090819081908190600160a060020a03163214806117f85750600254600160a060020a031633145b151561180357600080fd5b60009350600092505b60265483101561185e5784600160a060020a031660258481548110151561182f57fe5b600091825260209091200154600160a060020a03161415611853576001935061185e565b60019092019161180c565b83151561190c5760265460255414156118c157602580546001810182556000919091527f401968ff42a154441da5f6c4c935ac46b8671f0e062baaa62a7545ba53bb6e4c018054600160a060020a031916600160a060020a038716179055611902565b8460256026548154811015156118d357fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6026805460010190555b60408051600160a060020a038716815290517f93bcaab179551bde429187645251f8e1fb8ac85801fcb1cf91eb2c9043d611179181900360200190a16003546040805160e060020a639ad54793028152600160a060020a03888116600483015291519190921691639ad547939160248083019260209291908290030181600087803b15801561199a57600080fd5b505af11580156119ae573d6000803e3d6000fd5b505050506040513d60208110156119c457600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b1580156110a457600080fd5b6000903b1190565b601f805482908110611a4757fe5b600091825260209091200154905081565b601e805482908110611a6657fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156116e55780601f106116ba576101008083540402835291602001916116e5565b6112f160078484846132bb565b600080600080600080879450600260009054906101000a9004600160a060020a0316600160a060020a031685600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611b4257600080fd5b505af1158015611b56573d6000803e3d6000fd5b505050506040513d6020811015611b6c57600080fd5b5051600160a060020a03161415611b865760019550611cd4565b611b91898989612207565b935060018415151415611ba75760019550611cd4565b5060005b601254811015611ccf576011805482908110611bc357fe5b600091825260209091200154600160a060020a031691508115801590611c075750600160a060020a038216600090815260106020526040902054600a60ff90911610155b15611cc757604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915193945084939184169163a00b38c4916064808201926020929091908290030181600087803b158015611c8857600080fd5b505af1158015611c9c573d6000803e3d6000fd5b505050506040513d6020811015611cb257600080fd5b5051151560011415611cc75760019550611cd4565b600101611bab565b600095505b50505050509392505050565b600081565b6000610ddd601361304e565b6000806000611cff336113f3565b151560011480611d17575033600160a060020a038516145b1515611d2257600080fd5b600092505b602454831015611e495783600160a060020a0316602384815481101515611d4a57fe5b600091825260209091200154600160a060020a03161415611e3e576023805484908110611d7357fe5b60009182526020909120018054600160a060020a0319169055602454600019018314611e2f576023600160245403815481101515611dad57fe5b60009182526020909120015460238054600160a060020a039092169185908110611dd357fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506023600160245403815481101515611e1557fe5b60009182526020909120018054600160a060020a03191690555b60248054600019019055611e49565b600190920191611d27565b60408051600160a060020a038616815290517f745cd29407db644ed93e3ceb61cbcab96d1dfb496989ac5d5bf514fc5a9fab9c9181900360200190a16003546040805160e060020a639ad54793028152600160a060020a03878116600483015291519190921691639ad547939160248083019260209291908290030181600087803b158015611ed757600080fd5b505af1158015611eeb573d6000803e3d6000fd5b505050506040513d6020811015611f0157600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b158015611f6e57600080fd5b505af1158015611f82573d6000803e3d6000fd5b505050506040513d6020811015611f9857600080fd5b5051604080517f8232f3f10000000000000000000000000000000000000000000000000000000081529051600160a060020a03871691638232f3f19160048083019260209291908290030181600087803b158015611ff557600080fd5b505af1158015612009573d6000803e3d6000fd5b505050506040513d602081101561201f57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b15801561207657600080fd5b505af115801561208a573d6000803e3d6000fd5b5050505050505050565b6112f160138484846132bb565b600254600160a060020a031681565b6000610ddd600761304e565b60006114008260006127af565b6120d16117a9565b15156120dc57600080fd5b60215460ff16156120ec57600080fd5b80516080116120fa57600080fd5b805161210c9060209081840190613955565b506021805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316612150610db2565b60408051600160a060020a0380851682528316602082810191909152606092820183815281546002600019610100600184161502019091160493830184905290926080830190849080156121e55780601f106121ba576101008083540402835291602001916121e5565b820191906000526020600020905b8154815290600101906020018083116121c857829003601f168201915b505094505050505060405180910390a150565b60135460165460ff9091169082565b60055460009060ff8581169116141561222d57612226600b84846136ae565b90506112bb565b60055460ff85811661010090920416141561224e57612226600f84846136ae565b60055460ff8581166201000090920416141561227057612226600784846136ae565b60055460ff85811664010000000090920416141561229457612226601784846136ae565b60055460ff85811663010000009092041614156122b757612226601384846136ae565b5060009392505050565b600160a060020a031660009081526014602052604090205460ff1690565b6005546000906112bb90640100000000900460ff168484611ad9565b600b54600e5460ff9091169082565b60158054600091908390811061130857fe5b600354600160a060020a031681565b6000806123366139c3565b336000818152600c602081815260408084208054600a60ff8083169182068116808b5260648306819003821683038190038216958b018690526006546101009004821660020282168b8801819052988a9052969095529590940190910191821660ff1990931683179055929550909350158015906123b5575060ff8316155b156123c5576123c5600b85613702565b60408051308152600160a060020a038616602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a150505050565b600254600160a060020a03163314806124315750612431611207565b151561243c57600080fd5b604080516020808252601c8054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156124db5780601f106124b0576101008083540402835291602001916124db565b820191906000526020600020905b8154815290600101906020018083116124be57829003601f168201915b50509250505060405180910390a1565b600754600a5460ff9091169082565b600a5490565b60025460009081908190600160a060020a0316331480612528575033600160a060020a038516145b151561253357600080fd5b600092505b60265483101561265a5783600160a060020a031660258481548110151561255b57fe5b600091825260209091200154600160a060020a0316141561264f57602580548490811061258457fe5b60009182526020909120018054600160a060020a03191690556026546000190183146126405760256001602654038154811015156125be57fe5b60009182526020909120015460258054600160a060020a0390921691859081106125e457fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550602560016026540381548110151561262657fe5b60009182526020909120018054600160a060020a03191690555b6026805460001901905561265a565b600190920191612538565b60408051600160a060020a038616815290517f2d6aa1a9629d125e23a0cf692cda7cd6795dff1652eedd4673b38ec31e387b959181900360200190a16003546040805160e060020a639ad54793028152600160a060020a03878116600483015291519190921691639ad547939160248083019260209291908290030181600087803b1580156126e857600080fd5b505af11580156126fc573d6000803e3d6000fd5b505050506040513d602081101561271257600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b158015611f6e57600080fd5b600d8054600091908390811061130857fe5b60098054600091908390811061130857fe5b6000610ddd600f61304e565b6003546040805160e060020a639ad54793028152600160a060020a038581166004830152915160009384938493911691639ad547939160248082019260209290919082900301818787803b15801561280657600080fd5b505af115801561281a573d6000803e3d6000fd5b505050506040513d602081101561283057600080fd5b505191508190506001841515141561293e5780600160a060020a03166315c0bac13083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561289057600080fd5b505af11580156128a4573d6000803e3d6000fd5b505050506040513d60208110156128ba57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561290b57600080fd5b505af115801561291f573d6000803e3d6000fd5b505050506040513d602081101561293557600080fd5b5051925061298c565b80600160a060020a03166315c0bac13083600160a060020a031663d1aeb6516040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561289057600080fd5b505092915050565b601c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156116e55780601f106116ba576101008083540402835291602001916116e5565b600080600080600080612a006117a9565b1515612a0b57600080fd5b866040516020018082805190602001908083835b60208310612a3e5780518252601f199092019160209182019101612a1f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310612aa15780518252601f199092019160209182019101612a82565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450601c6040516020018082805460018160011615610100020316600290048015612b305780601f10612b0e576101008083540402835291820191612b30565b820191906000526020600020905b815481529060010190602001808311612b1c575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612b735780518252601f199092019160209182019101612b54565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120965050505084841415612c9457604080516020810191829052600090819052612bc791601c91613955565b506000601d81905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b83811015612c4f578181015183820152602001612c37565b50505050905090810190601f168015612c7c5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550612f8d565b6000199250600091505b601e54821015612eaa57601e805483908110612cb657fe5b906000526020600020016040516020018082805460018160011615610100020316600290048015612d1e5780601f10612cfc576101008083540402835291820191612d1e565b820191906000526020600020905b815481529060010190602001808311612d0a575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612d615780518252601f199092019160209182019101612d42565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120935050505084811415612e9f57601e805483908110612da557fe5b906000526020600020016000612dbb91906139e2565b601f805483908110612dc957fe5b6000918252602082200155601e54600019018214612e6f57601e80546000198101908110612df357fe5b90600052602060002001601e83815481101515612e0c57fe5b906000526020600020019080546001816001161561010002031660029004612e359291906138d4565b50601f80546000198101908110612e4857fe5b9060005260206000200154601f83815481101515612e6257fe5b6000918252602090912001555b601e805490612e82906000198301613a29565b50601f805490612e96906000198301613a4d565b50819250612eaa565b600190910190612c9e565b600019831415612eb957600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015612f4d578181015183820152602001612f35565b50505050905090810190601f168015612f7a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600e5490565b6112f1600f8484846132bb565b600254600160a060020a0316321480612fcd5750600254600160a060020a031633145b1515612fd857600080fd5b600160a060020a0381161515612fed57600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526008602052604090205460ff1690565b601a5490565b6005546000906112bb906301000000900460ff168484611ad9565b600080805b83600301548110156132b45761308d846002018281548110151561307357fe5b600091825260209091200154600160a060020a0316611a31565b1515613217577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b2608185600201838154811015156130c657fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16002840180548290811061313757fe5b60009182526020909120018054600160a060020a03191690556003840154600192909201916000190181146132065783600201600185600301540381548110151561317e57fe5b600091825260209091200154600285018054600160a060020a0390921691839081106131a657fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055508360020160018560030154038154811015156131ec57fe5b60009182526020909120018054600160a060020a03191690555b6003840180546000190190556132af565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b26081856002018381548110151561324a57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b613053565b5092915050565b6000806000806000806132cc6139c3565b60008060006132da326113f3565b6003546040805160e060020a639ad547930281523260048201529051929c5060009b50600160a060020a0390911699508991639ad547939160248082019260209290919082900301818f87803b15801561333357600080fd5b505af1158015613347573d6000803e3d6000fd5b505050506040513d602081101561335d57600080fd5b8101908080519060200190929190505050965086955085600160a060020a0316637fb52f1a8f60000160009054906101000a900460ff168f60026040518463ffffffff1660e060020a028152600401808460ff1660ff16815260200183600160a060020a0316600160a060020a031681526020018260ff1660ff1681526020019350505050602060405180830381600087803b1580156133fc57600080fd5b505af1158015613410573d6000803e3d6000fd5b505050506040513d602081101561342657600080fd5b810190808051906020019092919050505098508d60010160008e600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff169450600a8560ff1681151561347f57fe5b0660ff90811680865260648783160681900382166020870181905287030381166040860152600093508b925082161580156134be575089806134be5750885b156134c857600192505b60ff8b16158015906134d75750895b80156134f9575060018460ff8e16600381106134ef57fe5b602002015160ff16145b156135075760019250600291505b60ff8b16158015906135165750885b8015613539575060028460ff8e166003811061352e57fe5b602002015160ff1614155b156135475760019250600191505b60ff8b16158015906135565750895b801561355f5750885b1561356d5760019250600291505b82151561357957600080fd5b600660ff8d166003811061358957fe5b602081049091015460ff601f9092166101000a9004811683029085908e16600381106135b157fe5b60ff909216602092909202015283600260200201518460016020020151856000602002015101019050808e60010160008f600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff1660001415801561362f575060ff8516155b1561363e5761363e8e8e613702565b60ff81161515613654576136528e8e613799565b505b60408051308152600160a060020a038f16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff908116906006908416600381106136de57fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b60028201546003830154101561375b578082600201836003015481548110151561372857fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555061378c565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b83600301548110156122b75782600160a060020a031684600201828154811015156137c457fe5b600091825260209091200154600160a060020a031614156138cc57600284018054829081106137ef57fe5b60009182526020909120018054600160a060020a031916905560038401546000190181146138b75783600201600185600301540381548110151561382f57fe5b600091825260209091200154600285018054600160a060020a03909216918390811061385757fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561389d57fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055600191506132b4565b60010161379d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061390d5780548555613949565b8280016001018555821561394957600052602060002091601f016020900482015b8281111561394957825482559160010191906001019061392e565b5061129e929150613a6d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061399657805160ff1916838001178555613949565b82800160010185558215613949579182015b828111156139495782518255916020019190600101906139a8565b6060604051908101604052806003906020820280388339509192915050565b50805460018160011615610100020316600290046000825580601f10613a085750613a26565b601f016020900490600052602060002090810190613a269190613a6d565b50565b8154818355818111156112f1576000838152602090206112f1918101908301613a87565b8154818355818111156112f1576000838152602090206112f19181019083015b610dbf91905b8082111561129e5760008155600101613a73565b610dbf91905b8082111561129e576000613aa182826139e2565b50600101613a8d5600a165627a7a72305820ec5346dc21fcd98f46657c70039eca0592b779ebced28100d60071380f317b630029"
};
module.exports = contract;