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
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canContribute",
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
      "name": "content_type",
      "type": "address"
    }, {
      "name": "content_contract",
      "type": "address"
    }],
    "name": "addContentType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [{
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "submitNode",
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
    "name": "contentTypeContracts",
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
      "name": "typeHash",
      "type": "bytes32"
    }],
    "name": "findTypeByHash",
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
      "name": "candidate",
      "type": "address"
    }],
    "name": "canNodePublish",
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
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "prefix",
      "type": "bytes"
    }],
    "name": "getKMSInfo",
    "outputs": [{
      "name": "",
      "type": "string"
    }, {
      "name": "",
      "type": "string"
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
    "name": "canReview",
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
      "name": "content_type",
      "type": "address"
    }],
    "name": "validType",
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
      "name": "contentObj",
      "type": "address"
    }],
    "name": "publish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "registerSpaceNode",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "addressKMS",
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
    "constant": true,
    "inputs": [],
    "name": "requiresReview",
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
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "createLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
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
    "inputs": [],
    "name": "numActiveNodes",
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
    "name": "libraryFactory",
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
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "activeNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
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
    "name": "activeNodeAddresses",
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
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "getKMSID",
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
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "userWallets",
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
      "name": "_nodeAddr",
      "type": "address"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addKMSLocator",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "pendingNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
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
    "name": "pendingNodeAddresses",
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
    "inputs": [],
    "name": "description",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
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
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setWalletFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setGroupFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setContentFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsIdStr",
      "type": "string"
    }],
    "name": "checkKMS",
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
    "name": "owner",
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
    "name": "contentFactory",
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
      "name": "content_space_description",
      "type": "string"
    }],
    "name": "setDescription",
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
    "name": "hasAccess",
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
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "contentTypes",
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
      "name": "_userAddr",
      "type": "address"
    }],
    "name": "getUserWallet",
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
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canPublish",
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
      "name": "content_type",
      "type": "address"
    }],
    "name": "whitelistedType",
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
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setLibraryFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "getAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_pubKey",
      "type": "string"
    }],
    "name": "setKMSPublicKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "unregisterSpaceNode",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "key",
      "type": "bytes"
    }],
    "name": "getMeta",
    "outputs": [{
      "name": "",
      "type": "bytes"
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
    "name": "groupFactory",
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
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "removeNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "content_type",
      "type": "address"
    }],
    "name": "createContent",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
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
    "name": "factory",
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
    "name": "walletFactory",
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
    "name": "contentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "engageAccountLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "setAddressKMS",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "checkKMSAddr",
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
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "approveNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [{
      "name": "key",
      "type": "bytes"
    }, {
      "name": "value",
      "type": "bytes"
    }],
    "name": "putMeta",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_v",
      "type": "uint8[]"
    }, {
      "name": "_r",
      "type": "bytes32[]"
    }, {
      "name": "_s",
      "type": "bytes32[]"
    }, {
      "name": "_from",
      "type": "address[]"
    }, {
      "name": "_dest",
      "type": "address[]"
    }, {
      "name": "_value",
      "type": "uint256[]"
    }, {
      "name": "_ts",
      "type": "uint256[]"
    }],
    "name": "executeBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "accessRequest",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
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
    "inputs": [],
    "name": "numPendingNodes",
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
    "name": "nodeMapping",
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
      "name": "content_type",
      "type": "address"
    }],
    "name": "removeContentType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "removeKMSLocator",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space_name",
      "type": "string"
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
      "name": "contentTypeAddress",
      "type": "address"
    }],
    "name": "CreateContentType",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "libraryAddress",
      "type": "address"
    }],
    "name": "CreateLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "groupAddress",
      "type": "address"
    }],
    "name": "CreateGroup",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentAddress",
      "type": "address"
    }],
    "name": "CreateContent",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "wallet",
      "type": "address"
    }],
    "name": "CreateAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "wallet",
      "type": "address"
    }, {
      "indexed": false,
      "name": "userAddr",
      "type": "address"
    }],
    "name": "BindUserWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "accountAddress",
      "type": "address"
    }],
    "name": "EngageAccountLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "factory",
      "type": "address"
    }],
    "name": "SetFactory",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "RegisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "UnregisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "AddKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "RemoveKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "version",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "owner",
      "type": "address"
    }],
    "name": "CreateSpace",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "walletAddress",
      "type": "address"
    }],
    "name": "GetAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeSubmitted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeApproved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "AddNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "RemoveNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }, {
      "indexed": false,
      "name": "contentContract",
      "type": "address"
    }],
    "name": "ContentTypeAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }],
    "name": "ContentTypeRemoved",
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
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f41636365737369626c6532303139303232323133353930304d4c0000000000006006557f4564697461626c6532303139303830313133353530304d4c00000000000000006007557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600e556011557f55736572537061636532303139303530363135353330304d4c000000000000006013557f4e6f6465537061636532303139303532383137303130304d4c000000000000006015557f42617365436f6e74656e7453706163653230313931323033313230303030504f601a553480156200011257600080fd5b506040516200592a3803806200592a8339810160405280516001805432600160a060020a031991821681179092556002805490911690911790550180516200016290601b906020840190620001c6565b5060038054600160a060020a03191630179055601a5460025460408051928352600160a060020a0391909116602083015280517f599bb380c80b69455450a615c515544b8da3b09f2efa116a5f0567682203cf549281900390910190a1506200026b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200020957805160ff191683800117855562000239565b8280016001018555821562000239579182015b82811115620002395782518255916020019190600101906200021c565b50620002479291506200024b565b5090565b6200026891905b8082111562000247576000815560010162000252565b90565b6156af806200027b6000396000f3006080604052600436106103b75763ffffffff60e060020a600035041662821de381146103b957806302d05d3f146103ea57806306fdde03146103ff5780630eaec2c5146104895780630f58a786146104be57806314cfabb3146104e5578063160eee74146104fa5780631cdbee5a146105535780631f2caaec1461057457806326683e141461058c578063268bfac4146105ad57806329d00219146106b757806329dedde5146106d85780632cf99422146106f95780632f7a781a1461071a57806332eaf21b1461072f578063331b86c014610744578063375a6e7c1461076b5780633dd71d991461078057806340b89f061461079557806341c0e1b5146107b657806343f59ec7146107cb578063441c5aa3146107e0578063446e8826146107f55780635272ae17146107fd57806352f82dd81461081557806354fd4d501461082d578063575185ed14610842578063589aafc1146108575780635bb47808146108785780635f6a130114610899578063628449fd146108ae57806363e6ffdd146108c357806364f0f050146108e4578063653a92f61461094b57806369e30ff8146109e25780636be9514c146109fa5780636d2e4b1b14610a125780636e37542714610a335780637284e41614610a485780637708bc4114610a5d5780637886f74714610a725780637ca8f61814610a8a5780637ebf879c14610aa2578063837b3b9314610ac357806385ce1df114610ae45780638d2a23db14610b055780638da5cb5b14610b5e578063904696a814610b7357806390c3f38f14610b8857806395a078e814610be15780639867db7414610c02578063991a3a7c14610c5b5780639ad5479314610c735780639b55f901146104895780639cb121ba14610c945780639d05d18d14610cb5578063a2d67fcf14610cd6578063a69cb73414610ceb578063abe596b114610d82578063ac55c90614610d97578063af570c0414610df0578063b04b6caa14610e05578063b2b99ec914610e1a578063b8cfaf0514610e3b578063bf4e088f14610e50578063c287e0ed14610e77578063c45a015514610e8c578063c5c0369914610ea1578063c65bcbe214610eb6578063c82710c114610ecb578063c9e8e72d14610ee0578063d6be0f4914610f01578063dd4c97a014610f22578063e02dd9c214610f43578063e1a7071714610f58578063e542b7cb14610fb1578063e9861ab114611048578063f1551887146111f3578063f2fde38b14611208578063f41a158714611229578063fbd1b4ce1461123e578063fd0891961461125f578063fe7ac19f14611280575b005b3480156103c557600080fd5b506103ce611317565b60408051600160a060020a039092168252519081900360200190f35b3480156103f657600080fd5b506103ce611327565b34801561040b57600080fd5b50610414611336565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561044e578181015183820152602001610436565b50505050905090810190601f16801561047b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049557600080fd5b506104aa600160a060020a03600435166113c4565b604080519115158252519081900360200190f35b3480156104ca57600080fd5b506103b7600160a060020a03600435811690602435166113f5565b3480156104f157600080fd5b506104aa61156a565b34801561050657600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103b794369492936024939284019190819084018382808284375094975061157a9650505050505050565b34801561055f57600080fd5b506103ce600160a060020a036004351661192d565b34801561058057600080fd5b506103ce600435611948565b34801561059857600080fd5b506104aa600160a060020a0360043516611bcc565b3480156105b957600080fd5b506105d96024600480358281019290820135918135918201910135611c2a565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561061a578181015183820152602001610602565b50505050905090810190601f1680156106475780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561067a578181015183820152602001610662565b50505050905090810190601f1680156106a75780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156106c357600080fd5b506104aa600160a060020a036004351661202d565b3480156106e457600080fd5b506104aa600160a060020a0360043516612033565b34801561070557600080fd5b506104aa600160a060020a0360043516612051565b34801561072657600080fd5b506103ce612171565b34801561073b57600080fd5b506103ce6122eb565b34801561075057600080fd5b506107596122fa565b60408051918252519081900360200190f35b34801561077757600080fd5b506104aa612300565b34801561078c57600080fd5b506104aa612309565b3480156107a157600080fd5b506103ce600160a060020a036004351661230e565b3480156107c257600080fd5b506103b76123e9565b3480156107d757600080fd5b50610759612425565b3480156107ec57600080fd5b506103ce61242b565b6104aa61243a565b34801561080957600080fd5b5061041460043561262a565b34801561082157600080fd5b506103ce60043561269e565b34801561083957600080fd5b506107596126c6565b34801561084e57600080fd5b506103ce6126cc565b34801561086357600080fd5b50610414600160a060020a0360043516612796565b34801561088457600080fd5b506103b7600160a060020a03600435166127a9565b3480156108a557600080fd5b506103b76127f9565b3480156108ba57600080fd5b50610414612837565b3480156108cf57600080fd5b506103ce600160a060020a0360043516612892565b3480156108f057600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526103b7958335600160a060020a03169536956044949193909101919081908401838280828437509497506128ad9650505050505050565b34801561095757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104aa94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750612af29650505050505050565b3480156109ee57600080fd5b50610414600435612e55565b348015610a0657600080fd5b506103ce600435612e63565b348015610a1e57600080fd5b506103b7600160a060020a0360043516612e71565b348015610a3f57600080fd5b506104aa612ebf565b348015610a5457600080fd5b50610414612ed0565b348015610a6957600080fd5b506103ce612f2b565b348015610a7e57600080fd5b50610759600435612f36565b348015610a9657600080fd5b50610414600435612f55565b348015610aae57600080fd5b506103b7600160a060020a0360043516612f63565b348015610acf57600080fd5b506103b7600160a060020a0360043516612fb3565b348015610af057600080fd5b506103b7600160a060020a0360043516613003565b348015610b1157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526107599436949293602493928401919081908401838280828437509497506130539650505050505050565b348015610b6a57600080fd5b506103ce6130bb565b348015610b7f57600080fd5b506103ce6130ca565b348015610b9457600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103b79436949293602493928401919081908401838280828437509497506130d99650505050505050565b348015610bed57600080fd5b506104aa600160a060020a036004351661311e565b348015610c0e57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103b79436949293602493928401919081908401838280828437509497506131249650505050505050565b348015610c6757600080fd5b506103ce600435613251565b348015610c7f57600080fd5b506103ce600160a060020a036004351661325f565b348015610ca057600080fd5b506104aa600160a060020a036004351661327d565b348015610cc157600080fd5b506103b7600160a060020a03600435166132d4565b348015610ce257600080fd5b506103ce613324565b348015610cf757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103b794369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506133b09650505050505050565b348015610d8e57600080fd5b506104aa613457565b348015610da357600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261041494369492936024939284019190819084018382808284375094975061354e9650505050505050565b348015610dfc57600080fd5b506103ce6136fc565b348015610e1157600080fd5b506103ce61370b565b348015610e2657600080fd5b506103b7600160a060020a036004351661371a565b348015610e4757600080fd5b506103ce6137e6565b348015610e5c57600080fd5b506103ce600160a060020a03600435811690602435166138ad565b348015610e8357600080fd5b506103b7613991565b348015610e9857600080fd5b506103ce613a67565b348015610ead57600080fd5b506103ce613a76565b348015610ec257600080fd5b50610759613a85565b348015610ed757600080fd5b506103ce613a8b565b348015610eec57600080fd5b506103b7600160a060020a0360043516613ac5565b348015610f0d57600080fd5b50610759600160a060020a0360043516613b15565b348015610f2e57600080fd5b506103b7600160a060020a0360043516613b8b565b348015610f4f57600080fd5b50610414613dcc565b348015610f6457600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610759943694929360249392840191908190840183828082843750949750613e279650505050505050565b348015610fbd57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103b794369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506143cf9650505050505050565b34801561105457600080fd5b50604080516020600480358082013583810280860185019096528085526103b795369593946024949385019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506144b79650505050505050565b3480156111ff57600080fd5b506104aa6146bd565b34801561121457600080fd5b506103b7600160a060020a03600435166146ee565b34801561123557600080fd5b50610759614753565b34801561124a57600080fd5b506103ce600160a060020a0360043516614759565b34801561126b57600080fd5b506104aa600160a060020a0360043516614774565b34801561128c57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104aa94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506149179650505050505050565b600354600160a060020a03165b90565b600154600160a060020a031681565b601b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113bc5780601f10611391576101008083540402835291602001916113bc565b820191906000526020600020905b81548152906001019060200180831161139f57829003601f168201915b505050505081565b600254600090600160a060020a03838116911614806113ed5750600254600160a060020a031633145b90505b919050565b600254600160a060020a03163214806114185750600254600160a060020a031633145b151561142357600080fd5b600160a060020a0380831660009081526012602052604090205416158015611451575061144f8261327d565b155b156114fd5760105460115410156114a75781601060115481548110151561147457fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506114f3565b601080546001810182556000919091527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672018054600160a060020a031916600160a060020a0384161790555b6011805460010190555b600160a060020a038281166000818152601260209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600061157533611bcc565b905090565b6116b060188054806020026020016040519081016040528092919081815260200182805480156115d357602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116115b5575b50505050506019805480602002602001604051908101604052809291908181526020016000905b828210156116a55760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156116915780601f1061166657610100808354040283529160200191611691565b820191906000526020600020905b81548152906001019060200180831161167457829003601f168201915b5050505050815260200190600101906115fa565b505050503384614da5565b156116ba57600080fd5b6117e5601680548060200260200160405190810160405280929190818152602001828054801561171357602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116116f5575b50505050506017805480602002602001604051908101604052809291908181526020016000905b828210156116a55760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156117d15780601f106117a6576101008083540402835291602001916117d1565b820191906000526020600020905b8154815290600101906020018083116117b457829003601f168201915b50505050508152602001906001019061173a565b156117ef57600080fd5b6018546064116117fe57600080fd5b60198054600181018083556000929092528251611842917f944998273e477b495144fb8794c914197f3ccb46be2900f4698fd0ef743c969501906020850190615481565b50506018805460018101825560009182527fb13d2d76d1f4b7be834882e410b3e3a8afaf69f83600ae24db354391d2378d2e018054600160a060020a0319163390811790915560408051828152602081810183815286519383019390935285517fae5645569f32b946f7a747113c64094a29a6b84c5ddf55816ef4381ce8a3a46d958794926060850192908601918190849084905b838110156118ef5781810151838201526020016118d7565b50505050905090810190601f16801561191c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a150565b601260205260009081526040902054600160a060020a031681565b600080805b601054821015611bc057601080548390811061196557fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b602083106119c65780518252601f1990920191602091820191016119a7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015611a3557600080fd5b505af1158015611a49573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611a7257600080fd5b810190808051640100000000811115611a8a57600080fd5b82016020810184811115611a9d57600080fd5b8151640100000000811182820187101715611ab757600080fd5b50509291905050506040516020018082805190602001908083835b60208310611af15780518252601f199092019160209182019101611ad2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611b545780518252601f199092019160209182019101611b35565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415611bb5576010805483908110611b9957fe5b600091825260209091200154600160a060020a03169250611bc5565b60019091019061194d565b600092505b5050919050565b6000805b601654811015611c1f5782600160a060020a0316601682815481101515611bf357fe5b600091825260209091200154600160a060020a03161415611c175760019150611c24565b600101611bd0565b600091505b50919050565b606080606080606080600060238b8b604051808383808284379091019485525050604080519384900360209081018520805480830287018301909352828652935090915060009084015b82821015611d1f5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015611d0b5780601f10611ce057610100808354040283529160200191611d0b565b820191906000526020600020905b815481529060010190602001808311611cee57829003601f168201915b505050505081526020019060010190611c74565b50505050945060248b8b604051808383808284379190910194855250506040805160209481900385018120805460026001821615610100026000190190911604601f81018790048702830187019093528282529094909350909150830182828015611dcb5780601f10611da057610100808354040283529160200191611dcb565b820191906000526020600020905b815481529060010190602001808311611dae57829003601f168201915b50505050509350845160001415611df857836020604051908101604052806000815250909650965061201f565b611e32858a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843750614ef3945050505050565b9250600090505b8251811015612018576001835103811415611f1d57818382815181101515611e5d57fe5b906020019060200201516040516020018083805190602001908083835b60208310611e995780518252601f199092019160209182019101611e7a565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310611ee15780518252601f199092019160209182019101611ec2565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150612010565b818382815181101515611f2c57fe5b906020019060200201516040516020018083805190602001908083835b60208310611f685780518252601f199092019160209182019101611f49565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310611fb05780518252601f199092019160209182019101611f91565b6001836020036101000a038019825116818451168082178552505050505050905001807f2c000000000000000000000000000000000000000000000000000000000000008152506001019250505060405160208183030381529060405291505b600101611e39565b8184965096505b505050505094509492505050565b50600090565b600060115460001415612048575060016113f0565b6113ed8261327d565b60008033600160a060020a0384161461206957600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b1580156120b657600080fd5b505af11580156120ca573d6000803e3d6000fd5b505050506040513d60208110156120e057600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b15801561213d57600080fd5b505af1158015612151573d6000803e3d6000fd5b505050506040513d602081101561216757600080fd5b5051159392505050565b3360009081526022602052604081205481908190600160a060020a03161561219857600080fd5b600091505b6016548210156121e35760168054339190849081106121b857fe5b600091825260209091200154600160a060020a031614156121d8576121e3565b60019091019061219d565b60165482106121f157600080fd5b601d54604080517f5c6dc2190000000000000000000000000000000000000000000000000000000081523360048201529051600160a060020a0390921691635c6dc219916024808201926020929091908290030181600087803b15801561225757600080fd5b505af115801561226b573d6000803e3d6000fd5b505050506040513d602081101561228157600080fd5b5051336000908152602260209081526040918290208054600160a060020a031916600160a060020a038516908117909155825190815291519293507f4575facd117046c9c28b69a3eb9c08939f2462a5a22ea6c6dcd4f79b8dd124e992918290030190a192915050565b600f54600160a060020a031681565b600a5490565b600d5460ff1681565b600090565b60208054604080517f40b89f06000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151600094859493909316926340b89f06926024808201939182900301818787803b15801561237757600080fd5b505af115801561238b573d6000803e3d6000fd5b505050506040513d60208110156123a157600080fd5b505160408051600160a060020a038316815290519192507f473c07a6d0228c4fb8fe2be3b4617c3b5fb7c0f8cd9ba4b67e8631844b9b6571919081900360200190a192915050565b600254600160a060020a031632148061240c5750600254600160a060020a031633145b151561241757600080fd5b600254600160a060020a0316ff5b60175490565b602054600160a060020a031681565b600061244461156a565b151561244f57600080fd5b600d5460ff16151561246057600080fd5b60006008805460018160011615610100020316600290049050111561250f57600a80546001818101808455600093909352600880546124d6937fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a801926002610100918316159190910260001901909116046154fb565b5050600954600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901555b600c805461253291600891600260001961010060018416150201909116046154fb565b504260095560408051602081019182905260009081905261255591600c91615481565b50600d805460ff1916905560035460408051600160a060020a039092168083526020830182815260088054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156126155780601f106125ea57610100808354040283529160200191612615565b820191906000526020600020905b8154815290600101906020018083116125f857829003601f168201915b5050935050505060405180910390a150600190565b601780548290811061263857fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156113bc5780601f10611391576101008083540402835291602001916113bc565b60168054829081106126ac57fe5b600091825260209091200154600160a060020a0316905081565b601a5481565b600080601e60009054906101000a9004600160a060020a0316600160a060020a031663575185ed6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561272257600080fd5b505af1158015612736573d6000803e3d6000fd5b505050506040513d602081101561274c57600080fd5b505160408051600160a060020a038316815290519192507fa3b1fe71ae61bad8cffa485b230e24e518938f76182a30fa0d9979e7237ad159919081900360200190a18091505b5090565b60606113ed6127a3614ff8565b83614ffd565b600254600160a060020a03163214806127cc5750600254600160a060020a031633145b15156127d757600080fd5b601d8054600160a060020a031916600160a060020a0392909216919091179055565b612801612ebf565b151561280c57600080fd5b60408051602081019182905260009081905261282a91600c91615481565b50600d805460ff19169055565b600c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113bc5780601f10611391576101008083540402835291602001916113bc565b601460205260009081526040902054600160a060020a031681565b600254600160a060020a03163214806128d05750600254600160a060020a031633145b15156128db57600080fd5b612a11601680548060200260200160405190810160405280929190818152602001828054801561293457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311612916575b50505050506017805480602002602001604051908101604052809291908181526020016000905b82821015612a065760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156129f25780601f106129c7576101008083540402835291602001916129f2565b820191906000526020600020905b8154815290600101906020018083116129d557829003601f168201915b50505050508152602001906001019061295b565b505050508484614da5565b15612a1b57600080fd5b6016805460018082019092557fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b5124289018054600160a060020a031916600160a060020a0385161790556017805491820180825560009190915282519091612aa9917fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c15909101906020850190615481565b505060408051338152600160a060020a038416602082015281517f2bb0f9ba138ffddb5a8f974e9885b65a7814d3002654f1cf3f2d3f619a4006c4929181900390910190a15050565b6002546000906060908290600160a060020a0316321480612b1d5750600254600160a060020a031633145b1515612b2857600080fd5b6023856040518082805190602001908083835b60208310612b5a5780518252601f199092019160209182019101612b3b565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015612c4a5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015612c365780601f10612c0b57610100808354040283529160200191612c36565b820191906000526020600020905b815481529060010190602001808311612c1957829003601f168201915b505050505081526020019060010190612b9f565b505050509150600090505b8151811015612d8657836040518082805190602001908083835b60208310612c8e5780518252601f199092019160209182019101612c6f565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110612cca57fe5b906020019060200201516040518082805190602001908083835b60208310612d035780518252601f199092019160209182019101612ce4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415612d7e57604080513381526001602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a160009250612e4d565b600101612c55565b6023856040518082805190602001908083835b60208310612db85780518252601f199092019160209182019101612d99565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932080546001810180835560009283529185902089519295612e0b955091019250880190615481565b5050604080513381526000602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a1600192505b505092915050565b601980548290811061263857fe5b60188054829081106126ac57fe5b600154600160a060020a03163214612e8857600080fd5b600160a060020a0381161515612e9d57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b601c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113bc5780601f10611391576101008083540402835291602001916113bc565b600061157532615075565b600b805482908110612f4457fe5b600091825260209091200154905081565b600a80548290811061263857fe5b600254600160a060020a0316321480612f865750600254600160a060020a031633145b1515612f9157600080fd5b601f8054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321480612fd65750600254600160a060020a031633145b1515612fe157600080fd5b601e8054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a03163214806130265750600254600160a060020a031633145b151561303157600080fd5b60218054600160a060020a031916600160a060020a0392909216919091179055565b60006023826040518082805190602001908083835b602083106130875780518252601f199092019160209182019101613068565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054949350505050565b600254600160a060020a031681565b602154600160a060020a031681565b600254600160a060020a03163214806130fc5750600254600160a060020a031633145b151561310757600080fd5b805161311a90601c906020840190615481565b5050565b50600190565b61312c612ebf565b151561313757600080fd5b600d5460ff161561314757600080fd5b805160801161315557600080fd5b805161316890600c906020840190615481565b50600d805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a03166131ac611317565b60408051600160a060020a038085168252831660208201526060918101828152600c8054600260001961010060018416150201909116049383018490529260808301908490801561323e5780601f106132135761010080835404028352916020019161323e565b820191906000526020600020905b81548152906001019060200180831161322157829003601f168201915b505094505050505060405180910390a150565b60108054829081106126ac57fe5b600160a060020a039081166000908152601460205260409020541690565b600080805b6011548110156132cd5783600160a060020a03166010828154811015156132a557fe5b600091825260209091200154600160a060020a031614156132c557600191505b600101613282565b5092915050565b600254600160a060020a03163214806132f75750600254600160a060020a031633145b151561330257600080fd5b60208054600160a060020a031916600160a060020a0392909216919091179055565b326000908152601460205260408120548190600160a060020a031615156133545761334d612f2b565b905061336f565b5032600090815260146020526040902054600160a060020a03165b60408051600160a060020a038316815290517f1c917c3c2698bd5b98acb9772728da62f2ce3670e4578910a6465b955f63e1579181900360200190a1919050565b600254600160a060020a03163214806133d35750600254600160a060020a031633145b15156133de57600080fd5b806024836040518082805190602001908083835b602083106134115780518252601f1990920191602091820191016133f2565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932084516134529591949190910192509050615481565b505050565b336000908152602260205260408120548190600160a060020a0316151561347d57600080fd5b50336000908152602260205260408082208054600160a060020a0319811690915581517f41c0e1b50000000000000000000000000000000000000000000000000000000081529151600160a060020a039091169283926341c0e1b5926004808301939282900301818387803b1580156134f557600080fd5b505af1158015613509573d6000803e3d6000fd5b505060408051600160a060020a038516815290517fb98695ab4c6cedb3b4dfe62479a9d39a59aa2cb38b8bd92bbb6ce5856e42bdf49350908190036020019150a15090565b60606000806020845111151561360857505081518083015160008181526004602090815260409182902080548351601f6002610100600185161502600019019093169290920491820184900484028101840190945280845293949390918301828280156135fc5780601f106135d1576101008083540402835291602001916135fc565b820191906000526020600020905b8154815290600101906020018083116135df57829003601f168201915b50505050509250611bc5565b6005846040518082805190602001908083835b6020831061363a5780518252601f19909201916020918201910161361b565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156136ee5780601f106136c3576101008083540402835291602001916136ee565b820191906000526020600020905b8154815290600101906020018083116136d157829003601f168201915b505050505092505050919050565b600354600160a060020a031681565b601e54600160a060020a031681565b600254600090600160a060020a03163214806137405750600254600160a060020a031633145b151561374b57600080fd5b5060005b60165481101561311a5781600160a060020a031660168281548110151561377257fe5b600091825260209091200154600160a060020a031614156137de5761379a8160166017615264565b60408051338152600160a060020a038416602082015281517f41ec5b9efdbf61871df6a18b687e04bea93d5793af5f8c8b4626e155b23dc19d929181900390910190a15b60010161374f565b600080601d60009054906101000a9004600160a060020a0316600160a060020a031663b8cfaf056040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561383c57600080fd5b505af1158015613850573d6000803e3d6000fd5b505050506040513d602081101561386657600080fd5b505160408051600160a060020a038316815290519192507f9e69777f30c55126be256664fa7beff4b796ac32ebceab94df5071b0148017f8919081900360200190a1919050565b602154604080517fbf4e088f000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152848116602483015291516000938493169163bf4e088f91604480830192602092919082900301818787803b15801561391e57600080fd5b505af1158015613932573d6000803e3d6000fd5b505050506040513d602081101561394857600080fd5b505160408051600160a060020a038316815290519192507fa0633ea0b3cb5796607e5f551ae79c7eeee0dc7ee0c3ff8996506261651368ce919081900360200190a19392505050565b600254600160a060020a03163314806139ad57506139ad61156a565b15156139b857600080fd5b60408051602080825260088054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015613a575780601f10613a2c57610100808354040283529160200191613a57565b820191906000526020600020905b815481529060010190602001808311613a3a57829003601f168201915b50509250505060405180910390a1565b601d54600160a060020a031681565b601f54600160a060020a031681565b60115481565b6040805132815290516000917f53ce35a7383a3ea3f695bdf0f87d7e5485ba816b382673e849bfdd24e7f5e3ca919081900360200190a190565b600254600160a060020a0316321480613ae85750600254600160a060020a031633145b1515613af357600080fd5b600f8054600160a060020a031916600160a060020a0392909216919091179055565b60006060613b2283612796565b90506023816040518082805190602001908083835b60208310613b565780518252601f199092019160209182019101613b37565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205495945050505050565b6002546000908190600160a060020a0316321480613bb35750600254600160a060020a031633145b1515613bbe57600080fd5b5060009050805b601854811015613dc05782600160a060020a0316601882815481101515613be857fe5b600091825260209091200154600160a060020a03161415613db8576016601882815481101515613c1457fe5b6000918252602080832090910154835460018101855593835291209091018054600160a060020a031916600160a060020a03909216919091179055601980546017919083908110613c6157fe5b60009182526020808320845460018181018088559686529290942092018054613ca594939093019290916002610100918316159190910260001901909116046154fb565b50507fd644c8164f225d3b7fdbcc404f279bb1e823ef0d93f88dd4b24e85d0e7bc6a54601882815481101515613cd757fe5b60009182526020909120015460198054600160a060020a039092169184908110613cfd57fe5b600091825260209182902060408051600160a060020a0386168152938401818152919092018054600260001961010060018416150201909116049284018390529291606083019084908015613d935780601f10613d6857610100808354040283529160200191613d93565b820191906000526020600020905b815481529060010190602001808311613d7657829003601f168201915b5050935050505060405180910390a1613daf8160186019615264565b60019150613dc0565b600101613bc5565b81151561345257600080fd5b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113bc5780601f10611391576101008083540402835291602001916113bc565b600080600080600080613e38612ebf565b1515613e4357600080fd5b866040516020018082805190602001908083835b60208310613e765780518252601f199092019160209182019101613e57565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310613ed95780518252601f199092019160209182019101613eba565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020945060086040516020018082805460018160011615610100020316600290048015613f685780601f10613f46576101008083540402835291820191613f68565b820191906000526020600020905b815481529060010190602001808311613f54575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310613fab5780518252601f199092019160209182019101613f8c565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209650505050848414156140cc57604080516020810191829052600090819052613fff91600891615481565b506000600981905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b8381101561408757818101518382015260200161406f565b50505050905090810190601f1680156140b45780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1600095506143c5565b6000199250600091505b600a548210156142e257600a8054839081106140ee57fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156141565780601f10614134576101008083540402835291820191614156565b820191906000526020600020905b815481529060010190602001808311614142575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106141995780518252601f19909201916020918201910161417a565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209350505050848114156142d757600a8054839081106141dd57fe5b9060005260206000200160006141f39190615570565b600b80548390811061420157fe5b6000918252602082200155600a546000190182146142a757600a8054600019810190811061422b57fe5b90600052602060002001600a8381548110151561424457fe5b90600052602060002001908054600181600116156101000203166002900461426d9291906154fb565b50600b8054600019810190811061428057fe5b9060005260206000200154600b8381548110151561429a57fe5b6000918252602090912001555b600a8054906142ba9060001983016155b7565b50600b8054906142ce9060001983016155db565b508192506142e2565b6001909101906140d6565b6000198314156142f157600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561438557818101518382015260200161436d565b50505050905090810190601f1680156143b25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b6002546000908190600160a060020a03163214806143f75750600254600160a060020a031633145b151561440257600080fd5b835160201061443b5750508151808301516000818152600460209081526040909120845192939261443592860190615481565b506144b1565b826005856040518082805190602001908083835b6020831061446e5780518252601f19909201916020918201910161444f565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932084516144af9591949190910192509050615481565b505b50505050565b60025460009081908190600160a060020a03163314806144df575060006144dd33613b15565b115b15156144ea57600080fd5b88518a51146144f857600080fd5b875189511461450657600080fd5b865188511461451457600080fd5b855187511461452257600080fd5b845186511461453057600080fd5b835185511461453e57600080fd5b600092505b89518310156146b157868381518110151561455a57fe5b90602001906020020151915081600160a060020a031663508ad278338c8681518110151561458457fe5b906020019060200201518c8781518110151561459c57fe5b906020019060200201518c888151811015156145b457fe5b906020019060200201518b898151811015156145cc57fe5b906020019060200201518b8a8151811015156145e457fe5b906020019060200201518b8b8151811015156145fc57fe5b60209081029091018101516040805160e060020a63ffffffff8c16028152600160a060020a03998a16600482015260ff90981660248901526044880196909652606487019490945291909516608485015260a484019490945260c48301525160e480830193928290030181600087803b15801561467857600080fd5b505af115801561468c573d6000803e3d6000fd5b505050506040513d60208110156146a257600080fd5b50519050600190920191614543565b50505050505050505050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600254600160a060020a03163214806147115750600254600160a060020a031633145b151561471c57600080fd5b600160a060020a038116151561473157600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60195490565b602260205260009081526040902054600160a060020a031681565b60025460009081908190600160a060020a031632148061479e5750600254600160a060020a031633145b15156147a957600080fd5b50506011546000190160005b601154811015611bc05783600160a060020a03166010828154811015156147d857fe5b600091825260209091200154600160a060020a0316141561490f57601080548290811061480157fe5b60009182526020909120018054600160a060020a03191690558082146148a657601080548390811061482f57fe5b60009182526020909120015460108054600160a060020a03909216918390811061485557fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055601080548390811061488c57fe5b60009182526020909120018054600160a060020a03191690555b6011829055600160a060020a0384166000818152601260209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250611bc5565b6001016147b5565b6002546000906060908290600160a060020a03163214806149425750600254600160a060020a031633145b151561494d57600080fd5b6023856040518082805190602001908083835b6020831061497f5780518252601f199092019160209182019101614960565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015614a6f5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015614a5b5780601f10614a3057610100808354040283529160200191614a5b565b820191906000526020600020905b815481529060010190602001808311614a3e57829003601f168201915b5050505050815260200190600101906149c4565b505050509150600090505b8151811015614d5f57836040518082805190602001908083835b60208310614ab35780518252601f199092019160209182019101614a94565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110614aef57fe5b906020019060200201516040518082805190602001908083835b60208310614b285780518252601f199092019160209182019101614b09565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415614d57578151600019018114614c1357815182906000198101908110614b7d57fe5b906020019060200201516023866040518082805190602001908083835b60208310614bb95780518252601f199092019160209182019101614b9a565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549092508491508110614bf457fe5b906000526020600020019080519060200190614c11929190615481565b505b6023856040518082805190602001908083835b60208310614c455780518252601f199092019160209182019101614c26565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001835103815481101515614c8957fe5b906000526020600020016000614c9f9190615570565b60016023866040518082805190602001908083835b60208310614cd35780518252601f199092019160209182019101614cb4565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549390930392614d1292509050826155ff565b50604080513381526000602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a160019250612e4d565b600101614a7a565b604080513381526001602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a1506000949350505050565b60008084518651141515614db857600080fd5b5060005b8551811015614ee557826040518082805190602001908083835b60208310614df55780518252601f199092019160209182019101614dd6565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912088519093508892508491508110614e3157fe5b906020019060200201516040518082805190602001908083835b60208310614e6a5780518252601f199092019160209182019101614e4b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161480614ecf575083600160a060020a03168682815181101515614eba57fe5b90602001906020020151600160a060020a0316145b15614edd5760019150614eea565b600101614dbc565b600091505b50949350505050565b6060600080825b8551821015614f3b57614f248683815181101515614f1457fe5b90602001906020020151866153ba565b15614f30576001909201915b600190910190614efa565b82604051908082528060200260200182016040528015614f6f57816020015b6060815260200190600190039081614f5a5790505b509050821515614f8157809350614fef565b60009250600091505b8551821015614feb57614fa48683815181101515614f1457fe5b15614fe0578582815181101515614fb757fe5b906020019060200201518184815181101515614fcf57fe5b602090810290910101526001909201915b600190910190614f8a565b8093505b50505092915050565b600b90565b604080517f6d616b654944537472696e6728696e742c6164647265737329000000000000008152905190819003601901812080825260e060020a8402600483018190526008830184905260609260ff90848160288160008681f180151561506357600080fd5b50606081016040529695505050505050565b600160a060020a0380821660009081526014602052604081205490918291829116156150a057600080fd5b601f60009054906101000a9004600160a060020a0316600160a060020a0316637708bc416040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156150f357600080fd5b505af1158015615107573d6000803e3d6000fd5b505050506040513d602081101561511d57600080fd5b50519150600160a060020a03841632146151af5750604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151839283169163f2fde38b91602480830192600092919082900301818387803b15801561519657600080fd5b505af11580156151aa573d6000803e3d6000fd5b505050505b60408051600160a060020a038416815290517f56c4bf13bebaa9f2be39ac3f2f4619a0dd1b694bb8c5f43c6b244a6dba0f0cca9181900360200190a160408051600160a060020a0380851682528616602082015281517f05e3f3adaf96d565bb326088a1d8e0d78497549df2c99a8ab681e5fbc7a9b3f2929181900390910190a150600160a060020a0392831660009081526014602052604090208054600160a060020a031916938216939093179092555090565b8154831080156152745750805483105b151561527f57600080fd5b81546000190183146153465780548190600019810190811061529d57fe5b9060005260206000200181848154811015156152b557fe5b9060005260206000200190805460018160011615610100020316600290046152de9291906154fb565b508154829060001981019081106152f157fe5b6000918252602090912001548254600160a060020a039091169083908590811061531757fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b80548190600019810190811061535857fe5b90600052602060002001600061536e9190615570565b805461537e8260001983016155ff565b5081548290600019810190811061539157fe5b60009182526020909120018054600160a060020a031916905581546144b18360001983016155db565b60008060008351915084518211156153d157845191505b5060005b818110156154765783818151811015156153eb57fe5b90602001015160f860020a900460f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916858281518110151561542e57fe5b60209101015160f860020a90819004027fff00000000000000000000000000000000000000000000000000000000000000161461546e5760009250612e4d565b6001016153d5565b506001949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106154c257805160ff19168380011785556154ef565b828001600101855582156154ef579182015b828111156154ef5782518255916020019190600101906154d4565b50612792929150615623565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061553457805485556154ef565b828001600101855582156154ef57600052602060002091601f016020900482015b828111156154ef578254825591600101919060010190615555565b50805460018160011615610100020316600290046000825580601f1061559657506155b4565b601f0160209004906000526020600020908101906155b49190615623565b50565b8154818355818111156134525760008381526020902061345291810190830161563d565b81548183558181111561345257600083815260209020613452918101908301615623565b81548183558181111561345257600083815260209020613452918101908301615660565b61132491905b808211156127925760008155600101615629565b61132491905b808211156127925760006156578282615570565b50600101615643565b61132491905b8082111561279257600061567a8282615570565b506001016156665600a165627a7a72305820cd5aeab3d8c4fe232efd7061dd94c426dfd02bb51518f0e4dacf3284080afb0f0029"
};
module.exports = contract;