import React, { Fragment, useState } from 'react';
// import Types from '../../types'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {login as LoginEntrar} from '../../actions/actionAuth'
import {
    facebook,
    twitter,
    linkedin, google, user, unlock
} from '../../img'

const Login = (props) => {


    // const { login } = Types
     const dispatch = useDispatch()

    // const undeClick = () => {
    //     dispatch(
    //         {
    //             type: login,
    //             payload: { loginState: true }
    //         })
    // }



    // Leer datos formulario
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const actualizarState = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });

    }

    

    const iniciarSesion = async (e) => {
        e.preventDefault()
        let { email, password } = usuario
        dispatch(LoginEntrar(email,password))
       
    }


    return (
        <Fragment>
            <form className="sign-in-form" onSubmit={iniciarSesion}>
                <h2 className="title">Logearse</h2>
                <div className="input-field">
                    <img src={user} alt="icono usuario" />
                    <input type="text" name="email" placeholder="Username" onChange={actualizarState} />
                </div>
                <div className="input-field">
                    <img src={unlock} alt="icono contraseña" />
                    <input type="password" name="password" placeholder="Password" onChange={actualizarState} />
                </div>
                <input type="submit" value="Iniciar Sesion" className="btn solid" />
                <p className="social-text">O ingresa con las siguientes plataformas</p>
                <div className="social-media">
                    <Link to="/" className="social-icon">
                        <img src={facebook} alt="icono facebook" />
                    </Link>
                    <Link to="/" className="social-icon">
                        <img src={twitter} alt="icono twitter" />
                    </Link>
                    <Link to="/" className="social-icon">
                        <img src={google} alt="icono google" />
                    </Link>
                    <Link to="/" className="social-icon">
                        <img src={linkedin} alt="icono linkedin" />
                    </Link>
                </div>
            </form>
         

        </Fragment>
    )
}

export default Login;