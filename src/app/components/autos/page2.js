import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clienteAxios from '../../../config/axios'
import autoimagen from '../../img/auto.jpg'
import Swal from 'sweetalert2'
import html2pdf from 'html2pdf.js'

const Page2 = () => {

    let [autos, guardarAutos] = useState([])
    const usuario = useSelector((info) => info.usuario)
    console.log(usuario)
    let [autoSeleccionado, guardarAutoSeleccionado] = useState({
        _id: "", nombre: "", marca: "", cantidad: "", caracteristicas: ""
    })

    let [alquiler, guardarAlquiler] = useState({})

    useEffect(() => {
        let consultarAPI = async () => {
            await clienteAxios.get('/auto/autodato')
                .then(autos => guardarAutos(autos.data.autos))
                .catch(err => console.log(err))

        }
        consultarAPI()
    }, [])



    let cogerDatos = (auto) => {
        
        let modal = document.querySelector('.modal')
        modal.classList.add("is-active")
        guardarAutoSeleccionado(auto)

        guardarAlquiler({
            id_auto: auto._id,
            correo: usuario.email,
            totalDias: "",
            costoAuto: auto.costoAlquiler
        })
    }

    let cerrarModal = () => {
        let modal = document.querySelector('.modal')
        modal.classList.remove("is-active")

    }

    const actualizarState = e => {
        guardarAlquiler({
            ...alquiler,
            [e.target.name]: e.target.value
        });

    }


    let alquilarAutos = () => {
     
        if (autoSeleccionado.totalDias !== "Seleccione los Dias") {
            let consultarAPI = async () => {
                await clienteAxios.post('/alquiler/auto', alquiler)
                    .then(data => {
                        Swal.fire({
                            icon: 'success',
                            title: 'OK',
                            text: 'Auto alquilado con exito!',
                        })
                        imprimir()
                       
                    })
                    .catch(err =>
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ya no existen autos disponibles!',
                        })
                    )
            }
            consultarAPI()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor seleccione los dias!',
            })
        }

    }

    const imprimir = () => {
        let element = document.querySelector('.modal-card-body');
        console.log(element)
        let opt = {

            filename: `${autoSeleccionado.nombre}-contrato.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }

    const dias = [1, 2, 3, 4, 5, 6, 7]


    return (
        <Fragment>

            <div className="modal is -active" >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Deseas alquilar este Auto?</p>
                        <button className="delete" aria-label="close" onClick={cerrarModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <section className="modal-card-body">
                            <div className="content">
                                <h1>Detalles del alquiler</h1>
                                <p>Nombre: {autoSeleccionado.nombre}</p>
                                <p>Marca: {autoSeleccionado.marca}</p>
                                <p>El costo de alquiler es de: <strong>${autoSeleccionado.costoAlquiler}</strong></p>
                                <h2>Caracteristicas Vehiculo</h2>
                                <p>{autoSeleccionado.caracteristicas}</p>
                                <h3>Seleccione los dias a alquilar:</h3>
                                <select name="totalDias" onChange={actualizarState}>
                                    <option>Seleccione los Dias</option>
                                    {dias.map(dia => (
                                        <option key={dia} value={dia}>{dia}</option>
                                    ))}
                                </select>
                                <h3>Total a pagar:</h3>
                                {<p>${alquiler.totalDias * autoSeleccionado.costoAlquiler}</p>}
                            </div>
                        </section>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={alquilarAutos}>Alquilar auto</button>
                        <button className="button is-danger" onClick={cerrarModal}>Cancelar</button>
                    </footer>
                </div>
            </div>

            <div className="container is-fluid mt-6  imgfondo is-full-width">
                <div className="columns is-multiline">
                    {autos.map(auto => (

                        <div key={auto._id} className="column is-one-third ">
                            <article className="panel is-primary">
                                <p className="panel-heading">{auto.nombre}</p>
                                <img src={autoimagen} alt="imagen auto" />
                                <div className="has-background-light p-3">
                                    <p><strong>Marca:</strong> {auto.marca}</p>
                                    <p><strong>Cantidad Disponibles:</strong> {auto.cantidad}</p>
                                    <p><strong>Costo:</strong>${auto.costoAlquiler}</p>
                                    <p><strong>Caracteristicas:</strong>{auto.caracteristicas}</p>
                                </div>
                                <button
                                    className={(auto.cantidad === 0) ? "button is-danger is-fullwidth" : "button is-link is-fullwidth"}
                                    onClick={(e) => cogerDatos(auto, e)}
                                >
                                    {(auto.cantidad === 0) ? "No Disponible" : "Rentar"}
                                </button>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment >
    )
}

export default Page2;