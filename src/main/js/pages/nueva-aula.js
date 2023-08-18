const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevaAulaPage = () => {

    let { id } = useParams();

    const [carreras, setCarreras] = useState([])
    const [cursos, setCursos] = useState([])

    const [turno, setTurno] = useState('')
    const [idCarrera, setIdCarrera] = useState('')
    const [idCurso, setIdCurso] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/sedes',
            entity: {
                carrera: 'http://localhost:8080/api/carreras/'+idCarrera,
                curso: 'http://localhost:8080/api/cursos/'+idCurso,
                turno: turno},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/carreras'
        }).done(response=>{
            setCarreras(response.entity._embedded.carreras)
        })
        client({
            method: 'GET',
            path: '/api/cursos'
        }).done(response=>{
            setCursos(response.entity._embedded.cursos)
        })

    },[])

    return (
        <>
            <h1>Nueva Sede</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='carrera'>Carrera </label>
                <select name="carrera" id="carrera" onChange={(e)=>{setIdCarrera(e.target.value)}}>
                    {carreras.map(carrera => {	
                        const value = carrera._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{carrera.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Curso </label>
                <select name="curso" id="curso" onChange={(e)=>{setIdCurso(e.target.value)}}>
                    {cursos.map(curso => {	
                        const value = curso._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({curso.nombre})</option>
                        )
                    })}
                </select><br />
                <label>Turno</label> <br />
                <input type="text" id='turno' name='turno' onChange={e=>setTurno(e.target.value)} /> <br />

                <input type="submit" value="Nueva Aula" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaAulaPage;