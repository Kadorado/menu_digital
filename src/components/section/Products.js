import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Products.css";
import CartIcon from '../svg/shopping-cart-solid.svg'    

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart , cart} = this.context;
    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.cover} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <span>${product.price}</span>
              <p>{product.description}</p>
              <button onClick={() => addCart(product._id)}>Add to cart</button>
            </div>
          </div>
        ))}

        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Products;
