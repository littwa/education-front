import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={() => <div>Component Home</div>} />
          <Route path="/my-favorite-goods" component={() => <div>My Favorite Goods</div>} />
          <Route path="/cart" component={() => <div>Cart</div>} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
