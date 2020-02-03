import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Axios from "axios";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import img from "../img/img-portfolio.png";
import CV from "../img/CV.pdf";
class Resume extends Component {
  constructor() {
    super();
    this.state = {
      exp: []
    };
  }
  componentDidMount() {
    Axios.get("/api/expandedu").then(response => {
      if (response.data.length > 0) {
        this.setState({ exp: response.data });
      } else {
        console.log("There is no data at db");
      }
    });
  }
  render() {
    return (
      <div className="container mt-5 ">
        <Helmet>
          <title>Portfolio | Resume</title>
        </Helmet>

        <img src={img} alt="profile avatar" className="avatar-img" />
        <h2 style={{ textAlign: "center", color: "#fff", padding: 15 }}>
          Experiences & Education
        </h2>

        <div className="container mt-2 mb-2">
          <div className="row justify-content-md-center">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <p
                style={{ fontSize: "17px", fontWieght: "100" }}
                className="text-center text-white"
              >
                Je fais partie de plusieurs associations qui agissent dans le
                champs de l'aide d'urgence aux personnes exilées comme Utopia
                56, l'Auberge des Migrants, Care4Calais. Depuis mon arrivée à
                Lille, je suis aussi engagé au sein de l'association SINGA Lille
                qui oeuvre pour favoriser l'insertion des personnes réfugiées en
                France, à travers la mise en place d'événements, d’ateliers de
                théâtre, de sorties culturelles
              </p>
            </div>
          </div>
        </div>
        <div stye={{ width: "100px" }} className="mx-auto text-center">
          <a
            href={CV}
            download
            className="btn btn-info display-4 border border-white p-2"
          >
            Cliques ici pour télécharger mon CV
          </a>
        </div>

        <Timeline lineColor={"#282828"}>
          {this.state.exp.map(e => (
            <TimelineItem
              key={e.id}
              dateText={
                e.dateStart.slice(0, 7).replace(/-/g, "/") +
                " - " +
                e.dateEnd.slice(0, 7).replace(/-/g, "/")
              }
              dateInnerStyle={{ background: "#17D6E8", color: "#282828" }}
              bodyContainerStyle={{
                background: "#17D6E8",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
              }}
            >
              <h4 style={{ color: "#000" }}>{e.degree}</h4>
              <h5 style={{ color: "#000", padding: 8 }}>
                <i
                  className="fa fa-building"
                  aria-hidden="true"
                  style={{ paddingRight: 5, color: "#282828", fontSize: 18 }}
                />
                {e.establishment}
              </h5>
              <h6
                style={{
                  paddingRight: 5,
                  color: "#17D6E8",
                  opacity: 0.5,
                  marginButton: 10
                }}
              >
                <i
                  className="fa fa-location-arrow"
                  aria-hidden="true"
                  style={{ paddingRight: 5, paddingLeft: 12, color: "#000" }}
                />
                <span style={{ color: "#282828" }}>{e.location}</span>
              </h6>
              <p style={{ paddingTop: 5, paddingLeft: 12 }}>{e.description}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    );
  }
}

export default Resume;
