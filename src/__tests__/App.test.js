import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import { AuthContext } from "../contexts/auth";
import { UserProvider } from "../contexts/user-context";

const defaultProviderProps = {
  value: {
    login: () => null,
    logout: () => null,
    signup: () => null,
    data: { user: null },
    fetching: false,
  },
};

const customRender = (
  ui,
  { providerProps, ...renderOptions } = { providerProps: {} }
) => {
  return render(
    <AuthContext.Provider {...defaultProviderProps} {...providerProps}>
      <UserProvider>{ui}</UserProvider>
    </AuthContext.Provider>,
    renderOptions
  );
};

test("renders login", async () => {
  const { findByText } = customRender(<App />);
  expect(await findByText(/login/i)).toBeInTheDocument();
});

test("renders register page", async () => {
  const { findByText } = customRender(<App />);
  const signUpLink = await findByText(/register/i);
  expect(signUpLink).toBeInTheDocument();
  userEvent.click(signUpLink);
  const loginLink = await findByText(/go to login/i);
  expect(loginLink).toBeInTheDocument();
});
