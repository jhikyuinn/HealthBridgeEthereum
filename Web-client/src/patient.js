import React, { useEffect, useState } from "react";
import HealthCare from "./HealthCare";
import web3 from "./web3";


export default class Patient extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      Today: "",
      EHRNumber: "",
      Ntype: "",
      Dtype: "",
      Ptype: "",
      Vtype:"",
      Vstype:"",
      Nstype:"",
      Htype:"",
      message: ""
    };
  }

  async handleClick(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await HealthCare.methods
      .newRecord(
        this.state.EHRNumber,
        this.state.Today,
        this.state.Ntype,
        this.state.Dtype,
        this.state.Ptype,
        this.state.Vtype,
        this.state.Vstype,
        this.state.Nstype,
        this.state.Htype
      )
      .send({ from: accounts[0], gas: 2100000 });
      this.setState({ message: "Record success" });
  }

  render() {
    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <div className="login-form">
            <form method="post" autoComplete="off">
              <h2 className="text-center">New Record</h2>
              Today Date
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Today}
                  onChange={event =>
                    this.setState({ Today: event.target.value })
                  }
                  className="form-control"
                  placeholder="Today"
                />
              </div>
              User Basic Information
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.EHRnumber}
                  onChange={event =>
                    this.setState({ EHRnumber: event.target.value })
                  }
                  className="form-control"
                  placeholder="EHRnumber"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={event =>
                    this.setState({ username: event.target.value })
                  }
                  className="form-control"
                  placeholder="UserName"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.userage}
                  onChange={event =>
                    this.setState({ userage: event.target.value })
                  }
                  className="form-control"
                  placeholder="UserAge"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.usergender}
                  onChange={event =>
                    this.setState({ usergender: event.target.value })
                  }
                  className="form-control"
                  placeholder="UserGender"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.userLocation}
                  onChange={event =>
                    this.setState({ userLocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="UserLocation"
                />
              </div>

              Nutritional supplements
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Ntype}
                  onChange={event =>
                    this.setState({ Ntype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.NDosingperiod}
                  onChange={event =>
                    this.setState({ NDosingperiod: event.target.value })
                  }
                  className="form-control"
                  placeholder="DosingPeriod"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Nreview}
                  onChange={event =>
                    this.setState({ Nreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>

              Disability aids
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Dtype}
                  onChange={event =>
                    this.setState({ Dtype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Dperiod}
                  onChange={event =>
                    this.setState({ Dperiod: event.target.value })
                  }
                  className="form-control"
                  placeholder="period of use"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Dreview}
                  onChange={event =>
                    this.setState({ Dreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>


              Physical therapy / rehabilitation
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Ptype}
                  onChange={event =>
                    this.setState({ Ptype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Pdate}
                  onChange={event =>
                    this.setState({ Pdate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Plocation}
                  onChange={event =>
                    this.setState({ Plocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <textarea
                  
                  value={this.state.Preview}
                  onChange={event =>
                    this.setState({ Preview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>


              Vaccine
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vtype}
                  onChange={event =>
                    this.setState({ Vtype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Vdate}
                  onChange={event =>
                    this.setState({ Vdate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vlocation}
                  onChange={event =>
                    this.setState({ Vlocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vreview}
                  onChange={event =>
                    this.setState({ Vreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>

              Vision correction surgery
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vstype}
                  onChange={event =>
                    this.setState({ Vstype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Vsdate}
                  onChange={event =>
                    this.setState({ Vsdate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vslocation}
                  onChange={event =>
                    this.setState({ Vslocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vsdoctor}
                  onChange={event =>
                    this.setState({ Vsdoctor: event.target.value })
                  }
                  className="form-control"
                  placeholder="Doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Vsreview}
                  onChange={event =>
                    this.setState({ Vsreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>

              Non-surgical cosmetic treatment
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Nstype}
                  onChange={event =>
                    this.setState({ Nstype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.Nsdate}
                  onChange={event =>
                    this.setState({ Nsdate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Nslocation}
                  onChange={event =>
                    this.setState({ Nslocation: event.target.value })
                  }
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Nsdoctor}
                  onChange={event =>
                    this.setState({ Nsdoctor: event.target.value })
                  }
                  className="form-control"
                  placeholder="doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Nsreview}
                  onChange={event =>
                    this.setState({ Nsreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>

              Hair problems
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Htype}
                  onChange={event =>
                    this.setState({ Htype: event.target.value })
                  }
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Hsolution}
                  onChange={event =>
                    this.setState({ Hsolution: event.target.value })
                  }
                  className="form-control"
                  placeholder="Solution"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Hperiod}
                  onChange={event =>
                    this.setState({ Hperiod: event.target.value })
                  }
                  className="form-control"
                  placeholder="Period"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.Hreview}
                  onChange={event =>
                    this.setState({ Hreview: event.target.value })
                  }
                  className="form-control"
                  placeholder="Review"
                />
              </div>

              <div className="clearfix" />
            </form>
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
                  <th>UserName</th>
                  <th>UserAge</th>
                  <th>UserGender</th>
                  <th>UserLocation</th>
                  <th>Nutritional supplements type</th>
                  <th>Nutritional supplements Dosing period</th>
                  <th>Nutritional supplements Review</th>
                </tr>
                </thead>

                {this.state ?  (
                <thead>
                <tr className="th">
                <td>{this.state.Today}</td>
                <td>{this.state.EHRnumber}</td>
                <td>{this.state.username}</td>
                <td>{this.state.userage}</td>
                <td>{this.state.usergender}</td>
                <td>{this.state.userLocation}</td>
                <td>{this.state.Ntype}</td>
                <td>{this.state.NDosingperiod}</td>
                <td>{this.state.Nreview}</td>
                </tr>
                </thead>
              ): <>
              </>}
              
            </table>


            <table className="table table-bordered table-striped">
              <thead>
                <tr className="th">
                  <th>Disability aids type</th>
                  <th>Disability aids period of use</th>
                  <th>Disability aids Review</th><th>Physical therapy / rehabilitation type</th>
                  <th>Physical therapy / rehabilitation date</th>
                  <th>Physical therapy / rehabilitation location</th>
                  <th>Physical therapy / rehabilitation Review</th>
                </tr>
                </thead>

                {this.state ?  (
                <thead>
                <tr className="th">
                <td>{this.state.Dtype}</td>
                <td>{this.state.Dperiod}</td>
                <td>{this.state.Dreview}</td>
                <td>{this.state.Ptype}</td>
                <td>{this.state.Pdate}</td>
                <td>{this.state.Plocation}</td>
                <td>{this.state.Preview}</td>
                </tr>
                </thead>
              ): <>
              </>}
      
            </table>


            <table className="table table-bordered table-striped">
              <thead>
                <tr className="th">
                  <th>Vaccine type</th>
                  <th>Vaccine date</th>
                  <th>Vaccine location</th>
                  <th>Vaccine Review</th>
                  <th>Vision correction surgery type</th>
                  <th>Vision correction surgery date</th>
                  <th>Vision correction surgery location</th>
                  <th>Vision correction surgery doctor</th>
                  <th>Vision correction surgery Review</th>
                </tr>
                </thead>

                {this.state ?  (
                  <thead>
                <tr className="th">
                <td>{this.state.Vtype}</td>
                <td>{this.state.Vdate}</td>
                <td>{this.state.Vlocation}</td>
                <td>{this.state.Vreview}</td>
                <td>{this.state.Vstype}</td>
                <td>{this.state.Vsdate}</td>
                <td>{this.state.Vslocation}</td>
                <td>{this.state.Vsdoctor}</td>
                <td>{this.state.Vsreview}</td>
                </tr>
                </thead>
              ): <>
              </>}
      
            </table>

           

            <table className="table table-bordered table-striped" >
              <thead>
                <tr className="th">
                  <th>Non-surgical cosmetic treatment type</th>
                  <th>Non-surgical cosmetic treatment date</th>
                  <th>Non-surgical cosmetic treatment location</th>
                  <th>Non-surgical cosmetic treatment doctor</th>
                  <th>Non-surgical cosmetic treatment Review</th>
                  <th>Hair problems type</th>
                  <th>Hair problems solution</th>
                  <th>Hair problems period</th>
                  <th>Hair problems review</th>
                </tr>
                </thead>

                {this.state ?  (
                <thead >
                <tr className="th">
                <td>{this.state.Nstype}</td>
                <td>{this.state.Nsdate}</td>
                <td>{this.state.Nslocation}</td>
                <td>{this.state.Nsdoctor}</td>
                <td>{this.state.Nsreview}</td>
                <td>{this.state.Htype}</td>
                <td>{this.state.Hsolution}</td>
                <td>{this.state.Hperiod}</td>
                <td>{this.state.Hreview}</td>
                </tr>
                </thead>
              ): <>
              </>}
      
            </table>

          
            <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Submit
                </button>
              </div>
              {this.state.message && (
                <p className="alert alert-danger fade in">
                  {this.state.message}
                </p>
              )}
          </div>
        </div>
      </div>
    );
  }
}
