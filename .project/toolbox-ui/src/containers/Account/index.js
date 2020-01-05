import Unauthorized from './Unauthorized.vue';
import Page from './Page.vue';

const routes = [
	{
		name: 'account.unauthorized',
		path: '/unauthorized',
		component: Unauthorized
	},
	{
		name: 'account.page',
		path: '/account',
		component: Page,
		menuName: 'Account'
	}
];

export default routes;
