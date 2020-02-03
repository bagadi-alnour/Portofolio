import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import DashboardNavbar from "./dashboard-navbar";
import Header from "./header";

class ExpUpdate extends Component {
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
    const { description, degree, establishment, location } = this.state;
    const exp = { description, degree, establishment, location };
    axios
      .post("/api/expandedu/update/" + this.props.match.params.id, exp)
      .then(res => alert(res.data));

    setTimeout(() => {
      window.location = "/expandedu";
    }, 2000);
  };

  componentDidMount() {
    axios
      .get("/api/expandedu/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          establishment: response.data.establishment,
          degree: response.data.degree,
          description: response.data.description,
          location: response.data.location,
          dateStart: new Date(response.data.dateStart),
          dateEnd: new Date(response.data.dateEnd)
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container text-white ">
        <Helmet>
          <title>Portfolio | Update experiences </title>
        </Helmet>
        <DashboardNavbar />
        <Header title="Editer une expérience ou un diplôme " />
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <div class="form-group mt-3">
                <label>Le poste ou le dilôme</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.degree}
                  onChange={this.onChangeDegree}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div class="form-group mt-3">
                <label>La soiété</label>
                <input
                  type="type"
                  class="form-control"
                  value={this.state.establishment}
                  onChange={this.onChangeEstablishment}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div class="form-group mt-3">
                <label>Pays,Ville</label>
                <input
                  type="text"
                  class="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
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
                value="Mettre à jour"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpUpdate;
