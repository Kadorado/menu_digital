import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/static/logo.jpeg"
import "../../assests/styles/Home.scss"

export default class Home extends Component {
  render() {
    return (
        <>
        <div className="home__container">
          <div className="home__container--logo">
            <img src={logo} alt="logo" />
          </div>
  
          <h1>Bienvenido a</h1>
          <p>¡ A lo maracucho ve !</p>
  
          <Link to="/product">
            <button>¡Entrar!</button>
          </Link>
        </div>
      </>
    );
  }
}
