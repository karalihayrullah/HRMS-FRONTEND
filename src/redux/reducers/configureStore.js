import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export default function configureStore(){
    return createStore(rootReducer, applyMiddleware(thunk))
}