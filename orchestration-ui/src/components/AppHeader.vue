<template>
	<header v-if="!isUnauthorizedPage">
		<b-navbar class="AppHeader" toggleable="lg" type="dark" variant="info">

			<div class="AppHeader__leftSection">
				<b-navbar-brand
					class="AppHeader__title"
					href="#"
					v-text="'Home Orchestrator'"/>

				<b-nav class="AppHeader__menu">
					<b-nav-item class="AppHeader__menu__item">

						<router-link
							v-for="item in menuItems"
							:key="item.name"
							class="AppHeader__menu__link"
							:to="{ name: item.name }"
							v-text="item.menuName"/>

					</b-nav-item>
				</b-nav>
			</div>

			<div class="AppHeader__rightSection">
				<pre
					v-if="network"
					class="AppHeader__networkName"
					v-text="network.name"/>
			</div>

		</b-navbar>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import routes from '../router/routes';

export default {
	computed: {
		...mapGetters({
			network: 'networks/network'
		}),
		isUnauthorizedPage() {
			const isUnauthorizedPage = this.$route.name === 'account.unauthorized';
			return isUnauthorizedPage;
		},
		menuItems() {
			const menuItems = routes.filter(route => route.menuName);
			return menuItems;
		}
	},
	methods: {
		...mapActions({
			fetchNetwork: 'networks/fetchNetwork'
		})
	},
	created() {
		this.fetchNetwork();
	}
};
</script>

<style lang="scss">
.AppHeader {

	&.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	&__title {
		min-height: unset;
	}

	&__leftSection {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: center;
			margin-bottom: 0;
		}
	}

	&__rightSection {
		display: flex;
	}

	&__menu {
		margin-right: 2rem;

		.nav-link {
			padding: 0;
		}

		&__link {
			color: #fff;
			padding: 0.2rem 0.5rem;

			@media (min-width: 768px) {
				margin: 0 1rem;
			}

			&:hover {
				text-decoration: none;
				color: #fff;
			}

			&.router-link-active {
				border-bottom: 0.05rem solid white;
				margin-bottom: -0.05rem;
			}

		}

	}

	&__networkName {
		margin-bottom: 0;
	}
}
</style>
