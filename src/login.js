import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class login extends React.Component {
  render() {
    return (
      <div className="emailx">
        Email ID : <input type="email" />
        Password : <input type="password" />
        <Link to="/">
          <button>Redirect to root</button>
        </Link>
      </div>
    );
  }
}

