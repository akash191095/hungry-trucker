import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useUser } from "../contexts/user-context";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RouteProviders({ children }) {
  return (
    <Router>
      <Switch>{children}</Switch>
    </Router>
  );
}

function AuthenticatedApp() {
  return (
    <RouteProviders>
      <Route path="/" exact>
        'Hello from Home'
      </Route>
      <Route to="/login">
        <Redirect to="/" />
      </Route>
    </RouteProviders>
  );
}

function UnauthenticatedApp() {
  return (
    <RouteProviders>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/*">
        <Redirect to="/login" />
      </Route>
    </RouteProviders>
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
