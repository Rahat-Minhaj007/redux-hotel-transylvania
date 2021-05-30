import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const FoodToOrdersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_FOOD_TO_ORDERS:
      return [...state, payload];
    case ActionTypes.REMOVE_ALL_ORDERS:
        return [];
    default:
      return state;
  }
};
// export const removeAllOrdersReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ActionTypes.REMOVE_ALL_ORDERS:
//       return [];

//     default:
//       return state;
//   }
// };
