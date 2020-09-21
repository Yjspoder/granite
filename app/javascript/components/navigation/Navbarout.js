import React, { Component } from "react";
import * as Routes from "../../utils/Routes";
import { fetchApi } from "../../utils/API";

class Navbarout extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = e => {
    e.preventDefault();
    let logout = confirm("Are you sure you want to logout?");
    if (logout) {
      fetchApi({
        url: Routes.logout_path(),
        method: "DELETE",
        onError: response => {
          console.log(response);
        },
        onSuccess: response => {
          console.log(response);
        },
        successcallBack: () => {
          window.location.replace(Routes.login_path())
        }
      })
    }
  }
  render() {
    const { name } = this.props;

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Granite</a>
          <div className="nav justify-content-end">
            <a className="navbar-brand">
              {name}
            </a>
            <li
              type="submit"
              className="navbar-brand"
              onClick={this.handleLogout}>
              Logout
              </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbarout;