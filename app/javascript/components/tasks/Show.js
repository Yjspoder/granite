import React, { Component } from "react";
import * as Routes from "../../utils/Routes";
import { fetchApi } from "../../utils/API";
import Errors from "../shared/Errors";

class Show extends Component {
  render() {
    const { task } = this.props;
    return (
      <>
        <div className="container">
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
              <br />
              Assigned to: {this.props.user.name}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Show;
