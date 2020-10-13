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

test("renders login", async () => {
  const { findByText } = render(withProviders(App));
  const loginButton = await findByText(/login/i);
  expect(loginButton).toBeInTheDocument();
});

test("renders register page", async () => {
  const { findByText } = render(withProviders(App));
  const signUpLink = await findByText(/register/i);
  expect(signUpLink).toBeInTheDocument();
  userEvent.click(signUpLink);
  const loginLink = await findByText(/go to login/i);
  expect(loginLink).toBeInTheDocument();
});
