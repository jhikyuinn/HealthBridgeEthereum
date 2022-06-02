
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract HealthCare {

    struct Record {
        uint256 EHRNumber;
        uint256 signatureCount;
        string Today;
        string Ntype;
        string Dtype;
        string Ptype;
        string Vtype;
        string Vstype;
        string Nstype;
        string Htype;
        bool isValue;
        address pAddr;
        mapping (address => uint256) signatures;
    }
    
    
    // Mapping to store records
    mapping (uint256=> Record) private records;
    uint256[] private recordsArr;

    event recordCreated(
        uint256 EHRNumber,
        string Today,
        string Ntype,
        string Dtype,
        string Ptype,
        string Vtype,
        string Vstype,
        string Nstype,
        string Htype);
    
    // Create new record
    function newRecord (
        uint256 _EHRNumber, 
        string memory _Today, 
        string memory _Ntype, 
        string memory _Dtype, 
        string memory _Ptype, 
        string memory _Vtype, 
        string memory _Vstype, 
        string memory _Nstype, 
        string memory _Htype)
         private{
        Record storage _newrecord = records[_EHRNumber];

        require(!records[_EHRNumber].isValue);
            _newrecord.pAddr = msg.sender;
            _newrecord.EHRNumber = _EHRNumber;
            _newrecord.Today = _Today;
            _newrecord.Ntype = _Ntype;
            _newrecord.Dtype = _Dtype;
            _newrecord.Ptype = _Ptype;
            _newrecord.Vtype = _Vtype;
            _newrecord.Vstype = _Vstype;
            _newrecord.Nstype = _Nstype;
            _newrecord.Htype = _Htype;
            _newrecord.isValue = true;
            _newrecord.signatureCount = 0;

        recordsArr.push(_EHRNumber);
        emit  recordCreated(_newrecord.EHRNumber, _Today, _Ntype, _Dtype,_Ptype, _Vtype, _Vstype, _Nstype, _Htype);
    }

    


}

