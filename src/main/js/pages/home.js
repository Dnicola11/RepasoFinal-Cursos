const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {cursos: [], carreras:[]};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/cursos'}).done(response => {
			this.setState({cursos: response.entity._embedded.cursos});
		});

        client({method: 'GET', path: '/api/carreras'}).done(response => {
			this.setState({carreras: response.entity._embedded.carreras});
		});
	}

	render() {
		return (
			<>
                <h1>Semana 14 App </h1>
				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
					<Titulo entidad="Cursos" emoji="📚"/>
					<CursoList cursos={this.state.cursos}/>
					<Link to="/nuevo-curso">Nuevo Curso</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
                	<Titulo entidad="Carreras" emoji="💼"/>
					<CarreraList carreras={this.state.carreras}/>
                	<Link to="/nueva-carrera">Nueva Carrera</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class CursoList extends React.Component{
	render() {
		const cursos = this.props.cursos.map(curso =>
			<Curso key={curso._links.self.href} curso={curso}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Creditos</th>
						<th>Acciones</th>
					</tr>
					{cursos}
				</tbody>
			</table>
		)
	}
}

class CarreraList extends React.Component{
	render() {
		const carreras = this.props.carreras.map(carrera =>
			<Carrera key={carrera._links.self.href} carrera={carrera}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{carreras}
				</tbody>
			</table>
		)
	}
}

class Curso extends React.Component{
	render() {
        const id = this.props.curso._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.curso.nombre}</td>
				<td>{this.props.curso.creditos}</td>
				<td>
					<Link to={"/ver-curso/" + id}>Ver</Link> |
					<Link to={"/editar-curso/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Carrera extends React.Component{
	render() {
		const id = this.props.carrera._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.carrera.nombre}</td>
				<td>
					<Link to={"/ver-carrera/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;