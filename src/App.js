import { useEffect, Suspense, lazy  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Container from 'components/Container';
import Section from 'components/Section';
import { AppBar } from 'components/Nav';
import { PrivateRoute } from 'components/Nav';
import { PublicRoute } from 'components/Nav';
import { authOperations, authSelectors } from 'redux/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsListPage = lazy(() => import('pages/ContactsListPage'));
const ContactFormPage = lazy(() => import('pages/ContactFormPage'));

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
              
              <PublicRoute exact path="/login" redirectTo="/contactslist" restricted>
                <LoginPage />
              </PublicRoute>
              
              <PrivateRoute path="/contactslist" redirectTo="/login">
                <ContactsListPage />
                </PrivateRoute>
                
              <PrivateRoute path="/contactform" redirectTo="/login">
                <ContactFormPage />
              </PrivateRoute>
                  
            </Switch>
              
          </Suspense>
            
        </Section>
      )}
    </Container>
  );
};

export default App;