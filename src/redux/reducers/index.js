import { combineReducers } from "redux";
import {productReducer,selectedProductReducer,FoodToOrdersReducer} from "./productReducer"

const reducers=combineReducers({
    allProducts:productReducer,
    product : selectedProductReducer,
    orders : FoodToOrdersReducer
})

export default reducers;