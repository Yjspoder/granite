import React, { Component } from "react";
import { fetchApi } from "../../utils/API";
import * as Routes from "../../utils/Routes";
import Errors from "../shared/Errors";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: null,
      message: null,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleError = (response) => {
    this.setState({
      errors: {
        errors: response.message,
        type: response.type,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({
      url: Routes.users_path(),
      method: "POST",
      body: {
        user: this.state.user,
      },
      onError: this.handleError,
      onSuccess: (response) => {
        this.setState({
          message: response.message,
        });
      },
      successcallBack: () => {
        window.location.href = Routes.tasks_path();
      },
    });
  };

  displayErrors = () => {
    const { errors } = this.state;
    return (
      <div className="row">
        {errors && (
          <div className="mt-4">
            <Errors errors={errors.errors} message={errors.type} />
          </div>
        )}
      </div>
    );
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <div className="container">
          <h3 className="py-3">Sign Up</h3>
          {this.displayErrors()}
          {message ? (
            <div className="alert alert-success">{message}</div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="name"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="email">Email address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="password_confirmation">
                      Password Confirmation
                    </label>
                    <input
                      className="form-control"
                      type="password_confirmation"
                      id="password_confirmation"
                      name="password_confirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
}

export default New;
