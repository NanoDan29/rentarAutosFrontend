import React, { Fragment } from 'react';
import "../../styles/components/autos/page1.css"
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Page1 = () => {


    const usuario = useSelector((info) => info.usuario)

    // const cerrarModal=()=>{
    //     const modal=document.querySelector('.modal')
    //     modal.classList.remove('is-active')
    // }


    return (
        <Fragment>

            <section className="hero img is-fullheight">
                <div className="hero-body">
                    <div className="container ">
                        <h1 className="title has-text-white ">
                            Renta tus Autos</h1>
                        <h2 className="subtitle has-text-white ">
                            Descubre todos nuestro Autos</h2>
                    </div>
                </div>
            </section>

            <div className={!usuario.estado ? "modal is-active" : "modal"} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Atencion</p>
                    
                    </header>
                    <section className="modal-card-body">
                        <section className="modal-card-body">
                            <div className="content">
                                <h1>Hola querido Usuario</h1>
                                <p>Antes que nada gracias por registrarte en nuestro sitio.</p>
                                <h2>Pasos Antes de Continuar</h2>
                                <p>Nos gustaria que termines de <strong>registrarte </strong>
                                 en nuestro sitio.
                                 </p>
                                <h3>Datos que necesarios</h3>
                                <ul>
                                    <li>Cedula.</li>
                                    <li>Fecha de Nacimiento(Deber tener +20 para alquilar un vehiculo).</li>
                                    <li>Carnet de Conducir</li>

                                </ul>

                            </div>
                        </section>
                    </section>
                    <footer className="modal-card-foot">
                        <Link to="/autos/perfilUsuario" className="button is-success">Ir a perfil de Usuario</Link>
                    </footer>
                </div>
            </div>

        </Fragment>

    )
}

export default Page1;