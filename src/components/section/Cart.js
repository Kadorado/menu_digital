import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import back from "../svg/back.svg";
import logo from "../svg/logo.jpeg";
import trash from "../svg/trash.svg";
import "../css/styles/Cart.scss";
import whatsapp from "../svg/whatsapp.svg";

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
        const API_WHATSAPP = "https://wa.me/573006368229?text=";

        let waMsj = "";
        let str = "";
        cart.forEach((item) => {
          if (item.count !== 0) {
            let subst = `${item.title}%20(${item.count})%20subtotal:$${
              item.count*item.price
            }%20`;
            str += subst;
          }
        });
        let waS = `${API_WHATSAPP}${str}`;
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

              <h2>Mi Orden</h2>
              <img src={logo} alt="logo" className="Logo"></img>
            </div>

            <div className="container__order-cart">
              {cart.map((item) => (
                <div className="details_cart" key={item._id}>
                  <img src={item.cover} alt="" />
                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>${item.price * item.count}</span>
                    </div>
                    <div className="amount">
                      <button
                        className="count"
                        onClick={() => reduction(item._id)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="count"
                        onClick={() => increase(item._id)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="delete"
                    onClick={() => removeProduct(item._id)}
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
                  <img src={whatsapp} alt="wh-image"></img>
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
