import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/actionAuth';

import ClienteAxios from '../../../config/axios';
import user from '../../img/user.png'
import Swal from 'sweetalert2'
const UsuarioDatos = () => {

    const usuario = useSelector((info) => info.usuario)

    const [usuarioDatos, guardarUsuario] = useState({
        cedula: '',
        carnetConducir: '',
        fechaNacimiento: '1997-01-01',
        estado: 'true'
    })

    const actualizarState = e => {
        guardarUsuario({
            ...usuarioDatos,
            [e.target.name]: e.target.value
        });

    }

    const dispatch = useDispatch()

    let terminarUsuario = async (e) => {
        e.preventDefault()
        let cedula = validarCedula()
        let edad = getEdad(usuarioDatos.fechaNacimiento)

        if (cedula && edad) {
            await ClienteAxios.put(`/usuario/${usuario._id}`, usuarioDatos)
                .then(usuario => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok...',
                        text: 'Ha sido registrado con exito por favor inicie sesión nuevamente',
                    });
                    dispatch(logout())
                }
                )

                .catch(err => console.log(err))
        }
    }

    let getEdad = (fecha) => {
        let hoy = new Date();
        let cumpleanos = new Date(fecha);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        if (edad <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usted aun no nace no puede alquilar autos',
            })
        } else if (edad < 20 && edad > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Es muy joven para conducir autos',
            })
        } else {
            return true
        }
    }

    let validarCedula = () => {

        var cad = document.querySelector(".cedula").value.trim();
        var total = 0;
        var longitud = cad.length;
        var longcheck = longitud - 1;

        if (cad !== "" && longitud === 10) {
            for (let i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    var aux = cad.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
                }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (Number(cad.charAt(longitud - 1)) === Number(total)) {
                return true
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La cedula es incorrecta!',
                })

            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Recuerda la cedula tiene solo numeros(10 digitos)!',
            })
        }
        return false

    }

    return (

        <Fragment>

            <section className="hero imgfondo is-fullheight">
                <div className="hero-body colums">
                    <form className={usuario.estado ? "is-hidden" : "container column is-one-third pt-4"} onSubmit={terminarUsuario}>
                        <article className="panel">
                            <p className="panel-heading has-background-dark has-text-white">
                                Confirmar Datos</p>
                            <div className="has-background-light p-3">
                                <div className="field">
                                    <label className="label">Cedula:</label>
                                    <p className="control is-expanded">
                                        <input className="input is-success cedula" name="cedula" type="text" placeholder="Incerte su cedula" onChange={actualizarState} />
                                    </p>
                                </div>
                                <div className="field">
                                    <label className="label">Fecha Nacimiento</label>
                                    <div className="control">
                                        <input className="input is-success" type="date" value={usuarioDatos.fechaNacimiento} min="1997-01-01" max={new Date()} name="fechaNacimiento" placeholder="Inserte su fecha de nacimiento" onChange={actualizarState} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Carnet de Conducir</label>
                                    <div className="control" onChange={actualizarState}>
                                        <label className="radio p-3" >
                                            <input type="radio" name="carnetConducir" value="true" />Si</label>
                                        <label className="radio p-3">
                                            <input type="radio" name="carnetConducir" value="false" />No</label>
                                    </div>
                                </div>
                            </div>
                            <button className="button is-link is-fullwidth">Guardar</button>
                        </article>
                    </form>
                    <div className={!usuario.estado ? "is-hidden" : "column is-one-third card"}>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={user} alt="Aqui se encuentra una imagen" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={user} alt="Aqui se encuentra una imagen" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{usuario.nombre}</p>
                                </div>
                            </div>

                            <div className="content">
                                <p className="mb-0">Cedula: {usuario.cedula}</p>
                                <p className="mb-0">Email: {usuario.email}</p>

                                <time dateTime="2016-1-1">Fecha de Nacimeinto: {usuario.fechaNacimiento}</time>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default UsuarioDatos;