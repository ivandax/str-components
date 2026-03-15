import { useState } from "react";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<null | string>(null);

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
        />
      </label>
      <button>Login</button>
      {message && <span>{message}</span>}
    </form>
  );
}
