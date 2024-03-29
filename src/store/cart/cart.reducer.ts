import { AnyAction } from "redux";
import {setCartItems, setIsCartOpen} from './cart.action'
import { CartItem } from "./cart.types";


export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};




export const CART_INTITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INTITIAL_STATE, action: AnyAction): CartState => {

  if(setIsCartOpen.match(action)) {
    return{
      ...state, 
      isCartOpen: action.payload,
    };
  };

  if(setCartItems.match(action)) {
    return {...state, cartItems: action.payload}
  };

  return state;
  
  
  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     }
  //   default:
  //     return state;
  // }
};