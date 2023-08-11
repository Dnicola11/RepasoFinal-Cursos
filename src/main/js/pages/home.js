const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {cursos: [], carreras:[], sedes:[]};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/cursos'}).done(response => {
			this.setState({cursos: response.entity._embedded.cursos});
		});

        client({method: 'GET', path: '/api/carreras'}).done(response => {
			this.setState({carreras: response.entity._embedded.carreras});
		});

		client({method: 'GET', path: '/api/sedes'}).done(response => {
			this.setState({sedes: response.entity._embedded.sedes});
		});
	}

	render() {
		return (
			<>
                <h1>Semana 12 App (componente: HomePage2)</h1>
				<Titulo entidad="Cursos" emoji="📚"/>
				<CursoList cursos={this.state.cursos}/>
				<Link to="/nuevo-curso">Nuevo Curso</Link>
                <Titulo entidad="Carreras" emoji="💼"/>
				<CarreraList carreras={this.state.carreras}/>
                <Link to="/nueva-carrera">Nueva Carrera</Link>
				<Titulo entidad="Sedes" emoji="🏢"/>
				<SedeList sedes={this.state.sedes}/>
                <Link to="/nueva-sede">Nueva Sede</Link>
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

class SedeList extends React.Component{
	render() {
		const sedes = this.props.sedes.map(sede =>
			<Sede key={sede._links.self.href} sede={sede}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Direccion</th>
						<th>Acciones</th>
					</tr>
					{sedes}
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
					<Link to={"/ver-curso/" + id}>Ver</Link>
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

class Sede extends React.Component{
	render() {
		const id = this.props.sede._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.sede.nombre}</td>
				<td>{this.props.sede.direccion}</td>
				<td>
					<Link to={"/ver-sede/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;