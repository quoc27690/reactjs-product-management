import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import routes from "./routes";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                {route.main}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
