import React from "react";
import { Provider } from "react-redux";
import AppRouter from "../routers/AppRouter";
import { store } from "../store/store";

const JournalApp = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default JournalApp;
