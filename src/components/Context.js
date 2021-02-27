import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "La doble grosera",
        description:
          "Doble carne de res, tocineta , queso mozarella, cebolla caramelizada,tomate , ripio de papa, lechuga y salsa de la casa",
        price: 10000,
        cover: "https://i.ibb.co/yXYbkFg/la-grillua.png",
        count: 1,
      },
      {
        _id: "2",
        title: "La grosera",
        description:
          "carne artesanal de res,tocineta,queso mozarela,lechuga,tomate,salsa de la casa y ripio de papa",
        price: 9000,
        cover: "https://i.ibb.co/yXYbkFg/la-grillua.png",
        count: 1,
      },
      {
        _id: "3",
        title: "La grillua",
        description:
          "Pollo , tocineta , salsa de la casa , cebolla caramelizada, queso mozarela , ripio de papa , lechuga crespa , tomate",
        price: 11000,
        cover: "https://i.ibb.co/yXYbkFg/la-grillua.png",
        count: 1,
      },
      {
        _id: "4",
        title: "Chori burguer",
        description:
          "Carne de res artesanal , chorizo de ternera (zenu),triple queso, doble tocineta,doble cebolla caramelizada y tus salsas favoritas ",
        price: 14000,
        cover: "https://i.ibb.co/yXYbkFg/la-grillua.png",
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

//   componentDidUpdate() {
//     localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
//     localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
//   }

//   componentDidMount() {
//     const dataCart = JSON.parse(localStorage.getItem("dataCart"));
//     if (dataCart !== null) {
//       this.setState({ cart: dataCart });
//     }
//     const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
//     if (dataTotal !== null) {
//       this.setState({ total: dataTotal });
//     }
//   }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
