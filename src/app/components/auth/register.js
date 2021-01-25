import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ClienteAxios from '../../../config/axios'
import Swal from 'sweetalert2'

import {
    facebook,
    twitter,
    linkedin, google
} from '../../img'

const Register = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    // Leer datos formulario
    const actualizarState = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });

    }
    const crearUsuario = e => {
        e.preventDefault()
        let icon = 'success'
        let html = '<p>Usuario creado con exito</p>'
        let title='Correcto'

        ClienteAxios.post('/usuario', usuario)
            .then(respuesta => {
               // console.log(respuesta)
                alerta(icon,title ,html)
            })
            .catch(error => {
                html = '<p>Posiblemente el correo ya este en uso</p>'
                icon = 'error'
                title='Oops...'
                if (usuario.nombre === "" || usuario.email === "" || usuario.password === "") {
                    html = ' <p>Llene todos los campos!</p> '
                }
                alerta(icon,title, html)
            })
    }

    const alerta = (icon,title, html) => {
        Swal.fire({
            icon: icon,
            title: title,
            html: html,
            // footer: '<a href>Why do I have this issue?</a>'
        })
    }


    return (
        <form className="sign-up-form" onSubmit={crearUsuario}>
            <h2 className="title">Ingresa los Datos</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nombre" name="nombre" onChange={actualizarState} />
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" onChange={actualizarState} />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" name="password" onChange={actualizarState} />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Repita su contraseña" />
            </div>
            <input type="submit" className="btn" value="Resgistrarse" />
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
    )
}

export default Register;