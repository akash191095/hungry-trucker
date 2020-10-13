import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import AppProviders from "../components/AppProviders";

function withProviders(Component) {
  return (
    <AppProviders>
      <Component />
    </AppProviders>
  );
}

test("renders login", () => {
  const { getByText } = render(withProviders(App));
  const loginButton = getByText(/login/i);
  expect(loginButton).toBeInTheDocument();
});

test("renders register page", () => {
  const { getByText } = render(withProviders(App));
  const signUpLink = getByText(/register/i);
  expect(signUpLink).toBeInTheDocument();
  userEvent.click(signUpLink);
  const loginLink = getByText(/go to login/i);
  expect(loginLink).toBeInTheDocument();
});
