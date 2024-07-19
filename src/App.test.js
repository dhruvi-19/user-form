import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  describe("When the user is in login mode", () => {
    it("logs user in", () => {
      render(<App />);

      const emailInput = screen.getByRole("textbox", {
        name: /email Address/i,
      });
      userEvent.type(emailInput, "test@email.com");
      const passwordInput = screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, "starwars");
      const submitButton = screen.getByRole("button", {
        name: /login into account/i,
      });
      userEvent.click(submitButton);

      const successMessage = screen.getByText("You are now logged in.");
      expect(successMessage).toBeInTheDocument();
    });
  });

  describe("when the user is in registration mode", () => {
    it("registers account for user and alerts them", () => {
      render(<App />);

      const modeSwitch = screen.getByRole("switch");
      userEvent.click(modeSwitch);

      const emailInput = screen.getByRole("textbox", {
        name: /email address/i,
      });

      userEvent.type(emailInput, "test@gmail.com");
      const passwordInput = screen.getByLabelText("Password");
      userEvent.type(passwordInput, "starwars");
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
      userEvent.type(confirmPasswordInput, "starwars");
      const submitButton = screen.getByRole("button", {
        name: /register/i,
      });
      userEvent.click(submitButton);

      const errorMessage = screen.getByText("Passwords do not match.");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
