import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { INITIAL_STATE as userInitialState } from '../reducers/user';
import rootSaga from '../sagas';

const LOCAL_STORAGE_KEY = 'reduxSubState';
const sagaMiddleware = createSagaMiddleware();

const dehydrate = () => {
  const text = localStorage.getItem(LOCAL_STORAGE_KEY);
  return ({
    userState: text && text !== 'undefined'
      ? {
        ...userInitialState,
        isAuthenticated: JSON.parse(text),
      } : userInitialState,
  });
};

const store = createStore(
  rootReducer,
  dehydrate(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const rehydrate = () => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(store.getState().userState.isAuthenticated),
  );
};

store.subscribe(rehydrate);

export default store;
