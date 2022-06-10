// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract Healthcare {
     struct Record {
        string Today;
        string EHRNumber;
        string Username;
        string Userbirth;
        string Usergender;
        string Userphone;
        string Userlocation;
        address pAddr;
        bool isValue;
        mapping (address => uint256) signatures;
    }

    mapping (string=> Record) private records;
    string[] private recordsArr;

    event recordCreate(string Today, string EHRNumber, string Username, string Userbirth, string Usergender, string Userphone, string Userlocation);
   
    function CreateRecord (string memory today, string memory ehrnumber, string memory username, string memory userbirth, string memory usergender, string memory userphone, string memory userlocation)
         private{
        Record storage createrecord = records[ehrnumber];

        require(!records[ehrnumber].isValue);
            createrecord.pAddr = msg.sender;
            createrecord.Today = today;
            createrecord.EHRNumber = ehrnumber;
            createrecord.Username = username;
            createrecord.Userbirth = userbirth;
            createrecord.Usergender = usergender;
            createrecord.Userphone = userphone;
            createrecord.Userlocation = userlocation;
            createrecord.isValue = true;
            

        recordsArr.push(ehrnumber);
        emit  recordCreate(createrecord.Today,ehrnumber,username,userbirth,usergender,userphone,userlocation);
    }
}