import { useState } from "react";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<null | string>(null);

  // Note: in React arrow functions are the standard in case we need
  // to access vars from outside the scope
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Incomplete fields");
      return;
    }
    setMessage("Success!");
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h4>Login form</h4>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          aria-label="email-input"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          aria-label="password-input"
        />
      </label>
      <button>Login</button>
      {message && <span>{message}</span>}
    </form>
  );
}
