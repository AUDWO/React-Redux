import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({ toodo: todoReducer });

export default rootReducer;
