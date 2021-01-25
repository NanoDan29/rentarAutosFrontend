import React from 'react';
import { Route,Redirect } from 'react-router-dom'

const PublicRoute = ({auntenticar,Component,...rest}) => {

    return (
        <Route
            {...rest}
            component={() => auntenticar ? <Redirect to="/autos/page1" /> : Component()}
            
        />
    );
}

export default PublicRoute;