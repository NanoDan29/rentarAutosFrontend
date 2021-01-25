import types from '../types'
import { actionDelUsuario } from './actionUsuario'
import Swal from 'sweetalert2'

import ClienteAxios from '../../config/axios'
import { getData } from './actionUsuario'

export const logoutSync = () => {
    const { logout } = types
    return { type: logout }

}
export const logout = () => {
    return (callback) => {
        callback(logoutSync())
        callback(actionDelUsuario())
    }
}

export const loginSync = (estado=false) => {
    const { login } = types
    return { type: login, payload: { loginState: estado } }
}

export const login = (email, password) => {
    return async (callback) => {
        try {
            let consulta = await ClienteAxios.get(`/usuario/login?email=${email}&password=${password}`)
            let verificarUsuario = consulta.data.resBcrypt
            if (verificarUsuario) {
                let usuario = consulta.data.usuario
                callback(getData(usuario))
                callback(loginSync(verificarUsuario))
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El Usuario o Contraseña estan mal ingresados revise los campos!',
                  })
            }
          
            

        } catch (error) {
            console.log(error)
        }
    }
}

