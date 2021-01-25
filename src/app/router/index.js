import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './auth';
import LandingRouter from './landing';
import AutosRouter from './autos';
import Private from './private';
import { useSelector } from 'react-redux'
import Public from './public'


const Routes = () => {
    const { loginState } = useSelector((info) => info.auth)

    return (
        <Router>
            <Switch>
                <Public
                    path="/auth"
                    auntenticar={loginState}
                    Component={AuthRouter}

                />

                <Private
                    path="/autos"
                    auntenticar={loginState}
                    Component={AutosRouter}

                />

                <Public
                    path="/"
                    auntenticar={loginState}
                    Component={LandingRouter}

                />
            </Switch>
        </Router>
    )
}


export default Routes;