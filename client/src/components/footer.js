import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer fixed-bottom font-small cyan darken-3 bg-dark">
        <div className="footer-copyright text-center text-info py-1">
          <a
            className="text-info"
            href="https://www.linkedin.com/in/bagadi-alnour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-linkedin m-0 p-1"
              aria-hidden="true"
              title="LinkedIn"
            />
          </a>
          <a
            className="text-info"
            href="https://github.com/bagadi-alnour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-github-square mt-0 p-1"
              aria-hidden="true"
              title="Github"
            />
          </a>
        </div>
      </footer>
    );
  }
}
