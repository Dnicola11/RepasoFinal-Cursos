const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');


const HomePage = require('./pages/home');
const VerCursoPage = require('./pages/ver-curso');
const NuevoCursoPage = require('./pages/nuevo-curso');
const NuevaCarreraPage = require('./pages/nueva-carrera');
const VerCarreraPage = require('./pages/ver-carrera');
const NuevaAulaPage = require('./pages/nueva-aula');
const EditarCursoPage = require('./pages/editar-curso');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-curso/:id', element: <VerCursoPage /> },
	{ path: '/nuevo-curso', element: <NuevoCursoPage /> },
	{ path: '/nueva-carrera', element: <NuevaCarreraPage /> },
	{ path: '/ver-carrera/:id', element: <VerCarreraPage /> },
	{ path: '/ver-carrera/:id/nueva-aula', element: <NuevaAulaPage /> },
	{ path: '/nueva-aula', element: <NuevaAulaPage /> },
	{ path: '/editar-curso/:id', element: <EditarCursoPage /> },
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))