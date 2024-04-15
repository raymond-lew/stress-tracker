import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./state-provider";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        localStorage.setItem("user", result.user.displayName);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div className="login">
            <div className="login__container">
              <div className="login__text">
                <h1>Sign in to Stress Tracker</h1>
              </div>
              <Button onClick={signIn}>Sign In with Google</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
