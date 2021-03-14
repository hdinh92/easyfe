import React from "react";
import { Route, Redirect } from "react-router-dom";

const CommonRoute = ({ Component, role, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default CommonRoute;
