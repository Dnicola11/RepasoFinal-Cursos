const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerCarreraPage = () => {

    let { id } = useParams();
    const [carrera, setCarrera] = useState({});

    client({
        method: 'GET',
        path: '/api/carreras/' + id
    }).done(response=>setCarrera(response.entity))


    return (
        <>
            <h1>Ver Carrera</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{carrera.nombre}</td>
                </tr>
                <tr>
                    <th>Duracion</th>
                    <td>{carrera.duracion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerCarreraPage;