import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import forgotPassword from './pages/ForgotPassword';
import InitialPage from './pages/First';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/forgotPass/:token" component={forgotPassword} />
      <Route path="/" component={InitialPage} />
    </Switch>
    <ToastContainer position="bottom-right" />
  </Router>,
  document.getElementById("root")
);
