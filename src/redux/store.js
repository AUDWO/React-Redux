import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
//import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";

import ThunkMiddleware from "redux-thunk";

//compose는 middleware와 redux_devtools를 함께 사용하기 위한 함수
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;
