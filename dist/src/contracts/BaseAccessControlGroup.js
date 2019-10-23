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
  "bytecode": "7f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f416363657373496e6465786f7232303139303830313134313030304d4c00000060045560058054600160ff19909116811761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff0000000019166405000000001790915560e06040526080908152600a60a052606460c052620000ac906006906003620001fd565b507f4564697461626c6532303139303830313133353530304d4c0000000000000000601b557f42734163636573734374726c47727032303139303732333136353930304d4c006021553480156200010257600080fd5b5060405160208062003dde833981016040525160018054600160a060020a0319908116329081178084556002805484169092179091556005546007805460ff1990811660ff620100008504811691909117909255600f8054821661010085048416179055600b805482168385161790556013805482166301000000850484161790556017805490911664010000000090930490911691909117905560038054600160a060020a039586169084161790556000602381905560248054808601825591527f7cd332d19b93bcabe3cce7ca0c18a052f57e5fd03b4758a09f30f5ddc4b22ec4018054909216931692909217909155602555620002bb565b600183019183908215620002855791602002820160005b838211156200025457835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000214565b8015620002835782816101000a81549060ff021916905560010160208160000104928301926001030262000254565b505b506200029392915062000297565b5090565b620002b891905b808211156200029357805460ff191681556001016200029e565b90565b613b1380620002cb6000396000f3006080604052600436106103965763ffffffff60e060020a600035041662821de3811461039857806302d05d3f146103c9578063048bd529146103de578063055af48f1461040557806308d865d714610426578063091600e61461045d5780630ae5e739146104725780630dc10d3f1461049357806312915a30146104a857806313b8ad31146104bd57806314cfabb3146104d557806315c0bac1146104fe57806316aed23214610525578063186897331461053a5780631fcd77941461054f578063224dcba0146105675780632d474cbd146105945780632fa5c842146105ac578063304f4a7b146105ec57806330e669491461060d578063331b86c01461063f5780633def51401461065457806341c0e1b51461068157806342e7ba7b14610696578063446e8826146106b7578063479a0c51146106bf57806354fd4d50146106d457806355277a5b146106e95780635c1d3059146106fe5780635d97b6c21461053a5780635faecb7614610713578063628449fd1461073a5780636373a411146107c4578063638d0290146107d95780636813b6d1146107ee57806368a0469a1461081557806369881c0c1461082a5780636c0f79b61461084b5780636d2e4b1b146108605780636e375427146108815780636ebc8c861461089657806375861a95146108ae5780637709bc78146108cf5780637886f747146108f05780637ca8f618146109085780637cbb7bf2146109205780637fb52f1a1461094d5780638232f3f11461097b57806385e0a2001461099057806385e68531146109a55780638635adb5146109c65780638da5cb5b146109f357806392297d7b14610a0857806395a078e814610a1d57806396eba03d1461097b5780639867db7414610a3e5780639f46133e14610a97578063a00b38c414610aac578063a4081d6214610ada578063a864dfa514610afb578063a980892d14610b22578063aa3f695214610b37578063af570c0414610b4f578063b8ff1dba14610b64578063c287e0ed14610b79578063c4b1978d14610b8e578063cb86806d14610ba3578063cdb849b714610bb8578063cf8a750314610bd9578063d15d62a714610bf1578063d1aeb651146106bf578063d30f8cd014610c09578063d8961c8d14610c1e578063e02dd9c214610c44578063e1a7071714610c59578063ebe9314e14610cb2578063f17bda9114610cc7578063f2fde38b14610cf4578063fb52222c14610d15578063fccc134f14610d36578063fe538c5a14610d4b575b005b3480156103a457600080fd5b506103ad610d72565b60408051600160a060020a039092168252519081900360200190f35b3480156103d557600080fd5b506103ad610d82565b3480156103ea57600080fd5b506103f3610d91565b60408051918252519081900360200190f35b34801561041157600080fd5b50610396600160a060020a0360043516610da2565b34801561043257600080fd5b50610447600160a060020a0360043516610df2565b6040805160ff9092168252519081900360200190f35b34801561046957600080fd5b50610447610e10565b34801561047e57600080fd5b50610396600160a060020a0360043516610e19565b34801561049f57600080fd5b506103f3611191565b3480156104b457600080fd5b50610447611197565b3480156104c957600080fd5b506103ad6004356111a5565b3480156104e157600080fd5b506104ea6111cd565b604080519115158252519081900360200190f35b34801561050a57600080fd5b506104ea600160a060020a036004351660ff60243516611268565b34801561053157600080fd5b50610447611288565b34801561054657600080fd5b50610447611297565b34801561055b57600080fd5b506103ad60043561129c565b34801561057357600080fd5b50610396600160a060020a036004351660ff602435811690604435166112aa565b3480156105a057600080fd5b506103ad6004356112bc565b3480156105b857600080fd5b506105c16112e9565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b3480156105f857600080fd5b50610447600160a060020a0360043516611334565b34801561061957600080fd5b50610622611352565b6040805160ff909316835260208301919091528051918290030190f35b34801561064b57600080fd5b506103f3611361565b34801561066057600080fd5b50610396600160a060020a036004351660ff60243581169060443516611367565b34801561068d57600080fd5b50610396611374565b3480156106a257600080fd5b506104ea600160a060020a03600435166113b0565b6104ea6113c3565b3480156106cb57600080fd5b50610447611598565b3480156106e057600080fd5b506103f361159d565b3480156106f557600080fd5b506103f36115a3565b34801561070a57600080fd5b506103f36115a9565b34801561071f57600080fd5b506104ea600160a060020a036004351660ff602435166115af565b34801561074657600080fd5b5061074f6115c3565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610789578181015183820152602001610771565b50505050905090810190601f1680156107b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107d057600080fd5b50610447611651565b3480156107e557600080fd5b506103f3611662565b3480156107fa57600080fd5b506104ea600160a060020a036004351660ff60243516611668565b34801561082157600080fd5b50610447611682565b34801561083657600080fd5b50610447600160a060020a0360043516611692565b34801561085757600080fd5b506106226116b0565b34801561086c57600080fd5b50610396600160a060020a03600435166116bf565b34801561088d57600080fd5b506104ea61170d565b3480156108a257600080fd5b506103ad60043561171e565b3480156108ba57600080fd5b50610396600160a060020a0360043516611730565b3480156108db57600080fd5b506104ea600160a060020a036004351661199a565b3480156108fc57600080fd5b506103f36004356119a2565b34801561091457600080fd5b5061074f6004356119c1565b34801561092c57600080fd5b50610396600160a060020a036004351660ff60243581169060443516611a35565b34801561095957600080fd5b506104ea60ff600435811690600160a060020a03602435169060443516611a42565b34801561098757600080fd5b50610447611c1d565b34801561099c57600080fd5b506103f3611c22565b3480156109b157600080fd5b50610396600160a060020a0360043516611c2e565b3480156109d257600080fd5b50610396600160a060020a036004351660ff60243581169060443516611fd6565b3480156109ff57600080fd5b506103ad611fe3565b348015610a1457600080fd5b506103f3611ff2565b348015610a2957600080fd5b506104ea600160a060020a0360043516611ffe565b348015610a4a57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261039694369492936024939284019190819084018382808284375094975061200b9650505050505050565b348015610aa357600080fd5b5061062261211d565b348015610ab857600080fd5b506104ea60ff600435811690600160a060020a0360243516906044351661212c565b348015610ae657600080fd5b50610447600160a060020a03600435166121dc565b348015610b0757600080fd5b506104ea600160a060020a036004351660ff602435166121fa565b348015610b2e57600080fd5b50610622612216565b348015610b4357600080fd5b506103ad600435612225565b348015610b5b57600080fd5b506103ad612237565b348015610b7057600080fd5b50610396612246565b348015610b8557600080fd5b50610396612330565b348015610b9a57600080fd5b50610622612406565b348015610baf57600080fd5b506103f3612415565b348015610bc457600080fd5b50610396600160a060020a036004351661241b565b348015610be557600080fd5b506103ad60043561269f565b348015610bfd57600080fd5b506103ad6004356126b1565b348015610c1557600080fd5b506103f36126c3565b348015610c2a57600080fd5b506104ea600160a060020a036004351660243515156126cf565b348015610c5057600080fd5b5061074f6128b8565b348015610c6557600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103f39436949293602493928401919081908401838280828437509497506129139650505050505050565b348015610cbe57600080fd5b506103f3612ebb565b348015610cd357600080fd5b50610396600160a060020a036004351660ff60243581169060443516612ec1565b348015610d0057600080fd5b50610396600160a060020a0360043516612ece565b348015610d2157600080fd5b50610447600160a060020a0360043516612f33565b348015610d4257600080fd5b506103f3612f51565b348015610d5757600080fd5b506104ea600160a060020a036004351660ff60243516612f57565b600354600160a060020a03165b90565b600154600160a060020a031681565b6000610d9d600b612f72565b905090565b600254600160a060020a0316321480610dc55750600254600160a060020a031633145b1515610dd057600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526018602052604090205460ff1690565b60055460ff1681565b6000806000806000610e2a336113b0565b1515600114610e3857600080fd5b60009450600093505b602354841015610e935785600160a060020a0316602285815481101515610e6457fe5b600091825260209091200154600160a060020a03161415610e885760019450610e93565b600190930192610e41565b841515610f41576023546022541415610ef657602280546001810182556000919091527f61035b26e3e9eee00e0d72fd1ee8ddca6894550dca6916ea2ac6baa90d11e510018054600160a060020a031916600160a060020a038816179055610f37565b856022602354815481101515610f0857fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6023805460010190555b60408051600160a060020a038816815290517fb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd9149181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038981166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b158015610fd257600080fd5b505af1158015610fe6573d6000803e3d6000fd5b505050506040513d6020811015610ffc57600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b15801561106957600080fd5b505af115801561107d573d6000803e3d6000fd5b505050506040513d602081101561109357600080fd5b5051604080517f479a0c510000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163479a0c519160048083019260209291908290030181600087803b1580156110f057600080fd5b505af1158015611104573d6000803e3d6000fd5b505050506040513d602081101561111a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b15801561117157600080fd5b505af1158015611185573d6000803e3d6000fd5b50505050505050505050565b60125490565b600554610100900460ff1681565b60228054829081106111b357fe5b600091825260209091200154600160a060020a0316905081565b600354604080517f26683e140000000000000000000000000000000000000000000000000000000081523360048201529051600092600160a060020a03169182916326683e149160248082019260209290919082900301818887803b15801561123557600080fd5b505af1158015611249573d6000803e3d6000fd5b505050506040513d602081101561125f57600080fd5b505191505b5090565b60055460009061128190610100900460ff168484611a42565b9392505050565b60055462010000900460ff1681565b600281565b60248054829081106111b357fe5b6112b760178484846131df565b505050565b6011805460009190839081106112ce57fe5b600091825260209091200154600160a060020a031692915050565b60008060008060006112fb6007612f72565b611305600f612f72565b61130f600b612f72565b6113196013612f72565b6113236017612f72565b945094509450945094509091929394565b600160a060020a031660009081526010602052604090205460ff1690565b600f5460125460ff9091169082565b601e5490565b6112b7600b8484846131df565b600254600160a060020a03163214806113975750600254600160a060020a031633145b15156113a257600080fd5b600254600160a060020a0316ff5b60006113bd8260016126cf565b92915050565b60006113cd6111cd565b15156113d857600080fd5b6000601c805460018160011615610100020316600290049050111561148757601e80546001818101808455600093909352601c805461144e937f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e3500192600261010091831615919091026000190190911604613911565b5050601d54601f80546001810182556000919091527fa03837a25210ee280c2113ff4b77ca23440b19d4866cca721c801278fd08d80701555b602080546114aa91601c9160026000196101006001841615020190911604613911565b5042601d55604080516020818101928390526000918290526114cd929091613992565b5060035460408051600160a060020a0390921680835260208301828152601c8054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156115835780601f1061155857610100808354040283529160200191611583565b820191906000526020600020905b81548152906001019060200180831161156657829003601f168201915b5050935050505060405180910390a150600190565b600181565b60215481565b60235481565b60165490565b6005546000906112819060ff168484611a42565b6020805460408051601f600260001961010060018716150201909416939093049283018490048402810184019091528181529190828201828280156116495780601f1061161e57610100808354040283529160200191611649565b820191906000526020600020905b81548152906001019060200180831161162c57829003601f168201915b505050505081565b600554640100000000900460ff1681565b60255481565b6005546000906112819062010000900460ff168484611a42565b6005546301000000900460ff1681565b600160a060020a03166000908152600c602052604090205460ff1690565b601754601a5460ff9091169082565b600154600160a060020a031632146116d657600080fd5b600160a060020a03811615156116eb57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b6019805460009190839081106112ce57fe5b6002546000908190819081908190600160a060020a031632148061175e5750600254600160a060020a031633145b151561176957600080fd5b60009450600093505b6025548410156117c45785600160a060020a031660248581548110151561179557fe5b600091825260209091200154600160a060020a031614156117b957600194506117c4565b600190930192611772565b84151561187257602554602454141561182757602480546001810182556000919091527f7cd332d19b93bcabe3cce7ca0c18a052f57e5fd03b4758a09f30f5ddc4b22ec4018054600160a060020a031916600160a060020a038816179055611868565b85602460255481548110151561183957fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6025805460010190555b60408051600160a060020a038816815290517f93bcaab179551bde429187645251f8e1fb8ac85801fcb1cf91eb2c9043d611179181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038981166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561190357600080fd5b505af1158015611917573d6000803e3d6000fd5b505050506040513d602081101561192d57600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b15801561106957600080fd5b6000903b1190565b601f8054829081106119b057fe5b600091825260209091200154905081565b601e8054829081106119cf57fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156116495780601f1061161e57610100808354040283529160200191611649565b6112b760078484846131df565b600080600080600080879450600260009054906101000a9004600160a060020a0316600160a060020a031685600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611aab57600080fd5b505af1158015611abf573d6000803e3d6000fd5b505050506040513d6020811015611ad557600080fd5b5051600160a060020a03161415611aef5760019550611c11565b611afa89898961212c565b935060018415151415611b105760019550611c11565b5060005b601254811015611c0c576011805482908110611b2c57fe5b600091825260209091200154600160a060020a031691508115611c0457604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915193945084939184169163a00b38c4916064808201926020929091908290030181600087803b158015611bc557600080fd5b505af1158015611bd9573d6000803e3d6000fd5b505050506040513d6020811015611bef57600080fd5b5051151560011415611c045760019550611c11565b600101611b14565b600095505b50505050509392505050565b600081565b6000610d9d6013612f72565b600080600080611c3d336113b0565b151560011480611c55575033600160a060020a038616145b1515611c6057600080fd5b600093505b602354841015611d875784600160a060020a0316602285815481101515611c8857fe5b600091825260209091200154600160a060020a03161415611d7c576022805485908110611cb157fe5b60009182526020909120018054600160a060020a0319169055602354600019018414611d6d576022600160235403815481101515611ceb57fe5b60009182526020909120015460228054600160a060020a039092169186908110611d1157fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506022600160235403815481101515611d5357fe5b60009182526020909120018054600160a060020a03191690555b60238054600019019055611d87565b600190930192611c65565b60408051600160a060020a038716815290517f745cd29407db644ed93e3ceb61cbcab96d1dfb496989ac5d5bf514fc5a9fab9c9181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038881166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b158015611e1857600080fd5b505af1158015611e2c573d6000803e3d6000fd5b505050506040513d6020811015611e4257600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b158015611eaf57600080fd5b505af1158015611ec3573d6000803e3d6000fd5b505050506040513d6020811015611ed957600080fd5b5051604080517f8232f3f10000000000000000000000000000000000000000000000000000000081529051600160a060020a03871691638232f3f19160048083019260209291908290030181600087803b158015611f3657600080fd5b505af1158015611f4a573d6000803e3d6000fd5b505050506040513d6020811015611f6057600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b158015611fb757600080fd5b505af1158015611fcb573d6000803e3d6000fd5b505050505050505050565b6112b760138484846131df565b600254600160a060020a031681565b6000610d9d6007612f72565b60006113bd8260006126cf565b61201361170d565b151561201e57600080fd5b805160801161202c57600080fd5b805161203e9060209081840190613992565b506003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316612075610d72565b60408051600160a060020a03808516825283166020828101919091526060928201838152815460026000196101006001841615020190911604938301849052909260808301908490801561210a5780601f106120df5761010080835404028352916020019161210a565b820191906000526020600020905b8154815290600101906020018083116120ed57829003601f168201915b505094505050505060405180910390a150565b60135460165460ff9091169082565b60055460009060ff858116911614156121525761214b600b84846136e1565b9050611281565b60055460ff8581166101009092041614156121735761214b600f84846136e1565b60055460ff858116620100009092041614156121955761214b600784846136e1565b60055460ff8581166401000000009092041614156121b95761214b601784846136e1565b60055460ff85811663010000009092041614156112815761214b601384846136e1565b600160a060020a031660009081526014602052604090205460ff1690565b60055460009061128190640100000000900460ff168484611a42565b600b54600e5460ff9091169082565b6015805460009190839081106112ce57fe5b600354600160a060020a031681565b600080612251613a00565b336000818152600c602081815260408084208054600a60ff8083169182068116808b5260648306819003821683038190038216958b018690526006546101009004821660020282168b8801819052988a9052969095529590940190910191821660ff1990931683179055929550909350158015906122d0575060ff8316155b156122e0576122e0600b85613735565b60408051308152600160a060020a038616602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a150505050565b600254600160a060020a031633148061234c575061234c6111cd565b151561235757600080fd5b604080516020808252601c8054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156123f65780601f106123cb576101008083540402835291602001916123f6565b820191906000526020600020905b8154815290600101906020018083116123d957829003601f168201915b50509250505060405180910390a1565b600754600a5460ff9091169082565b600a5490565b600254600090819081908190600160a060020a0316331480612445575033600160a060020a038616145b151561245057600080fd5b600093505b6025548410156125775784600160a060020a031660248581548110151561247857fe5b600091825260209091200154600160a060020a0316141561256c5760248054859081106124a157fe5b60009182526020909120018054600160a060020a031916905560255460001901841461255d5760246001602554038154811015156124db57fe5b60009182526020909120015460248054600160a060020a03909216918690811061250157fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550602460016025540381548110151561254357fe5b60009182526020909120018054600160a060020a03191690555b60258054600019019055612577565b600190930192612455565b60408051600160a060020a038716815290517f2d6aa1a9629d125e23a0cf692cda7cd6795dff1652eedd4673b38ec31e387b959181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038881166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561260857600080fd5b505af115801561261c573d6000803e3d6000fd5b505050506040513d602081101561263257600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b158015611eaf57600080fd5b600d805460009190839081106112ce57fe5b6009805460009190839081106112ce57fe5b6000610d9d600f612f72565b6003546040805160e060020a6363e6ffdd028152600160a060020a038581166004830152915160009392909216918391829184916363e6ffdd91602480830192602092919082900301818787803b15801561272957600080fd5b505af115801561273d573d6000803e3d6000fd5b505050506040513d602081101561275357600080fd5b50519150819050600185151514156128615780600160a060020a03166315c0bac13083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156127b357600080fd5b505af11580156127c7573d6000803e3d6000fd5b505050506040513d60208110156127dd57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561282e57600080fd5b505af1158015612842573d6000803e3d6000fd5b505050506040513d602081101561285857600080fd5b505193506128af565b80600160a060020a03166315c0bac13083600160a060020a031663d1aeb6516040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156127b357600080fd5b50505092915050565b601c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156116495780601f1061161e57610100808354040283529160200191611649565b60008060008060008061292461170d565b151561292f57600080fd5b866040516020018082805190602001908083835b602083106129625780518252601f199092019160209182019101612943565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b602083106129c55780518252601f1990920191602091820191016129a6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450601c6040516020018082805460018160011615610100020316600290048015612a545780601f10612a32576101008083540402835291820191612a54565b820191906000526020600020905b815481529060010190602001808311612a40575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612a975780518252601f199092019160209182019101612a78565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120965050505084841415612bb857604080516020810191829052600090819052612aeb91601c91613992565b506000601d81905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b83811015612b73578181015183820152602001612b5b565b50505050905090810190601f168015612ba05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550612eb1565b6000199250600091505b601e54821015612dce57601e805483908110612bda57fe5b906000526020600020016040516020018082805460018160011615610100020316600290048015612c425780601f10612c20576101008083540402835291820191612c42565b820191906000526020600020905b815481529060010190602001808311612c2e575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612c855780518252601f199092019160209182019101612c66565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120935050505084811415612dc357601e805483908110612cc957fe5b906000526020600020016000612cdf9190613a1f565b601f805483908110612ced57fe5b6000918252602082200155601e54600019018214612d9357601e80546000198101908110612d1757fe5b90600052602060002001601e83815481101515612d3057fe5b906000526020600020019080546001816001161561010002031660029004612d59929190613911565b50601f80546000198101908110612d6c57fe5b9060005260206000200154601f83815481101515612d8657fe5b6000918252602090912001555b601e805490612da6906000198301613a66565b50601f805490612dba906000198301613a8a565b50819250612dce565b600190910190612bc2565b600019831415612ddd57600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015612e71578181015183820152602001612e59565b50505050905090810190601f168015612e9e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600e5490565b6112b7600f8484846131df565b600254600160a060020a0316321480612ef15750600254600160a060020a031633145b1515612efc57600080fd5b600160a060020a0381161515612f1157600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526008602052604090205460ff1690565b601a5490565b600554600090611281906301000000900460ff168484611a42565b600080805b83600301548110156131d857612fb18460020182815481101515612f9757fe5b600091825260209091200154600160a060020a031661199a565b151561313b577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260818560020183815481101515612fea57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16002840180548290811061305b57fe5b60009182526020909120018054600160a060020a031916905560038401546001929092019160001901811461312a578360020160018560030154038154811015156130a257fe5b600091825260209091200154600285018054600160a060020a0390921691839081106130ca57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561311057fe5b60009182526020909120018054600160a060020a03191690555b6003840180546000190190556131d3565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b26081856002018381548110151561316e57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b612f77565b5092915050565b60008060008060006131ef613a00565b600060ff8816156133cc576003546040805160e060020a6363e6ffdd0281523260048201529051600160a060020a03909216985088916363e6ffdd916024808201926020929091908290030181600087803b15801561324d57600080fd5b505af1158015613261573d6000803e3d6000fd5b505050506040513d602081101561327757600080fd5b50519550600160a060020a038616151561330c5789945084600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156132cc57600080fd5b505af11580156132e0573d6000803e3d6000fd5b505050506040513d60208110156132f657600080fd5b5051600160a060020a0316321461330c57600080fd5b600160a060020a038616156133cc578a54604080517f7fb52f1a00000000000000000000000000000000000000000000000000000000815260ff9092166004830152600160a060020a038c8116602484015260026044840152905188965090861691637fb52f1a9160648083019260209291908290030181600087803b15801561339557600080fd5b505af11580156133a9573d6000803e3d6000fd5b505050506040513d60208110156133bf57600080fd5b505115156133cc57600080fd5b600160a060020a038a16600090815260018c01602090815260409182902054600a60ff91821690810682168087526064820681900383169387018490529281039290920316918401919091529250613423326113b0565b15156001141561355a5760ff881615156134565760008260ff8b166003811061344857fe5b60ff90921660209290920201525b60018260ff8b166003811061346757fe5b602002015160ff16148015613480575060ff8816600114155b156134cb57600660ff8a166003811061349557fe5b602081049091015460ff601f9092166101000a9004811689029083908b16600381106134bd57fe5b60ff90921660209290920201525b600160ff89161061351e57600660ff8a16600381106134e657fe5b602091828204019190069054906101000a900460ff16600202828a60ff1660038110151561351057fe5b60ff90921660209290920201525b60ff8916158015613531575060ff881615155b156135555760028260ff8b166003811061354757fe5b60ff90921660209290920201525b6135f4565b600160ff89161080159061358257508160ff8a166003811061357857fe5b602002015160ff16155b156135cb57600660ff8a166003811061359757fe5b602081049091015460ff601f9092166101000a900481169083908b16600381106135bd57fe5b60ff90921660209290920201525b60ff881615156135f45760008260ff8b16600381106135e657fe5b60ff90921660209290920201525b81600260200201518260016020020151836000602002015101019050808b60010160008c600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff16600014158015613665575060ff8316155b15613674576136748b8b613735565b60ff8116151561368a576136888b8b6137cc565b505b60408051308152600160a060020a038c16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff9081169060069084166003811061371157fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b60028201546003830154101561378e578082600201836003015481548110151561375b57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506137bf565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b83600301548110156139075782600160a060020a031684600201828154811015156137f757fe5b600091825260209091200154600160a060020a031614156138ff576002840180548290811061382257fe5b60009182526020909120018054600160a060020a031916905560038401546000190181146138ea5783600201600185600301540381548110151561386257fe5b600091825260209091200154600285018054600160a060020a03909216918390811061388a57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055508360020160018560030154038154811015156138d057fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055600191506131d8565b6001016137d0565b5060009392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061394a5780548555613986565b8280016001018555821561398657600052602060002091601f016020900482015b8281111561398657825482559160010191906001019061396b565b50611264929150613aaa565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106139d357805160ff1916838001178555613986565b82800160010185558215613986579182015b828111156139865782518255916020019190600101906139e5565b6060604051908101604052806003906020820280388339509192915050565b50805460018160011615610100020316600290046000825580601f10613a455750613a63565b601f016020900490600052602060002090810190613a639190613aaa565b50565b8154818355818111156112b7576000838152602090206112b7918101908301613ac4565b8154818355818111156112b7576000838152602090206112b79181019083015b610d7f91905b808211156112645760008155600101613ab0565b610d7f91905b80821115611264576000613ade8282613a1f565b50600101613aca5600a165627a7a72305820066534f4b6f84d9c25665a0e4ce102b3f74558c3f0cd93f8684c5a0f4f161f000029"
};
module.exports = contract;