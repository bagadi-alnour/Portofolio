import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Header from "./header";
import DashboardNavbar from "./dashboard-navbar";
export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios.get("/api/contact").then(response =>
      this.setState({
        contacts: response.data
      })
    );
  }

  render() {
    const contact = this.state.contacts.map(contact => (
      <div className="col-lg-4 col-md-3 col-sm-2 col-xs-1 bg-dark border border-white p-2 mb-2">
        <b className="text-danger">From </b> : {contact.email} <br />
        <b className="text-danger">Full name</b> : {contact.lastname}{" "}
        {contact.firstname}
        <br />
        <b className="text-danger">Subject</b> : {contact.subject}
        <br />
        <b className="text-danger ">Message</b> : <br />
        {contact.message} <br />
        <b className="text-danger">
          Sent at :
          {contact.createdAt.slice(0, 10) +
            " - " +
            contact.createdAt.slice(11, 19)}
        </b>
      </div>
    ));
    return (
      <div className="container text-white">
        <Helmet>
          <title>Portfolio | Contact list</title>
        </Helmet>
        <DashboardNavbar />
        <Header title="la liste des messages reçus" />
        <div className="row">{contact}</div>
      </div>
    );
  }
}
