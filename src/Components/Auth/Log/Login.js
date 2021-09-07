import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../../config/firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault(); //this stop the refresh
    //do th login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , redirect to homepage..
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        //do the signUp logic
        history.push("/");
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" onClick={login}>
            Sign in
          </button>
        </form>
        <p>
          <strong>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </strong>
        </p>
        <button type="submit" onClick={signUp}>
          <strong>Create your Amazon account</strong>
        </button>
      </div>
    </div>
  );
}

export default Login;
