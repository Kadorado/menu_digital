import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../../assests/styles/ProductDetails.scss";

import back from "../../assests/static/back.svg";
import imageWhatsapp from "../../assests/static/whatsapp.svg";
import imageFacebook from "../../assests/static/facebook.svg";
import imageInstagram from "../../assests/static/instagram.svg";
import { DataContext } from "../context/Context";

export class ProductDetails extends Component {
  static contextType = DataContext;

  state = {
    product_detail: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {

      var res = [];
      if (this.context.categorie === "burguer") {
        res = this.context.products;
      } else {
        res = this.context.pataconazos;
      }

      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product_detail: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product_detail } = this.state;

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


        {product_detail.map((item) => (
          <div className="container__details" key={item._id}>
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
