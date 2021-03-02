import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Context";

import CartIcon from "../../assests/static/shopping-cart-solid.svg";

import logo from "../../assests/static/logo.jpeg";
import imageWhatsapp from "../../assests/static/whatsapp.svg";
import imageFacebook from "../../assests/static/facebook.svg";
import imageInstagram from "../../assests/static/instagram.svg";
import "../../assests/styles/Products.scss";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const {
      products,
      addCart,
      cart,
      changeCategorie,
      categorie,
      pataconazos,
    } = this.context;

    // Change this cellphone number !!
    const cellPhoneNumber = "573104555126";

    function showPrice(price) {
      var showTotal;

      if (price.toString().length === 4) {
        let totalStr = price.toString();
        let firstStr = totalStr.substring(0,1);
        showTotal = "$ "+firstStr + "." + totalStr.substring(1);

        return showTotal;
      } else {
        showTotal = new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(price);
        return showTotal;
      }
    }

    let msgwhatsap =
      "Gracias por comunicarte con A LO MARACUCHO VE. ¿Qué podemos servirte Regalame por favorNombre Unidad de Madera donde te encuentras: Número de apartamento En un momento tomaremos tú pedido,Gracias por preferirnos y no quedarte con las ganas";

    msgwhatsap = msgwhatsap.replace(/ /g, "%20");

    return (
      <div id="product">
        <div className="products__container">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>

          <div className="container__social--schedule">
            <div className="container__social">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send/?phone=${cellPhoneNumber}&text=${msgwhatsap}`}
              >
                <img src={imageWhatsapp} alt="Whatsapp" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.facebook.com/alomaracuchove.maracuchos.3"}
              >
                <img src={imageFacebook} alt="Facebook" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/a_lo_maracucho_ve/?r=nametag"}
              >
                <img src={imageInstagram} alt="instagram"></img>
              </a>
            </div>
            <div className="container__schedule">
              <h3>Horario: Jueves a Domingos </h3>
              <p>5:00pm a 10:00pm</p>
            </div>
          </div>
        </div>

        <h2>Categorías</h2>
        <ul>
          <li>
            <button onClick={() => changeCategorie("burguer")}>
              Hamburguesas
            </button>
          </li>
          <li>
            <button onClick={() => changeCategorie("pataconazos")}>
              Pataconazos
            </button>
          </li>
        </ul>

        <div className="card--container">
          {categorie === "burguer" &&
            products.map((product) => (
              <div className="card" key={product._id}>
                <img src={product.cover} alt="" />
                <div className="content">
                  <h3>{product.title}</h3>
                  <Link
                    to={`/product/${product._id}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "15px",
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    Ver ingredientes
                  </Link>
                  <span>{showPrice(product.price)}</span>

                  <button onClick={() => addCart(product._id, categorie)}>
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          {categorie === "pataconazos" &&
            pataconazos.map((product) => (
              <div className="card" key={product._id}>
                <img src={product.cover} alt="" />
                <div className="content">
                  <h3>{product.title}</h3>
                  <Link
                    to={`/product/${product._id}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "15px",
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    Ver ingredientes
                  </Link>
                  <span>{showPrice(product.price)}</span>
                  

                  <button onClick={() => addCart(product._id, categorie)}>
                    Agregar
                  </button>
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
          <p className="eslogan">
            ¡¡Gracias por preferirnos y no quedarte con las ganas!!
          </p>
        </div>
      </div>
    );
  }
}

export default Products;
