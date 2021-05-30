import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
const user = useSelector(state => state.user)
let location = useLocation();
  return (
    <Route
      {...rest}
      render ={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
