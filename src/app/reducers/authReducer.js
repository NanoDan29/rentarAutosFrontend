import types from '../types';

const init = { 
    uid: '',
    username:  '',
    checking: true
}

const authReducer = (state = init, action) => {
    const { login, logout, checking } = types;

    switch (action.type) {
        case login:
            state = { 
                ...state, 
                ...action.payload
            }
            break;
        case logout:
            state = init
            break;
        case checking:
            state = {
                ...state,
                checking: false
            }
            break;
        default:
          
    }
    return state
}

export default authReducer