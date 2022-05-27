import web3 from './web3';

const address = "0x29044ca950147a55ad4e6c8868f650713f932dd6";

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_EHRNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Today",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Ntype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Dtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Ptype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Vtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Vstype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Nstype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Htype",
				"type": "string"
			}
		],
		"name": "newRecord",
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
				"internalType": "uint256",
				"name": "EHRNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Today",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Ntype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Dtype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Ptype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Vtype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Vstype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Nstype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_Htype",
				"type": "string"
			},
		],
		"name": "recordCreated",
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
		"name": "_records",
		"outputs": [
			{
				"internalType": "address",
				"name": "pAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_EHRNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Today",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Ntype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Dtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Ptype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Vtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Vstype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Nstype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Htype",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isValue",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "signatureCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
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
		"name": "recordsArr",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);
