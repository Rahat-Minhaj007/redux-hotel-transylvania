import { combineReducers } from "redux";
import {productReducer,selectedProductReducer,FoodToOrdersReducer, addLoggedInUserReducer} from "./productReducer"

const reducers=combineReducers({
    allProducts:productReducer,
    product : selectedProductReducer,
    orders : FoodToOrdersReducer,
    user:addLoggedInUserReducer
})

export default reducers;