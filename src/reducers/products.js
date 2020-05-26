import * as Types from "../constants/ActionTypes";

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.DELETE_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.ADD_PRODUCT:
      return action.products;

    case Types.UPDATE_PRODUCTS:
      state = action.products;
      return [...state];

    default:
      return [...state];
  }
};

export default products;
