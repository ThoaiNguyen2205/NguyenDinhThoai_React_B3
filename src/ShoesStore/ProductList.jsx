import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { productData, setStateModal, addToCart } = this.props;
    return (
      <div className="row">
        {productData.map((product, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={index}>
              <ProductItem
                item={product}
                setStateModal={setStateModal}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
