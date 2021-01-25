import React from 'react';
import { Route,Redirect } from 'react-router-dom'

const PrivateRoute = ({auntenticar,Component,...rest}) => {

    return (
        <Route
            {...rest}
            render={() => auntenticar ? Component() : <Redirect to="/auth/login" />}
            
        />
    );
}

export default PrivateRoute;