import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import Admin from "./admin";
import dashboard from "./dashboard";
import PrivateRoute from "./PrivateRoute";
import projectsList from "./projects-list";
import ProjectsAdd from "./projects-add";
import ProjectsUpdate from "./projects-update";
import ExpList from "./exp-list";
import ExpAdd from "./exp-add";
import ExpUpdate from "./exp-update";
import ContactList from "./contact-list";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/admin" component={Admin} />
    <PrivateRoute exact path="/dashboard" component={dashboard} />
    <PrivateRoute exact path="/projects/add" component={ProjectsAdd} />
    <PrivateRoute exact path="/projectslist" component={projectsList} />
    <PrivateRoute
      exact
      path="/projects/update/:id"
      component={ProjectsUpdate}
    />
    <PrivateRoute exact path="/expandedu/" component={ExpList} />
    <PrivateRoute exact path="/expandedu/add" component={ExpAdd} />
    <PrivateRoute exact path="/expandedu/update/:id" component={ExpUpdate} />
    <PrivateRoute exact path="/contactlist" component={ContactList} />

    <Route
      path="*"
      component={() => (
        <div className="container">
          <h2>404 NOT FOUND</h2>
        </div>
      )}
    />
  </Switch>
);
export default Main;
