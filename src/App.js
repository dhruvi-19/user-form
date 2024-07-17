import React from "react";
console.log(React);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loginMode: true };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleLoginClick = () => {
    this.setState({ loginMode: true });
  };

  handleSignUpClick = () => {
    this.setState({ loginMode: false });
  };

  render() {
    const { loginMode } = this.state;
    const text = loginMode ? "Login into Account" : "Register";
    const greeting = loginMode ? "Welcome back" : "I'm glad you're here";

    return (
      <div className="flex flex-row items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-violet-400">
        <div className="w-80 rounded border-solid border-slate-500 bg-white p-6 sm:w-96">
          <div className="mb-6 flex flex-row gap-x-2">
            <button
              className="h-10 w-1/2 rounded border-2 border-solid border-blue-500 hover:bg-blue-100"
              onClick={this.handleLoginClick}
            >
              Login
            </button>
            <button
              className="h-10 w-1/2 rounded border-2 border-solid border-green-500 hover:bg-green-100"
              onClick={this.handleSignUpClick}
            >
              Sign up
            </button>
          </div>

          <h1 className="mb-6 text-center text-3xl font-bold">{greeting}</h1>

          <button
            className="h-10 w-full rounded border-2 border-solid border-red-500 hover:bg-red-100"
            onClick={this.handleClick}
          >
            {text}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
