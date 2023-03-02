import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import postReducer from "../recuder/postReducer";
import thunk from 'redux-thunk';

let store = createStore(postReducer, applyMiddleware(thunk));

export default store;