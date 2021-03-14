import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ Component, role, currentUser, ...props }) => {
  return (
    <Route
      {...props}
      // eslint-disable-next-line no-shadow
      render={(props) => {
        if (!currentUser) {
          return (
            <Redirect
              to={{ pathname: "/sigin", state: { from: props.location } }}
            />
          );
        }
        if (role && currentUser.user_role !== role) {
          return <Redirect to={{ pathname: "/" }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
