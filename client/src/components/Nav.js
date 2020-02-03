import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import logo from "../img/logo-bagadi.png";
import Main from "./main";
const linkStyle = {
  fontSize: 18,
  fontFamily: "Merienda One",
  color: "#17D6E8"
};
class Nav extends Component {
  render() {
    const bagadiLogo = (
      <Link to="/">
        <img style={{ width: "120px", marginLeft: 0 }} src={logo} alt="Logo" />
      </Link>
    );
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="text-info" transparent title={bagadiLogo}>
            <Navigation>
              <Link style={linkStyle} to="/resume">
                Resume
              </Link>

              <Link style={linkStyle} className="nav-tab" to="/projects">
                Projects
              </Link>

              <Link style={linkStyle} className="nav-tab" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer title={bagadiLogo} className="bg-dark text-info">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Nav;
