import axios from "axios";
import {
  postProductString,
  getProductsNewString,
  getProductsString,
  getProductsPopularString,
} from "../actionString";

const url = process.env.REACT_APP_API_URL;

export const getProducts = (queryParams = "") => {
  return {
    type: getProductsString,
    payload: axios.get(url + "/product" + queryParams),
  };
};

export const getNewProducts = () => {
  return {
    type: getProductsNewString,
    payload: axios.get(url + "/product?order=newest&sort=desc"),
  };
};

export const getPopularProducts = () => {
  return {
    type: getProductsPopularString,
    payload: axios.get(url + "/product?order=popular&sort=desc"),
  };
};

export const Test = () => {
  return {
    type: "TEST",
    payload: axios.get("http://localhost:8000/product/test"),
  };
};

export const postProduct = (formData, token) => {
  return {
    type: postProductString,
    payload: axios.post(url + "/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": "Bearer " + token,
      },
    }),
  };
};
