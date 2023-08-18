const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerCarreraPage = () => {

    let { id } = useParams();
    const [carrera, setCarrera] = useState({});
    const [sedes, setSedes] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/carreras/' + id
        }).done(response=>setCarrera(response.entity))
        client({
            method: 'GET',
            path: '/api/sedes/' + id + '/informacion'
        }).done(response => setSedes(response.entity))
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

            <h2>Información</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Carrera</th>
                        <th>Aula</th>
                    </tr>
                </thead>
                <tbody>

                    {sedes.map(sede=>{
                        return(
                            <tr key={sede.ID}>
                                <td>{sede.CURSO}</td>
                                <td>{sede.CARRERA}</td>
                                <td>{sede.aula}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={'/ver-carrera/${id}/nueva-sede'}>Nueva Sede</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerCarreraPage;