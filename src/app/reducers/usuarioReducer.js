import types from '../types'

const init = {
    cedula: "",
    email: "",
    estado: "",
    nombre: "",
    password: "",
    role: ""
}

const Usuario = (state = init, action) => {
    const { getUsuario, delUsuario } = types

    switch (action.type) {
        case getUsuario:
            state = {
                ...action.payload
            }

            break;

        case delUsuario:
            state = init
            break;
        default:
          

    }
    return state
}

export default Usuario