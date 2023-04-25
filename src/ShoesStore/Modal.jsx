import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content, addToCart } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
            role="document"
          >
            <div
              className="modal-content"
              style={{ backgroundColor: "rgba(35, 34, 34, 0.4)" }}
            >
              <div className="modal-header ">
                <h3 className="modal-title text-white " id="modalTitleId">
                  Thông tin sản phẩm
                </h3>
                <button
                  //   type="button"
                  className="text-white bg-transparent  fs-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <div className="card w-50 m-auto">
                  <img src={content.image} alt="" className="w-75 m-auto" />
                  <div className="card-body text-start border-top border-success">
                    <h2>{content.name}</h2>
                    <h3 className="text-danger">{content.price} $</h3>
                    <h5 className="text-success">
                      Quantity : {content.quantity}
                    </h5>
                    <p>{content.description}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCart"
                  onClick={() => {
                    addToCart(content);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    {
      /* Optional: Place to the bottom of scripts */
    }
  }
}
