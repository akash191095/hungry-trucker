import React from "react";
import { render } from "@testing-library/react";
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
