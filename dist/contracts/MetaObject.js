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
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060005560018054600160a060020a0319908116329081179092556002805490911690911790556107728061005a6000396000f3006080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461009a57806341c0e1b5146100cb57806354fd4d50146100e05780636d2e4b1b146101075780638da5cb5b14610128578063ac55c9061461013d578063af570c041461020b578063e542b7cb14610220578063f2fde38b146102b7575b005b3480156100a657600080fd5b506100af6102d8565b60408051600160a060020a039092168252519081900360200190f35b3480156100d757600080fd5b506100986102e7565b3480156100ec57600080fd5b506100f5610323565b60408051918252519081900360200190f35b34801561011357600080fd5b50610098600160a060020a0360043516610329565b34801561013457600080fd5b506100af610384565b34801561014957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101969436949293602493928401919081908401838280828437509497506103939650505050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d05781810151838201526020016101b8565b50505050905090810190601f1680156101fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021757600080fd5b506100af610542565b34801561022c57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261009894369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506105519650505050505050565b3480156102c357600080fd5b50610098600160a060020a0360043516610639565b600154600160a060020a031681565b600254600160a060020a031632148061030a5750600254600160a060020a031633145b151561031557600080fd5b600254600160a060020a0316ff5b60005481565b600154600160a060020a0316321461034057600080fd5b600160a060020a038116151561035557600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b60606000806020845111151561044d57505081518083015160008181526004602090815260409182902080548351601f6002610100600185161502600019019093169290920491820184900484028101840190945280845293949390918301828280156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b5050505050925061053b565b6005846040518082805190602001908083835b6020831061047f5780518252601f199092019160209182019101610460565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156105335780601f1061050857610100808354040283529160200191610533565b820191906000526020600020905b81548152906001019060200180831161051657829003601f168201915b505050505092505b5050919050565b600354600160a060020a031681565b6002546000908190600160a060020a03163214806105795750600254600160a060020a031633145b151561058457600080fd5b83516020106105bd575050815180830151600081815260046020908152604090912084519293926105b7928601906106ab565b50610633565b826005856040518082805190602001908083835b602083106105f05780518252601f1990920191602091820191016105d1565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161063195919491909101925090506106ab565b505b50505050565b600254600160a060020a031632148061065c5750600254600160a060020a031633145b151561066757600080fd5b600160a060020a038116151561067c57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106ec57805160ff1916838001178555610719565b82800160010185558215610719579182015b828111156107195782518255916020019190600101906106fe565b50610725929150610729565b5090565b61074391905b80821115610725576000815560010161072f565b905600a165627a7a72305820319da22b04e24eff0fe8910d3e9594946e749ec11b3055cbcbb2a13bed5d1e970029"
};
module.exports = contract;