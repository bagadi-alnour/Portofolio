import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authentication from "./authentication";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    };
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  login = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const userInfo = { email, password };
    axios.post("/api/admin/login", userInfo).then(res => {
      if (res.data === "OK") {
        authentication.login(() => {
          localStorage.setItem("isAuth", (authentication.authenticated = true));
          this.props.history.push("/dashboard");
        });
      } else {
        toast.error(res.data);
      }
    });
  };
  render() {
    return (
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <form onSubmit={this.login}>
          <div className="form-row justify-content-center mt-5">
            <div className="col-3">
              <input
                type="email"
                className="form-control"
                placeholder="example@gmail.com"
                required
                onChange={this.onChangeEmail}
              />
            </div>

            <div className="col-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={this.onChangePassword}
              />
            </div>
            <div className="col-3">
              <input className="btn btn-success" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;
