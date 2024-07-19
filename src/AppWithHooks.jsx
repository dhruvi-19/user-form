import { useState } from "react";
import Switch from "react-switch";
import Button from "./Button";

function AppWithHooks() {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = "";
  const [message, setMessage] = useState("");

  const handleModeChange = () => setLoginMode(!loginMode);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { loginMode, email, password, confirmPassword } = this.state;

    const validEmail = email.length > 0;
    const validPassword = password.length > 0;
    const validConfirmPassword = confirmPassword.length > 0;

    if (loginMode && validEmail && validPassword) {
      setMessage("You are now logged in.");
      return;
    }

    const passwordMatch = password === confirmPassword;

    if (validEmail && validPassword && validConfirmPassword && passwordMatch) {
      setMessage("Thank you for signing up!");
    } else {
      setMessage("Passwords do not match");
    }
  };

  const text = loginMode ? "Login into Account" : "Register";
  const greeting = loginMode ? "Welcome back" : "I'm glad you're here";

  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-violet-400">
      <div className="w-80 rounded border-solid border-slate-500 bg-white p-6 sm:w-96">
        <div className="mb-6 flex flex-row justify-center gap-x-2">
          <label className="text-xl">Register</label>
          <Switch
            onChange={handleModeChange}
            checked={!loginMode}
            offColor="#080"
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <label className="text-xl">Login</label>
        </div>

        <h1 className="mb-6 text-center text-3xl font-bold">{greeting}</h1>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
            onChange={handleEmailChange}
            value={email}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
            onChange={handlePasswordChange}
            value={password}
          />

          {!loginMode && (
            <>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
            </>
          )}
          <Button
            className=" w-full  border-red-500 hover:bg-red-100"
            type="submit"
            onClick={this.handleClick}
          >
            {text}
          </Button>

          {message && <p className="mt-2 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AppWithHooks;
