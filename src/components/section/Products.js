import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";

import CartIcon from "../svg/shopping-cart-solid.svg";

import logo from "../../components/svg/logo.jpeg";
import imageWhatsapp from "../../components/svg/whatsapp.svg";
import imageFacebook from "../../components/svg/facebook.svg";
import imageInstagram from "../../components/svg/instagram.svg";
import "../css/styles/Products.scss";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart, cart , changeCategorie, categorie , pataconazos} = this.context;
    
    return (
      <div id="product">
        <div className="products__container">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>

          <div className="container__social--schedule">
            <div className="container__social">
              <img src={imageWhatsapp} alt="Whatsapp" />
              <img src={imageFacebook} alt="Facebook" />
              <img src={imageInstagram} alt="instagram"></img>
            </div>
            <div className="container__schedule">
              <h3>Horario: Lunes - Domingos</h3>
              <p>6:30pm - 1:00am</p>
            </div>
          </div>
        </div>

        <h2>Categorías</h2>
        <ul>
          <li>
            <button
             onClick={() => changeCategorie("burguer")}
            >
              Hamburguesas
            </button>
          </li>
          <li>
            <button
              onClick={() => changeCategorie("pataconazos")}
            >
              Pataconazos
            </button>
          </li>
        </ul>


        <div className="card--container">
          { categorie==="burguer" && 
          products.map((product) => (
            <div className="card" key={product._id}>
              <img src={product.cover} alt="" />
              <div className="content">
                <h3>{product.title}</h3>
                <Link to={`/product/${product._id}`}
                  style={{
                    color: "#c54d0e",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Ver ingredientes
                </Link>
                <span>${product.price}</span>

                <button onClick={() => addCart(product._id, categorie)}>Agregar</button>
              </div>
            </div>
          ))}
          { categorie ==="pataconazos" &&

          pataconazos.map((product) => (
            
            <div className="card" key={product._id}>
              <img src={product.cover} alt="" />
              <div className="content">
                <h3>{product.title}</h3>
                <Link to={`/product/${product._id}`}
                  style={{
                    color: "#c54d0e",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Ver ingredientes
                </Link>
                <span>${product.price}</span>

                <button onClick={() => addCart(product._id, categorie)}>Agregar</button>
              </div>
            </div>
          ))}  

        </div>

        <div className="footer_nav--card">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <button>
              <span>{cart.length}</span>
              <img src={CartIcon} alt="Shopping" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Products;