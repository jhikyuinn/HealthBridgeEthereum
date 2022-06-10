import web3 from './web3';

const address = "0x29044ca950147a55ad4e6c8868f650713f932dd6";

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "today",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ehrnumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userbirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "usergender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userphone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userlocation",
				"type": "string"
			},
		],
		"name": "CreateRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "today",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ehrnumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userbirth",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "usergender",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userphone",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userlocation",
				"type": "string"
			}, 
		],
		"name": "recordCreate",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "createrecords",
		"outputs": [
			{
				"internalType": "address",
				"name": "pAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "today",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ehrnumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userbirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "usergender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userphone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userlocation",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isValue",
				"type": "bool"
			},
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "recordsArr",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
 
export default new web3.eth.Contract(abi, address);
