const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerSedePage = () => {

    let { id } = useParams();
    const [sede, setSede] = useState({});

    client({
        method: 'GET',
        path: '/api/sedes/' + id
    }).done(response=>setSede(response.entity))


    return (
        <>
            <h1>Ver Sede</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{sede.nombre}</td>
                </tr>
                <tr>
                    <th>Direccion</th>
                    <td>{sede.direccion}</td>
                </tr>
                <tr>
                    <th>Distrito</th>
                    <td>{sede.distrito}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerSedePage;