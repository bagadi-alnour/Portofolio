import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import DashboardNavbar from "./dashboard-navbar";
import Header from "./header";

class projectsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "",
      link: ""
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeCategory = e => {
    this.setState({
      category: e.target.value
    });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeLink = e => {
    this.setState({ link: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const project = {
      name: this.state.name,
      category: this.state.category,
      link: this.state.link,
      description: this.state.description,
      img: this.state.img
    };
    console.log(project);
    axios.post("/api/projectslist/add", project).then(res => alert(res.data));

    window.location = "/projectslist";
  };
  render() {
    return (
      <div className="container text-white">
        <Helmet>
          <title>Portfolio | Add projet</title>
        </Helmet>
        <DashboardNavbar />
        <Header title="Ajouter une projet" />
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-6">
              <label>Nome du project</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Nom du projet"
                onChange={this.onChangeName}
                value={this.state.name}
              />
            </div>

            <div className="col-6">
              <label>Lien du projet</label>
              <input
                type="text"
                className="form-control"
                placeholder="https://example.com"
                value={this.state.link}
                onChange={this.onChangeLink}
              />
            </div>
            <div className="col-6 mt-3">
              <div className="form-group">
                <label>Choisissez un projet </label>
                <select
                  value={this.state.category}
                  onChange={this.onChangeCategory}
                  className="form-control"
                  required
                >
                  <option value="">Choisissez un projet</option>
                  <option value="ReactJS">ReactJS</option>
                  <option value="ReactNative">React Native</option>
                  <option value="VueJS">VueJS</option>
                  <option value="mern">Mern</option>
                  <option value="PHP">PHP</option>
                </select>
              </div>
            </div>

            <div className="col-6 mt-3">
              <label>Description</label>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
            </div>
            <input
              className="btn btn-success btn-lg mt-3"
              type="submit"
              value="Ajouter"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default projectsAdd;
