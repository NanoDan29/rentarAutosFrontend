import React,{Fragment} from 'react';
import Login from './login'
import Register from './register'
import '../../styles/components/auth.css'

import {
    log,
    register
} from '../../img'


const Signin_signup = () => {
   
    const sign_up_btn = () => {
        const container = document.querySelector(".contenedor");
        container.classList.add("sign-up-mode")
    }

    const sign_in_btn = () => {
        const container = document.querySelector(".contenedor");
        container.classList.remove("sign-up-mode")
    }


    
    

    return (
        <Fragment>
        <div className="contenedor">
            <div className="forms-container">
                <div className="signin-signup">
                    <Login/>
                    <Register/>
                </div>
            </div>

            <div className="panels-container">
                <div className="panelAuth left-panelAuth">
                    <div className="contenido">
                        <h3>Eres nuevo Aquí?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={sign_up_btn}>
                            Registrate </button>
                    </div>
                    <img src={log} className="image" alt="" />
                </div>
                <div className="panelAuth right-panelAuth">
                    <div className="contenido">
                        <h3>Ya eres uno de nosotros?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={sign_in_btn}>
                            Iniciar Sesion</button>
                    </div>
                    <img src={register} className="image" alt="" />
                </div>
            </div>
        </div>
     

        </Fragment>

    );
}

export default Signin_signup;