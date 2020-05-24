import * as Types from "../constants/ActionTypes";
import callApi from "../utils/callApi";

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
