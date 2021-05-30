import {ActionTypes} from "../contants/action-types"

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addFoodToOrders=(products)=>{
    return {
        type:ActionTypes.ADD_FOOD_TO_ORDERS,
        payload:products
    }
}

export const removeAllOrders=()=>{
    return {
        type : ActionTypes.REMOVE_ALL_ORDERS
    }
}

export const addLoggedInUser=(products)=>{
    return {
        type:ActionTypes.SET_LOGGEDIN_USER,
        payload:products
    }
}
export const logOutUser=()=>{
    return {
        type:ActionTypes.LOG_OUT_USER,
    }
}