import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import DashboardNavbar from "./dashboard-navbar";
import Header from "./header";
import { Link } from "react-router-dom";

const Epx = props => (
  <tr>
    <td>{props.exp.degree}</td>
    <td>{props.exp.establishment}</td>
    <td colspn="2">{props.exp.description}</td>
    <td>{props.exp.location}</td>
    <td>{props.exp.dateStart.slice(0, 10)}</td>
    <td>{props.exp.dateEnd.slice(0, 10)}</td>
    <td>
      <Link
        className="btn btn-info m-1"
        to={"/expandedu/update/" + props.exp._id}
      >
        Modifer
      </Link>
      <button
        className="btn btn-danger m-1"
        href="#"
        onClick={() => {
          props.deleteExp(props.exp._id);
        }}
      >
        Supprimer
      </button>
    </td>
  </tr>
);

export default class ExpList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exps: []
    };
  }

  componentDidMount() {
    axios.get("/api/expandedu").then(response => {
      if (response.data.length > 0) {
        this.setState({
          exps: response.data
        });
      } else {
        console.log("null");
      }
    });
  }
  deleteExp = id => {
    axios.delete("/expandedu/" + id).then(response => alert(response.data));
    this.setState({
      exps: this.state.exps.filter(el => el._id !== id)
    });
  };

  expsList = () => {
    return this.state.exps.map(currentExp => {
      return (
        <Epx exp={currentExp} deleteExp={this.deleteExp} key={currentExp._id} />
      );
    });
  };
  render() {
    return (
      <div className="container text-white">
        <Helmet>
          <title>Portfolio | Experience List</title>
        </Helmet>
        <DashboardNavbar />
        <Header title="La liste des expériences et des diplômes " />
        <hr />
        <table className="table table-bordered  table-striped text-white text-center">
          <thead>
            <tr>
              <th scope="col">Expérience </th>
              <th scope="col">Soiété </th>
              <th scope="col">Description </th>
              <th scope="col">Ville </th>
              <th scope="col">Date début </th>
              <th scope="col">Date fin </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>{this.expsList()}</tbody>
        </table>
      </div>
    );
  }
}
