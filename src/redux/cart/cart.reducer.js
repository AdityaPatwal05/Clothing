import {CartActionTypes} from './cart.types.js';
import {addItemToCart} from './cart.utils.js';

const Initial_State={
    hidden:true,
    cartItems:[]
};

const cartReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };    
        default:
            return state;
    }
}

export default cartReducer;