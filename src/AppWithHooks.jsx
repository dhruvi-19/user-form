import { useState } from "react";

function AppWithHooks() {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = "";
  const [message, setMessage] = useState("");

  setTimeout(() => {
    setEmail("ernie@sesamestreet.com");
  }, 3000);
  return <div>{email}</div>;
}

export default AppWithHooks;
