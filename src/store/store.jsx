import React from "react";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // para acciones asincronas
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)) // para acciones asincronas
);
