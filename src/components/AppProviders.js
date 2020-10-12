import React from "react";
import { AuthProvider } from "../contexts/auth";
import { UserProvider } from "../contexts/user-context";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

export default AppProviders;
