import React, { Component } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";
import back from "../../assests/static/back.svg";
import logo from "../../assests/static/logo.jpeg";
import trash from "../../assests/static/trash.svg";
import "../../assests/styles/Cart.scss";
import whatsapp from "../../assests/static/whatsapp.svg";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;

    if (cart.length === 0) {
      return (
        <>
          <div className="Cart--container">
            <div className="header__order">
              <Link to="/product">
                <img src={back} alt="back" className="back"></img>
              </Link>

              <h2>Mi Orden</h2>
              <img src={logo} alt="logo" className="Logo"></img>
            </div>
            <h2 style={{ textAlign: "center" }}>No has agregado productos!!</h2>
          </div>
        </>
      );
    } else {
      function msgWhatsapp() {
        const codeCountry = "57";
        const numberCellPhone = `${codeCountry}3006368229`;
        const API_WHATSAPP = `https://wa.me/${numberCellPhone}?text=`;

        let waMsj = "";
        let message = "";

        cart.forEach((product) => {
          if (product.count !== 0) {
            let submessage = `${product.title}%20(${
              product.count
            })%20subtotal:$${product.count * product.price}%20`;
            message += submessage;
          }
        });

        let waS = `${API_WHATSAPP}${message}`;
        waS = waS.replace(/ /g, "%20");

        waMsj = `${waS}%20El%20Total%20es%20:${total}`;

        return waMsj;
      }

      return (
        <>
          <div className="Cart--container">
            <div className="header__order">
              <Link to="/product">
                <img src={back} alt="back" className="back"></img>
              </Link>
              <div className="mi_orden">
                <h2>Mi Orden</h2>
                <p>
                  Recuerda que tu pedido sera enviado a whatsapp donde
                  coordinaremos el pago y el envio
                </p>
              </div>
              <img src={logo} alt="logo" className="Logo"></img>
            </div>

            <div className="container__order-cart">
              {cart.map((product) => (
                <div className="details_cart" key={product._id}>
                  <img src={product.cover} alt="" />
                  <div className="box">
                    <div className="row">
                      <h2>{product.title}</h2>
                      <span>${product.price * product.count}</span>
                    </div>
                    <div className="amount">
                      <button
                        className="count"
                        onClick={() => reduction(product._id)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span>{product.count}</span>
                      <button
                        className="count"
                        onClick={() => increase(product._id)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="delete"
                    onClick={() => removeProduct(product._id)}
                  >
                    <img src={trash} alt="trash"></img>
                  </div>
                </div>
              ))}
            </div>

            <div className="total">
              <h3>Total: ${total}</h3>
              <a href={msgWhatsapp()}>
                <button>
                  Pedir
                  <img src={whatsapp} alt="imagen"></img>
                </button>
              </a>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Cart;
