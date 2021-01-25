import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/actionAuth';
import { useDispatch, useSelector } from 'react-redux'



const NavAutos = () => {

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


    const dispatch = useDispatch()

    const undeClick = () => {
        dispatch(logout())
    }

    const { loginState } = useSelector((info) => info.auth)

    return (


        <Fragment>
            <nav id="navbarMenuHeroA" className="navbar is-black">
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
                        <Link to="/autos/page1" className="navbar-item is-active">Home</Link>
                        <Link to="/autos/page2" className="navbar-item">Autos</Link>
                        <Link to="/autos/perfilUsuario" className="navbar-item">Pefil</Link>
                        <span className="navbar-item">
                            {loginState && <button className="button is-primary" onClick={undeClick}>Salir</button>}
                        </span>
                    </div>
                </div>
            </nav>
        </Fragment>


    )
}

export default NavAutos;