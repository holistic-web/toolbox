import accountRoutes from '../containers/Account';
import lightsRoutes from '../containers/Lights';
import usersRoutes from '../containers/Users';


const routes = [
	...accountRoutes,
	...lightsRoutes,
	...usersRoutes,
	{
		path: '*',
		redirect: { name: 'lights.control' }
	}
];

export default routes;
