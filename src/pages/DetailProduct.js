import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import Detail from "../components/detail/detail";
import axios from "axios";

export default class DetailProduct extends Component {
  state = {
    detailProduct: [],
  };

  getProductById = () => {
    const id = this.props.match.params.id;
    console.log(id);
    const url = process.env.REACT_APP_API_URL;
    // const url = 'http://localhost:8000/product/' + id

    axios
      .get(url + "/product/" + id)
      .then(({ data }) => {
        console.log(data.data[0]);
        this.setState({
          detailProduct: data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getProductById();
  };

  render() {
    return (
      <>
        <Navbar />
        <Container className="mt-5">
          <Detail
            dproduct={
              this.state.detailProduct.length && this.state.detailProduct[0]
            }
          />
        </Container>
      </>
    );
  }
}
