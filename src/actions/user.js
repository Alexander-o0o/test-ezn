import {
  USER_AUTHENTICATION,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_ERROR,
  USER_CLEAR_AUTHENTICATION_ERROR,
  USER_LOGOUT,
} from '../constants';

export const doUserAuthentication = (login, password) => (
  { type: USER_AUTHENTICATION, payload: { login, password } });

export const doUserAuthenticationSuccess = (result) => (
  { type: USER_AUTHENTICATION_SUCCESS, result });

export const doUserAuthenticationError = (error) => (
  { type: USER_AUTHENTICATION_ERROR, error });

export const doUserClearAuthenticationError = () => (
  { type: USER_CLEAR_AUTHENTICATION_ERROR });

export const doUserLogout = () => (
  { type: USER_LOGOUT });
