import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import users from "./reducers/users";
import comments from "./reducers/comments";
import { getUsers, getComments } from "./Actions";
import { Provider } from "react-redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";

const reducers = combineReducers({
  users,
  comments,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(createPromise(), thunk));
const store = createStore(reducers, enhancer);


store.dispatch(getUsers());
store.dispatch(getComments());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="shadow">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
