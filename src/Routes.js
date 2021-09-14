import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import { WithLayoutRoute } from "./routers";
import history from "./utils/history";

function Routes() {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={LandingPageLayout}
          component={LandingPage}
        />
        <WithLayoutRoute
          exact
          path="/about"
          layout={LandingPageLayout}
          component={About}
        />
        <WithLayoutRoute
          exact
          path="/services"
          layout={LandingPageLayout}
          component={Services}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
