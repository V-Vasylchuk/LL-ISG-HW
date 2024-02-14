import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { Home } from '../../pages';

function PrivateRoute({ component: Component, ...rest }: any) {
  // @ts-ignore
  let obj = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      render={() => {
        if (obj) {
          return <Home />;
        } else {
          return <Navigate to='/login' />;
        }
      }}
    />
  );
}

export { PrivateRoute };
