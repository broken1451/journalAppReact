import React, { useContext } from "react";

import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PrivateRouter = ({ isAutenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAutenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default PrivateRouter;
PrivateRouter.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
