import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal, addToCart } = this.props;
    return (
      <div className="card" style={{ height: 460 }}>
        <img src={item.image} alt="" />
        <div className="card-body py-0">
          <h4>{item.name}</h4>
          <h5 className="mb-0 text-danger">{item.price} $</h5>
        </div>
        <div className="card-footer border-none d-flex justify-content-between">
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            className="btn btn-success"
            onClick={() => {
              setStateModal(item);
            }}
          >
            Detail
          </button>
          <button
            className="btn btn-dark text-white"
            data-bs-toggle="modal"
            data-bs-target="#modalCart"
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to cart
            <i
              className="
        fa fa-cart-plus ms-2"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}
