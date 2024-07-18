import React from "react";
import Switch from "react-switch";
import Button from "./Button";

class App extends React.Component {
  state = { loginMode: false };

  handleModeChange = (checked) => {
    this.setState((prevState) => ({ loginMode: !prevState.loginMode }));
  };

  handleEmailChange = (event) => {
    console.log(event);
  };

  render() {
    const { loginMode } = this.state;
    const text = loginMode ? "Login into Account" : "Register";
    const greeting = loginMode ? "Welcome back" : "I'm glad you're here";

    return (
      <div className="flex flex-row items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-violet-400">
        <div className="w-80 rounded border-solid border-slate-500 bg-white p-6 sm:w-96">
          <div className="mb-6 flex flex-row justify-center gap-x-2">
            <label className="text-xl">Register</label>
            <Switch
              onChange={this.handleModeChange}
              checked={loginMode}
              offColor="#080"
              checkedIcon={false}
              uncheckedIcon={false}
            />
            <label className="text-xl">Login</label>
          </div>

          <h1 className="mb-6 text-center text-3xl font-bold">{greeting}</h1>

          <form>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
              onChange={this.handleEmailChange}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
            />

            {!loginMode && (
              <>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="password"
                  type="password"
                  className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
                />
              </>
            )}
            <Button
              className=" w-full  border-red-500 hover:bg-red-100"
              onClick={this.handleClick}
            >
              {text}
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
