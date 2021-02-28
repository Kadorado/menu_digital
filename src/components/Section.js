import React, { Component } from "react";
import Products from "./section/Products";
import ProductDetails from "./section/ProductDetails";
import Home from "./section/Home";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
     
      </section>
    );
  }
}

export default Section;
