const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevaCarreraPage = () => {

    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/carreras',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nueva Carrera</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={eNombre=>setNombre(eNombre.target.value)} /> <br />
            <input type="submit" value="Nueva Carrera" /> <br />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaCarreraPage;