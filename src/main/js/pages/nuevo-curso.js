const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoCursoPage = () => {

    const [nombre, setNombre] = useState('')
    const [creditos, setCreditos] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/cursos',
            entity: {nombre: nombre, creditos: creditos},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Curso</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={eNombre=>setNombre(eNombre.target.value)} /> <br />
            <label>Creditos</label> <br />
            <input type="number" id='creditos' name='creditos' onChange={eCreditos=>setCreditos(eCreditos.target.value)} /> <br />
            <input type="submit" value="Nuevo Curso" /> <br />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoCursoPage;