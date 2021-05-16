import React from "react";
import { types } from "../types/types";

export const setErr = (err) => {
  return {
    type: types.uiSetErr,
    payload: err,
  };
};

export const removeErr = () => {
  return {
    type: types.uiRemoveErr,
  };
};

export const startLoading = () => {
  return {
    type: types.uiStartLoading,
  };
};

export const finishLoading = () => {
  return {
    type: types.uiFinishLoading,
  };
};
