import React, { useCallback, useMemo, createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
  const [data, setData] = useState({ user: null });
  const [fetching, setFetching] = useState(false);

  const login = useCallback(async (email, password) => {
    try {
      if (email && password) {
        // login user using email and password.
        setFetching(true);
        const { data } = await axios.post("/signin", { email, password });
        setData({ ...data, user: data });
        setFetching(false);
      } else {
        // log user back in without email and password.
        setFetching(true);
        const { data } = await axios.get("/api/signin");
        setData({ ...data, user: data });
        setFetching(false);
      }
    } catch (error) {
      if (error.response) return { error: error.response };
    } finally {
      setFetching(false);
    }
  }, []);

  const signUp = useCallback(async (email, password) => {
    try {
      setFetching(true);
      const { data } = await axios.post("/signup", { email, password });
      setData({ ...data, user: data });
      setFetching(false);
    } catch (error) {
      if (error.response) return { error: error.response };
    } finally {
      setFetching(false);
    }
  }, []);

  const value = useMemo(() => ({ data, login, signUp, fetching }), [
    data,
    login,
    signUp,
    fetching,
  ]);

  return <AuthContext.Provider value={value} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
