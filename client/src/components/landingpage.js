import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Cell, Grid } from "react-mdl";
import img from "../img/img-portfolio.png";
import Typist from "react-typist";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    };
  }

  render() {
    return (
      <dev>
        <Grid className="landing-page">
          <Helmet>
            <title>Portfolio | Home</title>
          </Helmet>
          <Cell col={12}>
            <img src={img} alt="avatar" className="avatar-img" />
            <h1 className="header-landing-page">
              <Typist>
                <span className="text-white">Hello! Je m'appelle Bagadi </span>
                <Typist.Backspace count={27} delay={340} />
                <span className="text-white">Je suis développeur web </span>
              </Typist>
            </h1>
            <div className="container">
              <div className="container mt-3 mb-2">
                <div className="row justify-content-md-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <p
                      style={{ fontSize: "17px", fontWieght: "100" }}
                      className="text-white text-center"
                    >
                      En reconversion dans le domaine du développement web, j'ai
                      hâte de pouvoir mettre en pratique mes connaissances.
                      J'aime me tenir informé des dernières innovations en
                      matière de nouvelles technologies. Curieux et autonome
                      j'apprends et je m'adapte rapidement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </dev>
    );
  }
}

export default Landing;
