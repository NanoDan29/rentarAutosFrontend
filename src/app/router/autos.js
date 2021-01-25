import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2, UsuarioDatos } from '../components/autos';
import { NotFound } from '../components/mistakes';
import NavAutos from '../components/ui/navAutos'


const AutosRouter = () => {

    return (

        <Fragment>
            <NavAutos />
            <Switch>

                <Route
                    path="/autos/page1"
                    exact={true}
                    component={Page1}
                />
                <Route
                    path="/autos/perfilUsuario"
                    exact={true}
                    component={UsuarioDatos}
                />
                <Route
                    path="/autos/page2"
                    exact={true}
                    component={Page2}
                />


                <Route
                    path="/autos/notfound"
                    exact={true}
                    component={NotFound}
                />


                <Redirect to="notfound" />
            </Switch>
        </Fragment>
    )
}

export default AutosRouter;
