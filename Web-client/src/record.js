import React from "react";
import ReactDOM from "react-dom";
import HealthCare from "./HealthCare";
import web3 from "./web3";

export default class Record extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      recID: "",
      dDate: "",
      message: ""
    };
  }

  /*async handleClick(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await HealthCare.methods
      .search(
        this.state.recID,
        this.state.pname,
        this.state.dDate,
        this.state.hname,
        this.state.price
      )
      .send({ from: accounts[0], gas: 2100000 });
    this.setState({ message: "success" });
  }
*/

  render() {
    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <div className="login-form">
            <form method="post" autoComplete="off">
              <h2 className="text-center">Search</h2>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.recID}
                  onChange={event =>
                    this.setState({ recID: event.target.value })
                  }
                  className="form-control"
                  placeholder="ID"
                />
              </div>
             
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
             
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  //onClick={this.handleClick}
                >
                  Search
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
        </div>

        <div className="col-md-6 col-md-offset-2">
          <div className="c-list">
            <h2 className="text-center">Records</h2>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Hospital Name</th>
                  <th>Price</th>
                </tr>

                {this.state.message && this.state (
                <tr>
                <td>{this.state.recID}</td>
                <td>{this.state.pname}</td>
                <td>{this.state.dDate}</td>
                <td>{this.state.hname}</td>
                <td>{this.state.price}</td>
                </tr>
              )}

              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
