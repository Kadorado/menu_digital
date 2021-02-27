import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../css/styles/ProductDetails.scss";

import back from "../svg/back.svg";
import imageWhatsapp from "../svg/whatsapp.svg";
import imageFacebook from "../svg/facebook.svg";
import imageInstagram from "../svg/instagram.svg";
import { DataContext } from "../Context";

export class ProductDetails extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;

    return (
      <>
       <div className="products__container--details">
          <Link to="/product">
            <img src={back} alt="logo" className="back-imagen--details"></img>
          </Link>

          <div className="container__social--schedule--details">
            <div className="container__social--details">
              <img src={imageWhatsapp} alt="Whatsapp" />
              <img src={imageFacebook} alt="Facebook" />
              <img src={imageInstagram} alt="instagram"></img>
            </div>
            <div className="container__schedule--details">
              <h3>Horario: Lunes - Domingos</h3>
              <p>6:30pm - 1:00am</p>
            </div>
          </div>
        </div>


        {product.map((item) => (
          <div className="container__details" key={item.id}>
            <div className="details">
              <h3>{item.title}</h3>
              <p> {item.description}</p>
              <img src={item.cover} alt="item-cover"></img>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ProductDetails;
