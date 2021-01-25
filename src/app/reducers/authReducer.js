import types from '../types'
const init = { loginState: false }

const authReducer = (state = init, action) => {
    const { login, logout } = types

    switch (action.type) {
        case login:
            state = { ...state, loginState: action.payload.loginState }
            break;
        case logout:
            state = init
            break;
        default:
          
    }
    return state
}

export default authReducer