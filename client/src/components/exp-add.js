import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import DashboardNavbar from "./dashboard-navbar";
import Header from "./header";

class ExpAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateStart: "",
      dateEnd: "",
      establishment: "",
      lacation: "",
      description: "",
      degree: ""
    };
  }

  onChangeDateStart = e => {
    this.setState({ dateStart: e.target.value });
  };
  onChangeDateEnd = e => {
    this.setState({ dateEnd: e.target.value });
  };

  onChangeEstablishment = e => {
    this.setState({ establishment: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeLocation = e => {
    this.setState({ lacation: e.target.value });
  };
  onChangeDegree = e => {
    this.setState({ degree: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const exp = {
      establishment: this.state.establishment,
      degree: this.state.degree,
      description: this.state.description,
      location: this.state.lacation,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd
    };
    console.log(exp);
    axios.post("/api/expandedu/add", exp).then(res => alert(res.data));

    window.location = "/expandedu";
  };
  render() {
    console.log(this.state.dateEnd.slice(0, 12));
    return (
      <div className="container text-white ">
        <Helmet>
          <title>Portfolio | Update experience</title>
        </Helmet>
        <DashboardNavbar />
        <Header title="Ajouter une expérience ou un diplôme " />
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-4">
              <label>Le poste ou le dilôme</label>
              <input
                type="text"
                className="form-control"
                placeholder="React, PHP...."
                value={this.state.degree}
                onChange={this.onChangeDegree}
              />
            </div>
            <div className="col-4">
              <label>Date début</label>
              <input
                type="date"
                className="form-control"
                placeholder="2012.."
                onChange={this.onChangeDateStart}
                value={this.state.dateStart}
              />
            </div>

            <div className="col-4">
              <label>Date fin</label>
              <input
                type="date"
                className="form-control"
                placeholder="2019"
                value={this.state.dateEnd}
                onChange={this.onChangeDateEnd}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-6">
              <div class="form-group mt-3">
                <label>La soiété</label>
                <input
                  type="type"
                  class="form-control"
                  value={this.state.establishment}
                  onChange={this.onChangeEstablishment}
                />
              </div>
              <div class="form-group mt-4">
                <label>Pays,Ville</label>
                <input
                  type="text"
                  class="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                />
              </div>
            </div>
            <div className="col-6 mt-3">
              <div class="form-group">
                <label>Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <input
                className="btn btn-success btn-lg  mt-3"
                type="submit"
                value="Ajouter"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpAdd;
