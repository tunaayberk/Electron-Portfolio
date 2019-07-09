import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import LandingPage from "views/Landing/LandingPage.jsx";
import WebPortfolio from "views/Landing/WebPortfolio.jsx";
import DesignPortfolio from "views/Landing/DesignPortfolio.jsx";
import Projects from "views/examples/Projects.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/" exact render={props => <LandingPage {...props} />} />
      <Route
        path="/web-portfolio"
        exact
        render={props => <WebPortfolio {...props} />}
      />
      <Route
        path="/design-portfolio"
        exact
        render={props => <DesignPortfolio {...props} />}
      />
      <Route path="/projects" exact render={props => <Projects {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
