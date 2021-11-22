import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authSelectors } from 'redux/auth';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;

/*
 * 1. "Приватный Маршрут" должен повторять API Route
 * 2. "Приватный Маршрут" должен рендерить Route
 *   - если маршрут приватный и пользователь залогинен, рендерит компонент
 *   - в противном случае рендерит Redirect на redirectTo
 */
