import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import forgotPassword from './pages/ForgotPassword';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Redirect from="/forgotPass/:token" to="/auth/forgotPass/:token" /> */}
      {/* <Redirect from="/" to="/forgotPass" /> */}
      <Route path="/" component={forgotPassword} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
