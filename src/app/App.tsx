import * as React from "react";

import Header from "./component/header/Header";
import AppRoute from "./component/appRoute/AppRoute";
import "./app.scss";
import { BrowserRouter } from "react-router-dom";

const App: React.FC<any> = ({}) => {
    return (
        <div className="app-component">
          <BrowserRouter>
            <Header />
              <AppRoute />
          </BrowserRouter>
        </div>
      );
};

export default App;
