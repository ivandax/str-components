import { useState } from "react";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    setError(null);
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Incomplete fields");
      return;
    }
    console.log("Will attempt to login!");
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
      {error && <span>{error}</span>}
    </form>
  );
}
