import React, { Component } from "react";
import { fetchApi } from "../../utils/API";
import * as Routes from "../../utils/Routes";
import Error from "../shared/Errors";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.task.description,
      errors: null,
    };
  }

  handleError = (response) => {
    this.setState({
      errors: {
        errors: response.messages,
        type: response.type,
      },
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({
      url: Routes.task_path(this.props.task.id),
      method: "PUT",
      body: { description: this.state.description },
      onError: this.handleError,
      onSuccess: (response) => {
        console.log(response);
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

  displayEditTAskForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Description : </label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </div>
        </div>
        <br />
        <button
          className="btn btn-md btn-primary"
          type="submit"
        >
          Update task
        </button>
      </form>
    );
  }
  render() {
    return (
      <>
        <div className="container">
          <h3 className="py-3">Enter new task details</h3>
          {this.displayErrors()}
          {this.displayEditTAskForm()}
        </div>
      </>
    );
  }
}

export default Edit;
