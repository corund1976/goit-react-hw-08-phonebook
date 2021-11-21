import { useEffect, Suspense, lazy  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Container from './components/Container';
import Section from './components/Section';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() =>
    dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader type="Rings" color="#00BFFF" height={200} width={200} />
        </div>
      ) : (
        <Section>
          <AppBar />
            
          <Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader type="Rings" color="#00BFFF" height={100} width={100} />
            </div>
          }>

            <Switch>
                  
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
                  
              <PublicRoute exact path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
              
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
                  
            </Switch>
              
          </Suspense>
            
        </Section>
      )}
    </Container>
  );
};

export default App;