//import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
//import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import ThunkMiddleware from "redux-thunk";

//import { persistStore, persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//compose는 middleware와 redux_devtools를 함께 사용하기 위한 함수
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(
//  persistedReducer,
//  composeEnhancers(applyMiddleware(ThunkMiddleware, sagaMiddleware))
//);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const DefaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return [...DefaultMiddleware, sagaMiddleware];
  },
});

sagaMiddleware(rootSaga);

export const persistor = persistStore(store);

export default store;
