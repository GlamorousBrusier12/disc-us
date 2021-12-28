import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  user: {},
  error: {},
  isLoggedIn: false,
  inProgress: false,
};
export function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, inProgress: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        user: action.user,
        error: null,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
