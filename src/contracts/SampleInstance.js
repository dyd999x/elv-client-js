const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"new_thing","type":"bytes32"}],"name":"setSomething","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"something","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessCharge","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"}],"name":"DbgString","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"a","type":"address"}],"name":"DbgAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"606060405260008054600160a060020a033216600160a060020a031991821681179092556001805490911690911790556104b78061003e6000396000f3006060604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146100d1578063123e0e80146101005780633513a805146101a457806341c0e1b5146101af57806345080442146101c25780636b2d1324146101cd5780636d2e4b1b146101d85780637b1cdb3e146101f75780638da5cb5b146101ff57806399032219146102125780639e99bbea146101f7578063a7a0d53714610228578063f2fde38b1461023b578063f8117ca21461025a575b005b34156100dc57600080fd5b6100e46102e6565b604051600160a060020a03909116815260200160405180910390f35b61019260048035906024803560ff1691906064906044359081019083013580602080820201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506102f595505050505050565b60405190815260200160405180910390f35b6101926004356102ff565b34156101ba57600080fd5b6100cf610302565b34156101cd57600080fd5b610192600435610346565b34156101e357600080fd5b6100cf600160a060020a036004351661034c565b6101926103ab565b341561020a57600080fd5b6100e46103b0565b341561021d57600080fd5b6101926004356103bf565b341561023357600080fd5b610192610401565b341561024657600080fd5b6100cf600160a060020a0360043516610407565b6101926004803560ff169060446024803590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061048195505050505050565b600054600160a060020a031681565b6000949350505050565b90565b60015432600160a060020a039081169116148061032d575060015433600160a060020a039081169116145b151561033857600080fd5b600154600160a060020a0316ff5b50600090565b60005432600160a060020a0390811691161461036757600080fd5b600160a060020a038116151561037c57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090565b600154600160a060020a031681565b60015460009032600160a060020a03908116911614806103ed575060015433600160a060020a039081169116145b15156103f857600080fd5b50600281905590565b60025481565b60015432600160a060020a0390811691161480610432575060015433600160a060020a039081169116145b151561043d57600080fd5b600160a060020a038116151561045257600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60001993925050505600a165627a7a72305820127d704cd2b7677780643ef78552b08b3d751853d6a29c983c60fd8259c2b0110029"}; module.exports=contract;