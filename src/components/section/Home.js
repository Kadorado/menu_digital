import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>HOME</div>
        <div>
          <Link to="/product">
              Entrar
          </Link>
        </div>
      </div>
    );
  }
}
