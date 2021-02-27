import {
  postProductString,
  getProductsString,
  getProductsNewString,
  getProductsPopularString,
  pending,
  rejected,
  fulfilled,
} from "../actionString";

const initialState = {
  products: {},
  newProducts: {},
  test: {},
  popularProducts: {},
  insert: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

const ProductReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getProductsString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getProductsString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getProductsString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        products: action.payload.data,
      };
    case getProductsNewString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getProductsNewString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getProductsNewString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        newProducts: action.payload.data,
      };
    case getProductsPopularString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getProductsPopularString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getProductsPopularString + fulfilled:
      // console.log(action.payload);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        popularProducts: action.payload.data,
      };
    case postProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case postProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case postProductString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        insert: action.payload.data,
      };

    case "TEST" + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "TEST" + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case "TEST" + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        test: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default ProductReducer;
