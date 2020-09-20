import React, { Component } from "react";
import * as Routes from "../../utils/Routes";
import { fetchApi } from "../../utils/API";
import Errors from "../shared/Errors";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleDelete = (taskId) => {
    let taskdelete = confim("Are you sure you want to delete the task?");
    if (taskDelete) {
      fetchApi({
        url: Routes.task_path(taskId),
        method: "DELETE",
        onError: this.handleError,
        onSuccess: (response) => {
          console.log(response);
        },
        successcallBack: () => {
          window.location.replace(Routes.tasks_path());
        },
      });
    }
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
    const { task } = this.props;
    return (
      <>
        <div className="container">
          {this.displayErrors()}
          <h2 className="py-3">Task Details :</h2>
          <div className="row">
            <div className="col-md-10">
              {task.id}.{task.description}
              <a
                className="ml-2 btn btn-sm btn-warning"
                href={Routes.edit_task_path(task.id)}
              >
                Edit
              </a>
              <a
                className="ml-2 btn btn-sm btn-danger"
                onClick={this.handleDelete(task.id)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Show;
