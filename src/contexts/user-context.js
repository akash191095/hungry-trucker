import React from "react";
import { createContext } from "react";
import { useAuth } from "./auth";

const UserContext = createContext();

const UserProvider = (props) => (
  <UserContext.Provider value={useAuth().data.user} {...props} />
);
const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
