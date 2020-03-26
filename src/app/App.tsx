import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./component/header/Header";
import AppRoute from "./component/appRoute/AppRoute";
import FooterComponent from "./component/footer/FooterComponent";
import "./app.scss";

const App: React.FC<any> = ({}) => {
  return (
    <div className="app-component">
      <BrowserRouter>
        <Header />
        <AppRoute />
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
