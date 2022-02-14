import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import { Fragment } from "react";
import { authActions } from "../../store/auth-slice";

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const checker = !!localStorage.getItem("token");
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!checker && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {checker && (
            <li>
              <Link to="/user">Users</Link>
            </li>
          )}
          {/* 
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )} */}
          {checker && (
            <Fragment>
              <li>
                <Link to="/add">Create User</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
