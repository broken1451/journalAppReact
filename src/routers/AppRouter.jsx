import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Journal from "../components/journal/Journal";
import AuthRouter from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import PublicRoute from "../routers/PublicRoute";
import PrivateRouter from "./PrivateRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [check, setcheck] = useState(true);
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setloggedIn(true);
      } else {
        setloggedIn(false);
      }
      setcheck(false);
    });
  }, [dispatch, setcheck, setloggedIn]);

  if (check) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* public */}
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAutenticated={loggedIn}
          />
          {/* private */}
          <PrivateRouter
            exact
            path="/"
            component={Journal}
            isAutenticated={loggedIn}
          />
          {/* <Route exact path="/" component={Journal} /> */}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
