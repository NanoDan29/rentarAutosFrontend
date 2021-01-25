import React from 'react';
import Routes from './router'
import Store from './store'
import { Provider } from 'react-redux'
import 'bulma/css/bulma.css'

const App = () => <Provider store={Store}>
    <Routes />
</Provider>


export default App;