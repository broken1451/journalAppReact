import React from "react";
import { types } from "../types/types";

const initialstate = {
  loading: false,
  msgErr: null,
};

export const uiReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.uiSetErr:
      return {
        ...state,
        msgErr: action.payload,
      };
    case types.uiRemoveErr:
      return {
        ...state,
        msgErr: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
