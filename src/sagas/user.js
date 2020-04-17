/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_AUTHENTICATION,
} from '../constants';
import {
  doUserAuthenticationSuccess,
  doUserAuthenticationError,
} from '../actions/user';
import authenticateUser from '../api/user';


function* userAuthenticationSaga(action) {
  const { login, password } = action.payload;

  try {
    const result = yield call(authenticateUser, login, password);
    if (result.success) {
      yield put(doUserAuthenticationSuccess({}));
    } else {
      yield put(doUserAuthenticationError(new Error('Authentication Error.')));
    }
  } catch (error) {
    yield put(doUserAuthenticationError(error));
  }
}

export function* watchUserAuthenticationSaga() {
  yield takeEvery(USER_AUTHENTICATION, userAuthenticationSaga);
}
