import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.task.description,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  displayEditTAskForm() {
    return (
      <div>
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
        <button className="btn btn-md btn-primary" type="submit">
          Update task
        </button>
      </div>
    );
  }
  render() {
    return (
      <>
        <div className="container">
          <h3 className="py-3">Enter new task details</h3>
          {this.displayEditTAskForm()}
        </div>
      </>
    );
  }
}

export default Edit;
