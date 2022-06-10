import React from "react";
import HealthCare from "./HealthCare";
import web3 from "./web3";
import axios from 'axios';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      Today: new Date().toLocaleDateString('ko'),
      EHRNumber: "",
      Username: "",
      Userbirth: "",
      Usergender: "",
      Userphone: "",
      Userlocation: "",
      message: ""
    };
  }

  async handleClick(event) {
    console.log("qwe");
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await HealthCare.methods
      .CreateRecord(
        this.state.Today,
        this.state.EHRNumber,
        this.state.Username,
        this.state.Userbirth,
        this.state.Usergender,
        this.state.Userphone,
        this.state.Userlocation

      )
      .send({ from: accounts[0], gas: 2100000 });
      this.setState({ message: "Record success" });
  }

  render() {
    const CreateInformation= async() => {
      await axios.put(`http://203.247.240.226:8080/fhir/Patient/${this.state.EHRNumber}`,{
        "resourceType" : "Patient",
        "id" : this.state.EHRNumber,
        "meta" : {
          "profile" : [
            "https://example.org/fhir/krcore/StructureDefinition/krcore-patient"
          ]
        },
        "text" : {
          "status" : "generated",
          "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>KR Core Patient Profile Example</p>\n    </div>"
        },
        "identifier" : [
          {
            "type" : {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code" : "MR"
                }
              ]
            },
            "system" : "urn:oid:1.2.3.4.5.6",
            "value" : "MR12345"
          }
        ],
        "name" : [
          {
            "text" : this.state.Username,
          }
        ],
        "telecom" : [
          {
            "system" : "phone",
            "value" : this.state.Userphone,
          }
        ],
        "gender" : this.state.Usergender,
        "birthDate" : this.state.Userbirth,
        "address" : [
          {
            "extension" : [
              {
                "url" : "https://example.org/fhir/krcore/StructureDefinition/krcore-roadnameaddress",
              }
            ],
            "text" : this.state.Userlocation,
            "postalCode" : ""
          }
        ]
      })
      .then((res) => {
        window.alert("Create Success");
        console.log(res);
      })
    }

    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <div className="login-form">
           <h2 className="text-center">New Record</h2>

                Today Date
                <div className="form-group">
                <input
                  readOnly={true}
                  type="text"
                  value={this.state.Today}
                  onChange={event =>
                    this.setState({ Today: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
                </div>

                
                <div className="form-group">
                <input
                  type="text"
                  value={this.state.EHRNumber}
                  onChange={event =>
                    this.setState({ EHRNumber: event.target.value })
                  }
                  className="form-control"
                  placeholder="EHRNumber"
                />
                </div>
                <div className="form-group">
                <input
                  type="text"
                  value={this.state.Username}
                  onChange={event =>
                    this.setState({ Username: event.target.value })
                  }
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Userbirth}
                  onChange={event =>
                    this.setState({ Userbirth: event.target.value })
                  }
                  className="form-control"
                  placeholder="Userbirth"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Usergender}
                  onChange={event =>
                    this.setState({ Usergender: event.target.value })
                  }
                  className="form-control"
                  placeholder="Usergender"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Userphone}
                  onChange={event =>
                    this.setState({ Userphone: event.target.value })
                  }
                  className="form-control"
                  placeholder="Userphone"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Userlocation}
                  onChange={event =>
                    this.setState({ Userlocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="Userlocation"
                />
            
             </div>
              <br></br>
    
             <div className="form-group">
               <button
                 className="btn btn-primary btn-block"
                 
                 onClick={this.handleClick}>
               
                 Smart Contract Create
               </button>
             </div>
             <div className="form-group">
               <button
                 className="btn btn-primary btn-block"
                 
                 onClick={CreateInformation}>
               
                 FHIR Create
               </button>
             </div>

             {this.state.message && (
               <p className="alert alert-danger fade in">
                 {this.state.message}
                 {CreateInformation()}
               </p>
             )}
             <div className="clearfix" />
       
          
        </div>
        </div>

        
        <div className="col-md-6 col-md-offset-2"  >
          <div className="c-list" style={{alignItems:"center"}}>
            <h2 className="text-center">Record Confirm</h2>
        <table className="table table-bordered table-striped" >
              <thead>
                <tr className="th">
                  <th>Today Date</th>
                  <th>EHRnumber</th>
                  <th>User Name</th>
                  <th>User Birth</th>
                  <th>User Gender</th>
                  <th>User Phone</th>
                  <th>User Location</th>
                </tr>
                </thead>

                {this.state ?  (
                <thead>
                <tr className="th">
                <td>{this.state.Today}</td>
                <td>{this.state.EHRNumber}</td>
                <td>{this.state.Username}</td>
                <td>{this.state.Userbirth}</td>
                <td>{this.state.Usergender}</td>
                <td>{this.state.Userphone}</td>
                <td>{this.state.Userlocation}</td>
              
                </tr>
                </thead>
              ): <>
              </>}
              
            </table>
           
            </div>
          </div>
        </div> 
    );
  }
}
