import * as React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../../pages/notFound/NotFoundComponent";
import Login from "../../pages/login/LoginComponent";
import SignUp from "../../pages/signUp/signUpComponent";
import Home from "../../pages/home/HomeComponent";
import About from "../../pages/about/AboutComponent";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/errorPage/ErrorPageComponent";

import './appRoute.scss';

const AppRoute: React.FC = () => {
  return (
    <div className="app-route-component">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/error" component={ErrorPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRoute;
