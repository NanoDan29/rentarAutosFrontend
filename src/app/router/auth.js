import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { Signin_signup } from '../components/auth'



const AuthRouter = () => {
    let { url } = useRouteMatch()
    return (
        <Switch>
            <Route
                path={`${url}/login`}
                exact={true}
                component={Signin_signup}
            />
            <Redirect to={`${url}/login`} />
        </Switch>
    )
}

export default AuthRouter;