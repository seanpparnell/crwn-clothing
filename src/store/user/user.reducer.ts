import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import { signInSuccess, signOutSuccess, signOutFailed, signInFailed, signUpFailed } from "./user.action";



export type UserState = {
  currentUser: UserData | null;
  isLoading: boolean;
  error: Error | null;
}

export const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
  // console.log("dispatched");
  // console.log(action);
  // const { type, payload } = action;

  if(signInSuccess.match(action)) {
    return {...state, currentUser: action.payload}
  };

  if(signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  };

  if(signOutFailed.match(action) || signInFailed.match(action) || signUpFailed.match(action)) {
    return {
      ...state, 
      error: action.payload,
    };
  };

  return state;


  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return {
  //       ...state,
  //       currentUser: payload,
  //     };
  //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //       return {
  //         ...state,
  //         currentUser: null,
  //       }
  //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //       return {
  //         ...state, 
  //         error: payload,
  //       };
  //   default:
  //     return state;
  // }
};