import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DashboardNavbar from "./dashboard-navbar";
import Header from "./header";
import axios from "axios";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    axios
      .get("api/projectslist/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            projects: response.data
          });
        } else {
          console.log("There is no data in the db");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteProject(id) {
    axios
      .delete("/api/projectslist/" + id)
      .then(response => console.log(response.data));
    this.setState({
      projects: this.state.projects.filter(el => el._id !== id)
    });
  }

  render() {
    const imgStyle = {
      height: "180px"
    };
    const projects = this.state.projects.map((project, index) => (
      <div className="col  mb-2">
        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img
            style={imgStyle}
            src="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
            alt="react logo "
          />
          <div className="card-body text-center">
            <h5 className="card-title text-white">{project.name}</h5>
            <h6 className="card-title text-info">
              Languge: {project.category}
            </h6>
            <p className="card-text">{project.description}</p>

            <input
              type="submit"
              class="btn btn-success"
              value="Supprimer"
              onClick={() => this.deleteProject(project._id)}
            />
          </div>
        </div>
      </div>
    ));
    return (
      <div className="container text-white ">
        <Helmet>
          <title>Portfolio | Project list</title>
        </Helmet>
        <DashboardNavbar />
        <Header title="La liste des projets" />
        <div className="row text-dark">{projects}</div>
      </div>
    );
  }
}
