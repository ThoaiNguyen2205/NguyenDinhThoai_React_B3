import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import products from "../assets/data/products.json";
import ModalCart from "./ModalCart";
export default class ShoesStore extends Component {
  state = {
    productDetail: [
      {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
      },
    ],
    productCart: [
      {
        id: 1,
        name: "Adidas Prophere",
        price: 350,
        image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
        quantityCart: 1,
      },
    ],
  };
  //   Add product cart
  addToCart = (prodAdd) => {
    console.log(prodAdd);
    prodAdd = { ...prodAdd, quantityCart: 1 };
    let arrCart = this.state.productCart;
    let prodCart = arrCart.find((item) => item.id === prodAdd.id);
    if (prodCart) {
      prodCart.quantityCart += 1;
    } else {
      arrCart.push(prodAdd);
    }
    this.setState({
      productCart: arrCart,
    });
  };
  // Delete Cart
  deleteToCart = (id) => {
    console.log(id);
    let index = this.state.productCart.findIndex((item) => item.id === id);
    if (index != -1) {
      this.state.productCart.splice(index, 1);
    }
    this.setState({
      productCart: this.state.productCart,
    });
  };
  // changeQuantity

  changeQuantity = (id, quantity) => {
    console.log(id, quantity);
    let pCart = this.state.productCart.find((item) => item.id === id);
    if (pCart) {
      pCart.quantityCart += quantity;
      if (pCart.quantityCart < 1) {
        if (window.confirm("Bạn có muốn xoá sản phẩm này không ?")) {
          this.deleteToCart(pCart.id);
          return;
        } else {
          pCart.quantityCart -= quantity;
        }
      }
    }
    this.setState({
      productCart: this.state.productCart,
    });
  };
  // setstate modal
  setStateModal = (prodClick) => {
    console.log(prodClick);
    this.setState({
      productDetail: prodClick,
    });
  };
  render() {
    let total = this.state.productCart.reduce((tls, prod, index) => {
      return (tls += prod.quantityCart);
    }, 0);
    return (
      <div className="mb-5" style={{ backgroundColor: "rgb(241, 241, 241)" }}>
        <div
          className="header container-fluid"
          style={{
            backgroundImage: "url(./img/banner4.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "70vh",
          }}
        ></div>
        <div className="body container">
          <h1 className="text-center text-danger mt-4">Products List</h1>
          <div
            className="text-end mt-3"
            data-bs-toggle="modal"
            data-bs-target="#modalCart"
          >
            <button className="btn btn-dark text-white   fs-4">
              <i className="fa fa-shopping-cart"></i> My cart ( {total} )
            </button>
          </div>
          <div className="text-end">
            <ModalCart
              productCart={this.state.productCart}
              deleteToCart={this.deleteToCart}
              changeQuantity={this.changeQuantity}
            />
          </div>
          <Modal
            content={this.state.productDetail}
            addToCart={this.addToCart}
          />
          <ProductList
            productData={products}
            setStateModal={this.setStateModal}
            addToCart={this.addToCart}
          />
        </div>
      </div>
    );
  }
}
