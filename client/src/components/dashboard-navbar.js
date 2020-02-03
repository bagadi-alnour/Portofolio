import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = props => {
  const logout = () => {
    localStorage.clear();
    console.log("logging out");
    window.location = "/";
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-dark  ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <Link className="text-info " to="/contactlist">
                  Boite aux lettres
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="text-info" to="/projects/add">
                  Ajouter un projet
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="text-info" to="/projectslist">
                  les projets
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="text-info" to="/expandedu/add">
                  Ajouter une expériences
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="text-info" to="/expandedu">
                  les expérience
                </Link>
              </li>
              <li>
                {" "}
                <input
                  className="btn btn-danger btn-sm float-right m-1 mr-3"
                  type="submit"
                  value="Se déconnecter"
                  onClick={logout}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default DashboardNavbar;
