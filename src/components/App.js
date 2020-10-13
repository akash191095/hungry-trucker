import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { useAuth } from "../contexts/auth";
import { useUser } from "../contexts/user-context";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Providers({ children }) {
  return (
    <Suspense
      fallback={
        <Spinner className="sweet-loading">
          <ClipLoader size={150} color="black" loading />
        </Spinner>
      }
    >
      <Router>
        <Switch>{children}</Switch>
      </Router>
    </Suspense>
  );
}

function AuthenticatedApp() {
  return (
    <Providers>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route to="/login">
        <Redirect to="/" />
      </Route>
    </Providers>
  );
}

function UnauthenticatedApp() {
  return (
    <Providers>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/*">
        <Redirect to="/login" />
      </Route>
    </Providers>
  );
}

function App() {
  const user = useUser();
  const { login } = useAuth();

  useEffect(() => {
    login();
  }, [login]);

  return user?.email ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
