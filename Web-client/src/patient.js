import React from "react";
import HealthCare from "./HealthCare";
import web3 from "./web3";

export default class Search extends React.Component {
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
        this.state.EHRnumber,
        this.state.dDate,
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
             
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.dDate}
                  onChange={event =>
                    this.setState({ dDate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
             
          
            </form>
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
             
          </div>
          <form method="post" autoComplete="off">
             
             <div className="form-group">
               <button
                 className="btn btn-primary btn-block"
                 onClick={this.handleClick}
               >
                 Create
               </button>
             </div>

             {this.state.message && (
               <p className="alert alert-danger fade in">
                 {this.state.message}
               </p>
             )}
             <div className="clearfix" />
           </form>
          
        </div>

        
        <div className="col-md-6 col-md-offset-2"  >
          <div className="c-list" style={{alignItems:"center"}}>
            <h2 className="text-center">Record Confirm</h2>
        <table className="table table-bordered table-striped" >
              <thead>
                <tr className="th">
                  <th>Today Date</th>
                  <th>EHRnumber</th>
                  <th>Nutritional supplements type</th>
                  <th>Disability aids type</th>
                  <th>Physical therapy / rehabilitation type</th>
                  <th>Vaccine type</th>
                  <th>Vision correction surgery type</th>
                  <th>Non-surgical cosmetic treatment type</th>
                  <th>Hair problems type</th>
                </tr>
                </thead>

                {this.state ?  (
                <thead>
                <tr className="th">
                <td>{this.state.dDate}</td>
                <td>{this.state.EHRnumber}</td>
                <td>{this.state.Ntype}</td>
                <td>{this.state.Dtype}</td>
                <td>{this.state.Ptype}</td>
                <td>{this.state.Vtype}</td>
                <td>{this.state.Vstype}</td>
                <td>{this.state.Nstype}</td>
                <td>{this.state.Htype}</td>
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

