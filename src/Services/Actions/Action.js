import { ADD_CART,REMOVE_CART } from "../Constants"

export const addToCart = (data) =>{
    // console.log("action",data);
    return{
        type:ADD_CART,
        data:data
    }
}
export const removeToCart = (data) =>{
        console.log("action",data);
    return{
        type:REMOVE_CART,
    }
}