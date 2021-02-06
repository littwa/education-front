import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Layout from "./Layout";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import Contacts from "./views/Contacts/Contacts";
import authOperation from "./redux/auth/authOperation";

function App({ onAuthOperation }) {
  useEffect(onAuthOperation);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={() => <div>Component Home</div>} />
          <Route path="/my-favorite-goods" component={() => <div>My Favorite Goods</div>} />
          <Route path="/cart" component={() => <div>Cart</div>} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default connect(null, { onAuthOperation: authOperation.getCurrentUser })(App);
