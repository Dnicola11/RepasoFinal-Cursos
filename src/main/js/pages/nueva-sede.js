const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevaSedePage = () => {

    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [distrito, setDistrito] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/sedes',
            entity: {nombre: nombre, direccion: direccion, distrito: distrito},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nueva Sede</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={eNombre=>setNombre(eNombre.target.value)} /> <br />
            <label>Direccion</label> <br />
            <input type="text" id='direccion' name='direccion' onChange={eDireccion=>setDireccion(eDireccion.target.value)} /> <br />
            <label>Distrito</label> <br />
            <input type="text" id='distrito' name='distrito' onChange={eDistrito=>setDistrito(eDistrito.target.value)} /> <br />
            <input type="submit" value="Nueva Sede" /> <br />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaSedePage;