import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
//import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import ThunkMiddleware from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//compose는 middleware와 redux_devtools를 함께 사용하기 위한 함수
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware, sagaMiddleware))
);

sagaMiddleware(rootSaga);

export const persistor = persistStore(store);

export default store;
