import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import "./checkout.css";

export default class MyCheckout extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(this.state);
  }
  state = {
    myBag: [],
    totalPrice: 0,
  };

  getProducts = () => {
    const products = localStorage.getItem("bag");
    if (products) {
      this.setState({
        myBag: JSON.parse(products),
      });
    }
  };

  insertCategory = () => {
    const url = process.env.REACT_APP_API_URL + "/history";
  };

  getTotalProduct = () => {
    const products = localStorage.getItem("bag");
    if (products) {
      const productsA = JSON.parse(products);

      const l = productsA.map((p) => {
        let h = 0;
        h += p.product_price * p.product_qty;
        return h;
      });

      this.setState({
        totalPrice: l.reduce((a, b) => a + b, 0),
      });
    }
  };

  componentDidMount = () => {
    this.getProducts();
    this.getTotalProduct();
  };

  render() {
    return (
      <Row>
        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <span className="summary-title">Shipping address</span>
          <div className="address-info p-4 mt-3">
            <span className="summary-title">Andreas Jane</span>
            <p className="mt-3">
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
            </p>
            <div className="btn-address">
              <span>Choose another address</span>
            </div>
          </div>
          <div className="bag-items">
            {this.state.myBag &&
              this.state.myBag.map((product, index) => {
                return (
                  <div
                    className="bag-item d-flex justify-content-between p-4 mt-4"
                    key={index}
                  >
                    <div className="check-and-info d-flex">
                      <div className="detail-item d-flex ml-1">
                        <div
                          className="detail-img ml-2"
                          style={{
                            backgroundImage: `url('${product.product_image}')`,
                          }}
                        ></div>
                        <div className="detail-info ml-2 d-flex flex-column pt-3">
                          <span className="title-info">
                            {product.product_name}
                          </span>
                          <span className="brand-info">
                            {product.product_brand}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-price">
                      <span>IDR {product.product_price}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className="shopping-summary p-4">
            <span className="summary-title">Shopping summary</span>
            <div className="price-info d-flex justify-content-between mt-4">
              <p className="text-price">Order</p>
              <p className="price-count">IDR {this.state.totalPrice}</p>
            </div>
            <div
              className="price-info d-flex justify-content-between"
              style={{ marginTop: "-10px" }}
            >
              <p className="text-price">Delivery</p>
              <p className="price-count">IDR 5000</p>
            </div>
            <hr style={{ marginTop: "-10px" }} />
            <div className="price-info d-flex justify-content-between mt-1">
              <span className="summary-title">Shopping summary</span>
              <p className="price-count" style={{ color: "#DB3022" }}>
                IDR {this.state.totalPrice + 5000}
              </p>
            </div>
            <div className="btn-buy">
              <span>Select Payment</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
