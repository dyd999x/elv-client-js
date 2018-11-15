const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestValidity","type":"uint256"}],"name":"AccessRequest","type":"event"}],"bytecode":"606060405260008054600160a060020a033216600160a060020a031991821681179092556001805490911690911790556103ff8061003e6000396000f3006060604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461009a57806341c0e1b5146100c95780636d2e4b1b146100dc5780638da5cb5b146100fb578063c287e0ed1461010e578063e02dd9c214610121578063f14fcbc814610146578063f15518871461015c578063f2fde38b14610183575b005b34156100a557600080fd5b6100ad6101a2565b604051600160a060020a03909116815260200160405180910390f35b34156100d457600080fd5b6100986101b1565b34156100e757600080fd5b610098600160a060020a03600435166101da565b341561010657600080fd5b6100ad61027b565b341561011957600080fd5b61009861028a565b341561012c57600080fd5b6101346102dc565b60405190815260200160405180910390f35b341561015157600080fd5b6100986004356102e2565b341561016757600080fd5b61016f610338565b604051901515815260200160405180910390f35b341561018e57600080fd5b610098600160a060020a0360043516610374565b600054600160a060020a031681565b60015432600160a060020a039081169116146101cc57600080fd5b600154600160a060020a0316ff5b60005432600160a060020a039081169116146101f557600080fd5b600160a060020a038116151561020a57600080fd5b600054600154600160a060020a039081169116141561024c576001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b60015432600160a060020a039081169116146102a557600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b60025481565b60015432600160a060020a039081169116146102fd57600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60007fca8116fd70ecea0cf35f7c08eb31491cce5ebd6bafef5bd6426862df29840463600060405190815260200160405180910390a150600190565b60015432600160a060020a0390811691161461038f57600080fd5b600160a060020a03811615156103a457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820d550f8a9038f8c5f0ed2671b0ed3cb8b6acb49af465d56099f37c5098c93c0b20029"}; module.exports=contract;