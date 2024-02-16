import { Route, Navigate, RouteProps } from 'react-router-dom';

import { Home } from '../../pages';

function PrivateRoute({ component: Component, ...rest }: any) {

  let obj = JSON.parse(localStorage.getItem('user') || '');

  return (
    <Route
      {...rest}
      render={(props: RouteProps) => {
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
