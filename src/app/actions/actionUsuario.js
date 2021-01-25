import types from '../types'

export const getData = (usuario) => {
    return (callback)=>{
        callback(actionGetUsuario(usuario))
    }
}

export const actionGetUsuario = (usuario) => {
    const { getUsuario } = types

    return {
        type:getUsuario,
        payload:{...usuario}

    }
}

export const actionDelUsuario=()=>{
    const {delUsuario}=types

    return {
        type:delUsuario
    }
}