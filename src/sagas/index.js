import { all } from 'redux-saga/effects';
import {
  watchUserAuthenticationSaga,
} from './user';

function* rootSaga() {
  yield all([
    watchUserAuthenticationSaga(),
  ]);
}

export default rootSaga;
