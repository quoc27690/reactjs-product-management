import * as Types from "../constants/ActionTypes";
import callApi from "../utils/callApi";

// GET all products
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("api/products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

// Delete a product
export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`api/products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(res.data));
    });
  };
};

export const actDeleteProduct = (products) => {
  return {
    type: Types.DELETE_PRODUCTS,
    products,
  };
};

// Add a product
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`api/products/`, "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

// Edit a product
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`api/products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCTS,
    product,
  };
};
