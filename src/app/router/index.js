import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './auth';
import LandingRouter from './landing';
import AutosRouter from './autos';
import Private from './private';
import { useDispatch, useSelector } from 'react-redux'
import Public from './public'
import { startChecking } from '../actions/actionAuth';
import Loading from '../components/ui/loading';


const Routes = () => {

    const dispatch = useDispatch();
    const { uid, checking } = useSelector(info => info.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])
    
    const auth = !!uid;    

    if( checking ){
        return <Loading/>
    }

    return <Router>
        <Switch>
            <Public
                path="/auth"
                auntenticar={auth}
                Component={AuthRouter}

            />

            <Private
                path="/autos"
                auntenticar={auth}
                Component={AutosRouter}

            />

            <Public
                path="/"
                auntenticar={auth}
                Component={LandingRouter}

            />
        </Switch>
    </Router>
}


export default Routes;