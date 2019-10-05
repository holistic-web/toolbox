import List from './List.vue';
import Edit from './Edit.vue';

const routes = [
	{
		name: 'themes.list',
		path: '/themes',
		component: List,
		menuName: 'Themes'
	},
	{
		name: 'themes.create',
		path: '/themes/create',
		component: Edit
	},
	{
		name: 'themes.edit',
		path: '/themes/:id',
		component: Edit
	}
];

export default routes;
