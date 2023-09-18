import { useState } from "react";
import "./style.css";

const HomeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="input-x">
      <div className="signin-A">
        <h3 className="title">Sign in</h3>
        <p className="Text">Sign in and start managing your candidates!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Login"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="rememberMeContainer">
            <div className="rememberMe">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <a href="./#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default HomeLogin;