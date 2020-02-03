import React, { Component } from "react";
import Axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
      msg: null
    };
  }
  onChangeFirsname = e => {
    this.setState({ firstname: e.target.value });
  };
  onChangeLatsname = e => {
    this.setState({ lastname: e.target.value });
  };
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangeSubject = e => {
    this.setState({ subject: e.target.value });
  };
  onChangeMessage = e => {
    this.setState({ message: e.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    const contact = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    Axios.post("/api/contact/add", contact).then(res => console.log(res.data));
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: ""
    });

    toast.success(
      "Merci pour votre message je vous contacte dès que possible!",
      {
        position: toast.POSITION.TOP_CENTER
      }
    );
  };

  render() {
    const className =
      "form-control border-info border-top-0 border-right-0 border-left-0 bg-dark text-info";
    return (
      <div className="container my-5">
        <section className="mb-4">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <div className="row justify-content-md-center">
            <div className="col-md-6 mb-md-0 mb-5">
              <h2 className="text-center text-white">Contacte-moi</h2>
              <div className="text-center text-info">
                <p>
                  tu souhaites collaborer, discuter d'une nouvelle opportunité{" "}
                  <br />
                  ou simplement dire salut, laisses ton message ci-dessous
                </p>
                <p className="text-success">{this.state.msg}</p>
              </div>

              <Helmet>
                <title>Portfolio | Contact</title>
              </Helmet>

              <form onSubmit={this.submitHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onChangeFirsname}
                        placeholder="Ton prènom..."
                        className={className}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onChangeLatsname}
                        placeholder="Ton nom..."
                        className={className}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        onChange={this.onChangeEmail}
                        placeholder="example@gmail.com"
                        className={className}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onChangeSubject}
                        placeholder="Ton sujet..."
                        className={className}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control d-block bg-dark"
                        className={className}
                        rows="12"
                        placeholder="Ton message"
                        onChange={this.onChangeMessage}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col">
                    <button type="submit" className="btn  btn-info d-block">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
