import * as Types from "../constants/ActionTypes";

var initialState = {};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCTS:
      state = action.product;
      return { ...state };

    default:
      return { ...state };
  }
};

export default itemEditing;
