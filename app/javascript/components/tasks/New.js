import React, { Component } from "react";
import * as Routes from "../../utils/Routes";
import API from "../../utils/API";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    API.postNewTask({ task: { description: this.state.description } })
      .then(() => {
        window.location.href = Routes.tasks_path();
      })
      .catch((error) => {
        error.text().then((err) => {
          console.error(err);
        });
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

  render() {
    return (
      <div className="container">
        <div className="col-md-10 mx-auto pt-2">
          {this.displayAddTaskForm()}
        </div>
      </div>
    );
  }
}

export default New;
