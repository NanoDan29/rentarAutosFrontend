import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { authReducer,usuarioReducer } from '../reducers'
import thunk from 'redux-thunk'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Reducers = combineReducers({
    auth: authReducer,
    usuario:usuarioReducer
})

const Store = createStore(
    Reducers,
    composeEnhancers(applyMiddleware(thunk))
)



export default Store 