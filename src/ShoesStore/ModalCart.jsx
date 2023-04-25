import React, { Component } from "react";

export default class ModalCart extends Component {
  render() {
    let { productCart, deleteToCart, changeQuantity } = this.props;
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modalCart"
            tabIndex={-1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header bg-secondary text-white">
                  <h3 className="modal-title" id="modalTitleId">
                    My cart
                  </h3>
                  <button
                    type="button"
                    className="btn-close text-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>
                          <i className="fa fa-cog"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productCart.map((prod, index) => {
                        return (
                          <tr key={index} className="align-middle">
                            <td>{prod.id}</td>
                            <td className="fs-5 text-success">{prod.name}</td>
                            <td>
                              <img
                                src={prod.image}
                                alt=""
                                width={70}
                                height={70}
                              />
                            </td>
                            <td className="text-danger fs-5">{prod.price} $</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  changeQuantity(prod.id, 1);
                                }}
                              >
                                +
                              </button>
                              <span className="mx-2">{prod.quantityCart}</span>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  changeQuantity(prod.id, -1);
                                }}
                              >
                                -
                              </button>
                            </td>
                            <td className="text-danger fs-5">
                              {(
                                prod.price * prod.quantityCart
                              ).toLocaleString()}{" "}
                              $
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  deleteToCart(prod.id);
                                }}
                              >
                                Xoá
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Place to the bottom of scripts */}
        </div>
      </div>
    );
  }
}
