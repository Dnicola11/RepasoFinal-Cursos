const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect } = require('react');
const client = require('../client');

const VerCarreraPage = () => {

    let { id } = useParams();
    const [carrera, setCarrera] = useState({});
    const [aula, setAulas] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/carreras/' + id
        }).done(response=>setCarrera(response.entity))
        client({
            method: 'GET',
            path: '/api/aulas/' + id + '/informacion'
        }).done(response => setAulas(response.entity))
    }, [])

    return (
        <>
            <h1>Ver Carrera</h1>
            <hr />

            <table border="1">
            <tbody>
                <tr>
                    <th>Nombre</th>
                    <td>{carrera.nombre}</td>
                </tr>
            </tbody>
            </table>
            <hr />

            <h2>Informacion</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Carrera</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>

                    {aula.map(aula=>{
                        return(
                            <tr key={aula.ID}>
                                <td>{aula.CURSO}</td>
                                <td>{aula.CARRERA}</td>
                                <td>{aula.turno}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={'/ver-carrera/${id}/nueva-aula'}>Nueva Aula</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerCarreraPage;