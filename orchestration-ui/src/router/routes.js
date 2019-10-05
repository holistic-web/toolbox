import accountRoutes from '../containers/Account';
import lightsRoutes from '../containers/Lights';
import themesRoutes from '../containers/Themes';
import usersRoutes from '../containers/Users';


const routes = [
	...accountRoutes,
	...lightsRoutes,
	...themesRoutes,
	...usersRoutes,
	{
		path: '*',
		redirect: { name: 'lights.control' }
	}
];

export default routes;
