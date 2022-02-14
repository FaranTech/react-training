import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { signupActions } from "../../store/signup-slice";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  // const isLoggedIn = useSelector((state) => {
  //   //   console.log(state);
  //   return state.auth.isLoggedIn;
  // });

  const [loginSwitch, setLoginSwitch] = useState(false);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setLoginSwitch((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(loginSwitch);
    const enteredInputEmail = inputEmailRef.current.value;
    const enteredInputPassword = inputPasswordRef.current.value;
    if (loginSwitch) {
      dispatch(
        authActions.login({
          email: enteredInputEmail,
          passwd: enteredInputPassword,
        })
      );
    } else {
      dispatch(
        signupActions.signup({
          email: enteredInputEmail,
          passwd: enteredInputPassword,
        })
      );
      dispatch(
        authActions.loginCreator({
          email: enteredInputEmail,
          passwd: enteredInputPassword,
        })
      );
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{loginSwitch ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={inputEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={inputPasswordRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{loginSwitch ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {loginSwitch ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
