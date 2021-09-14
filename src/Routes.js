import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import LandingPageLayout from './layouts/LandingPageLayout'
import LandingPage from './pages/LandingPage'
import { WithLayoutRoute } from './routers'
import history from './utils/history'

function Routes() {
    return (
        <Router history={history}>
            <Switch>
              <WithLayoutRoute 
              exact
              path="/"
              layout={LandingPageLayout}
              component={LandingPage}
              />  
            </Switch>
        </Router>
    )
}

export default Routes
