import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
//import ProfilePage from "./pages/ProfilePage";
import UpdatePage from "./pages/UpdatePage";
import AddPage from "./pages/AddPage";

import { Fragment } from "react";

function App() {
  //const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoggedIn = useSelector((state) => {
    console.log(state);
    return state.auth.isLoggedIn;
  });
  const checker = !!localStorage.getItem("token");
  //console.log(checker);
  return (
    <Layout>
      <Switch>
        {!checker && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {checker && (
          <Fragment>
            <Route path="/auth">
              <Redirect to="/" />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/user" exact>
              <UserPage />
            </Route>

            <Route path="/user/:userId">
              <UpdatePage />
            </Route>

            {/* <Route path="/profile">
              <ProfilePage />
            </Route> */}

            <Route path="/add">
              <AddPage />
            </Route>
          </Fragment>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
