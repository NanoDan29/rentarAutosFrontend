import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, About } from '../components/landing';
import { Nav } from '../components/ui'


const LandingRouter = () => {
    return (
        
        <Fragment>
            <Nav/>
            <Switch>

                <Route
                    path="/home"
                    exact={true}
                    component={Home}
                />

                <Route
                    path="/about"
                    exact={true}
                    component={About}
                />

                <Redirect to="/home" />

            </Switch>
        </Fragment>
    )
}

export default LandingRouter;