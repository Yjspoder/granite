import React, { Component } from "react";
import * as Routes from "../../utils/Routes";
import { fetchApi } from "../../utils/API";
import Errors from "../shared/Errors";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      message: null,
      errors: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleError = (response) => {
    this.setState({ errors: response.messages });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const task = {
      description: this.state.description,
    };
    fetchApi({
      url: Routes.tasks_path(),
      method: "POST",
      body: { task },
      onError: this.handleError,
      onSuccess: (response) => {
        this.setState({
          message: response.messages[0],
        });
      },
      successcallBack: (response) => {
        setTimeout(function () {
          window.location.replace(Routes.task_path(response.id));
        }, 1000);
      },
    });
  };

  displayAddTaskForm() {
    return (
      <div>
        <div className="row">
          <h3 className="pb-3">Add Task</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row pt-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              <h5 className="text-secondary">Description: </h5>
            </label>
            <div className="col-sm-10">
              <input
                name="description"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row pt float-right pr-3">
              <button className="btn btn-md btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  displayErrors() {
    const { errors } = this.state;

    return (
      <div className="row justify-content-center">
        {errors.length !== 0 ? (
          <div className="mt-4">
            <Errors errors={errors} message="danger" />
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.displayErrors()}
        {this.state.message ? (
          <div className="alert alert-success">{this.state.message}</div>
        ) : (
          <div className="col-md-10 mx-auto pt-2">
            {this.displayAddTaskForm()}
          </div>
        )}
      </div>
    );
  }
}

export default New;
