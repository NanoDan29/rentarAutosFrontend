import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {

    let flagAccion = true
    const accion = () => {

        let navBurger = document.getElementsByClassName('navbar-burger')[0]
        let navMenu = document.getElementsByClassName('navbar-menu')[0]

        if (flagAccion) {
            navBurger.classList.add('is-active')
            navMenu.classList.add('is-active')
            flagAccion = false
        } else {
            navBurger.classList.remove('is-active')
            navMenu.classList.remove('is-active')
            flagAccion = true
        }
    }

    return (


        <Fragment>
            <nav id="navbarMenuHeroA" className="navbar is-dark">
                <div className="navbar-brand">
                    <Link to="/home" className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                    </Link>
                    <span className="navbar-burger" data-target="navbarMenuHeroA" onClick={accion}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navMenuColordark-example" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/home" className="navbar-item is-active">Home</Link>
                        <Link to="/about" className="navbar-item">Nosotros</Link>
                        <span className="navbar-item">
                            <Link to="/auth/login" className="button is-primary">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span>Login</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </Fragment>


    )
}

export default Nav;