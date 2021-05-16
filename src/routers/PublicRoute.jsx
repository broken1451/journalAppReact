import React, { useContext } from "react";

import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PublicRoute = ({ isAutenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAutenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
PublicRoute.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
