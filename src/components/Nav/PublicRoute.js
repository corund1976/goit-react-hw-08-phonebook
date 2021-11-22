import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authSelectors } from 'redux/auth';

function PublicRoute({ children, restricted = false, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;

/*
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 */