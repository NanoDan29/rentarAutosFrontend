import React from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hook/useForm';
import {
    facebook,
    twitter,
    linkedin, google, user, unlock
} from '../../img';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../actions/actionAuth';
import Loading from '../../components/ui/loading';

const Login = () => {

    const dispatch = useDispatch();


    const [ values,handleInputChange ] = useForm({
        email: 'b@gmail.com',
        password: '123'
    });

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( startLogin(values) );
    }


    return <>
        <form className="sign-in-form" onSubmit={ handleSubmit }>
            <h2 className="title">Logearse</h2>
            <div className="input-field">
                <img src={user} alt="icono usuario" />
                <input type="text" name="email" placeholder="Username" value={ email } onChange={ handleInputChange } />
            </div>
            <div className="input-field">
                <img src={unlock} alt="icono contraseña" />
                <input type="password" name="password" placeholder="Password" value={ password } onChange={ handleInputChange } />
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
            
    </>
    
}

export default Login;