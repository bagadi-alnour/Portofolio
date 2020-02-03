import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Axios from "axios";
import reactImg from "../img/react.png";
import reactNativeImg from "../img/reactNative.png";
import mernImg from "../img/mern.jpg";
import phpImg from "../img/icon.php.png";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projects: [],
      imgStyle: [
        {
          height: "150px",
          width: "150px"
        }
      ],
      repos: []
    };
  }

  componentDidMount() {
    Axios.get("/api/projectslist/")
      .then(response => this.setState({ projects: response.data }))
      .catch(err => console.log(err));
    //TODO Get 6 repos
  }

  toggleCategories = () => {
    //React projects
    const reactProjects = this.state.projects.map(project =>
      project.category === "ReactJS" ? (
        <div className="col-lg-4 col-md-6 col-sm-12  mb-2 text-center">
          <div className="card-img-top bg-dark">
            <img
              style={this.imgStyle}
              src={reactImg}
              alt="react logo"
              className="card-img-top"
            />
            <div className="card-body ">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                voir le projet
              </a>
            </div>
          </div>
        </div>
      ) : null
    );
    //Reactnative
    const reactNativeProjects = this.state.projects.map(project =>
      project.category === "ReactNative" ? (
        <div className="col-lg-4 col-md-6 col-sm-12  mb-2 text-center">
          <div className="card-img-top bg-dark">
            <img
              style={this.imgStyle}
              src={reactNativeImg}
              alt="img"
              className="card-img-top"
            />
            <div className="card-body tex-center">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text card-text ">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                voir le projet
              </a>
            </div>
          </div>
        </div>
      ) : null
    );
    //JavaScript projects
    const mernProjects = this.state.projects.map(project =>
      project.category === "mern" ? (
        <div className="col-lg-4 col-md-6 col-sm-12  mb-2 text-center">
          <div className="card-img-top bg-dark">
            <img
              style={{ height: 280 }}
              src={mernImg}
              alt="img"
              className="card-img-top"
            />
            <div className="card-body ">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                voir le projet
              </a>
            </div>
          </div>
        </div>
      ) : null
    );
    //PHP projects
    const phpProjects = this.state.projects.map(project =>
      project.category === "PHP" ? (
        <div className="col-lg-4 col-md-6 col-sm-12  mb-2 text-center">
          <div className="card-img-top bg-dark ">
            <img
              style={{ height: 260 }}
              src={phpImg}
              alt="img"
              className="card-img-top"
            />
            <div className="card-body ">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                voir le projet
              </a>
            </div>
          </div>
        </div>
      ) : null
    );
    if (this.state.activeTab === 0) {
      //React projects
      return (
        <div className="container">
          <div className="row justify-content-md-center">{reactProjects}</div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      //React-Native projects
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            {reactNativeProjects}
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      //MERN projects

      return (
        <div className="container">
          <div className="row justify-content-center">{mernProjects}</div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      //JavaScript projects
      return (
        <div className="container">
          <div className="row justify-content-md-center">{phpProjects}</div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container mb-3 mt-5">
        <Helmet>
          <title>Portfolio | Project list</title>
        </Helmet>
        <h2 className="text-center text-white">Projets que j'ai réalisés</h2>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
          className="text-white my-3"
        >
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>FullStack - MERN</Tab>
          <Tab>PHP</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        <div className=" container my-5">
          <h2 className="text-white text-center m-2">
            Technologies que j'utilise quotidiennement
            <hr className="bg-white" />
          </h2>
          <div className="row social-links">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-html5" aria-hidden="true" title="HTML5" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-css3" aria-hidden="true" title="CSS3" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-github-square"
                aria-hidden="true"
                title="Github"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-linux"
                aria-hidden="true"
                title="Linux"
                siz={60}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-windows" aria-hidden="true" title="Windows" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-wordpress"
                aria-hidden="true"
                title="WordPress"
              />
            </div>
          </div>

          <div className="row social-links mb-5 mt-5">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-chrome"
                aria-hidden="true"
                title="Chrome browser"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-slack" aria-hidden="true" title="Slack" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-terminal f-10x"
                aria-hidden="true"
                title="Terminal"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-trello" aria-hidden="true" title="Trello" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i
                className="fa fa-stack-overflow"
                aria-hidden="true"
                title="Stack-overflow"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <i className="fa fa-gitlab" aria-hidden="true" title="Getlab" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
