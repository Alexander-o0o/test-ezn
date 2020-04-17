import {
  USER_AUTHENTICATION,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_ERROR,
  USER_CLEAR_AUTHENTICATION_ERROR,
  USER_LOGOUT,
} from '../constants';


export const INITIAL_STATE = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const applyUserAuthentication = (state) => ({
  ...state,
  isLoading: true,
});

const applyUserAuthenticationSuccess = (state) => ({
  ...state,
  isAuthenticated: true,
  isLoading: false,
  error: null,
});

const applyUserAuthenticationError = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const userLogout = (state) => ({
  ...state,
  isAuthenticated: false,
});

const applyUserClearAuthenticationError = (state) => ({
  ...state,
  error: null,
});

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION: {
      return applyUserAuthentication(state, action);
    }
    case USER_AUTHENTICATION_SUCCESS: {
      return applyUserAuthenticationSuccess(state, action);
    }
    case USER_AUTHENTICATION_ERROR: {
      return applyUserAuthenticationError(state, action);
    }
    case USER_CLEAR_AUTHENTICATION_ERROR: {
      return applyUserClearAuthenticationError();
    }
    case USER_LOGOUT: {
      return userLogout(state, action);
    }
    default: return state;
  }
};

export default userReducer;
