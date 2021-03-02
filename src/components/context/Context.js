import React, { Component } from "react";
import swal from "sweetalert";
import  "../../assests/styles/Context.scss"


export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "La grosera",
        description:
          "carne artesanal de res,tocineta,queso mozarela,lechuga,tomate,cebolla caramelizada,salsa de la casa y ripio de papa",
        price: 9000,
        cover: "https://i.ibb.co/31ZKQB2/lagrosera.png",
        count: 1,
      },
      {
        _id: "2",
        title: "La doble grosera",
        description:
          "Doble carne de res, tocineta , queso mozarella, cebolla caramelizada,tomate , ripio de papa, lechuga y salsa de la casa",
        price: 12000,
        cover: "https://i.ibb.co/XFCqfWb/ladoblegrosera.png",
        count: 1,
      },
      {
        _id: "3",
        title: "La grillua",
        description:
          "Pollo , tocineta , salsa de la casa , cebolla caramelizada, queso mozarela , ripio de papa , lechuga, tomate",
        price: 11000,
        cover: "https://i.ibb.co/yXYbkFg/la-grillua.png",
        count: 1,
      },
      {
        _id: "4",
        title: "Chori burguer",
        description:
          "Carne de res artesanal , chorizo de ternera (zenu),triple queso, doble tocineta,doble cebolla caramelizada y tus salsas favoritas, lechuga , tomate, ripio de papa ",
        price: 14000,
        cover: "https://i.ibb.co/hmSnL7X/lachoriburguer.png",
        count: 1,
      },
    ],
    pataconazos: [
      {
        _id: "6",
        title: "Pataconazo",
        description:
          "Carne desmechada , jamon , queso mozarela , lechuga, pico de gallo , salsas de la casa y aguacate",
        price: 11000,
        cover: "https://i.ibb.co/52qVxmb/pataconazo.png",
        count: 1,
      },
    ],
    cart: [],
    total: 0,
    categorie: "burguer",
  };

  addCart = (id, categorie) => {
    const { products, pataconazos, cart } = this.state;
    var productsRender = [];

    if (categorie === "burguer") {
      productsRender = products;
    } else {
      productsRender = pataconazos;
    }

    const check = cart.every((item) => {
      return item._id !== id;
    });

    if (check) {
      const data = productsRender.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      swal({
        title: "¡Este producto ya ha sido agregado!",
        text: "Podras aumentar la cantidad en la siguiente sección",
        icon: "success",
        button: "ok",
      });
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
    swal({
      title: "Eliminar producto",
      text: "¿Estas seguro que deseas eliminar este producto?",
      icon: "warning",
      buttons: ["No", "Si"],
      
      
    }).then((response) => {
      if (response) {
        const { cart } = this.state;
        cart.forEach((item, index) => {
          if (item._id === id) {
            cart.splice(index, 1);
          }
        });
        this.setState({ cart: cart });
        this.getTotal();
        swal({ text: "EL producto se elimino de tu orden", icon: "success" });
      }
    });
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  changeCategorie = (categorie) => {
    this.setState({ categorie: categorie });
  };

  render() {
    const { products, cart, total, categorie, pataconazos } = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getTotal,
      changeCategorie,
    } = this;
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
          changeCategorie,
          categorie,
          pataconazos,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
