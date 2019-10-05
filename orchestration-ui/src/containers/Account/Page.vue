<template>
	<default-layout :isLoading="page.isLoading" :isSubmitting="page.isSubmitting">

		<template v-slot:title>
			Account
		</template>

		<template v-slot:actions>
			<b-btn
				variant="outline-info"
				size="sm"
				v-text="'Update Settings'"
				:disabled="page.isSubmitting || page.isLoading"
				@click="onUpdateSettingsClick"/>
			<b-btn
				variant="outline-danger"
				size="sm"
				v-text="'Log Out'"
				@click="logOutUser"/>
		</template>

		<template v-slot:content class="AccountPage">
			<section class="AccountPage__account">
				<div class="AccountPage__account__row">
					<b>Email:</b>
					<span v-text="account.user.email"/>
				</div>

			</section>

			<section class="AccountPage__networks">
				<h3>Networks</h3>

				<span
					v-if="networks.length === 0"
					v-text="'There are no networks to display.'"/>

				<b-table
					v-else
					:items="networks"
					:fields="tableFields">

					<template slot="users" slot-scope="data">
						{{data.item.users.length + 1}}
					</template>

					<template slot="actions" slot-scope="data">
						<b-button
							variant="outline-primary"
							size="sm"
							v-text="'Set Active'"
							:disabled="isSetNetworkActiveDisabled(data.item)"
							@click="onNetworkSelect(data.item)"/>
					</template>

				</b-table>

			</section>

			<settings
				v-if="network"
				v-model="network.settings"/>

		</template>

	</default-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toastService from '../../lib/toastService';
import DefaultLayout from '../../components/DefaultLayout.vue';
import Settings from './components/Settings.vue';

export default {
	components: {
		DefaultLayout,
		Settings
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
			tableFields: [
				'name',
				{ key: 'owner.email', label: 'Owner' },
				'users',
				{ key: 'actions', label: '' }
			],
			networkSettings: null
		};
	},
	computed: {
		...mapGetters({
			account: 'account/account',
			network: 'networks/network',
			networks: 'networks/networks'
		})
	},
	methods: {
		...mapActions({
			fetchNetworks: 'networks/fetchNetworks',
			fetchNetwork: 'networks/fetchNetwork',
			setCurrentNetwork: 'networks/setCurrentNetwork',
			updateNetwork: 'networks/updateNetwork',
			logOutUser: 'account/logOut'
		}),
		async setupPage() {
			this.page.isLoading = true;
			await Promise.all([
				this.fetchNetworks(),
				this.fetchNetwork()
			]);
			this.page.isLoading = false;
		},
		isSetNetworkActiveDisabled(network) {
			if (!this.network) return false;
			return this.network._id === network._id;
		},
		onNetworkSelect(network) {
			this.setCurrentNetwork(network);
			this.setupPage();
		},
		async onUpdateSettingsClick() {
			this.page.isSubmitting = true;
			try {
				await this.updateNetwork({ settings: this.networkSettings });
				this.setupPage();
				toastService.toast('Settings Updated');
			} catch (err) {
				toastService.toast(err);
			}
			this.page.isSubmitting = false;
		}
	},
	created() {
		this.setupPage();
	},
	watch: {
		network: {
			immediate: true,
			handler() {
				if (!this.network) return;
				this.networkSettings = this.network.settings;
			}
		}
	}
};
</script>

<style lang="scss">

.AccountPage {

	&__account {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		width: 100%;

		@media all and (min-width: 767px) {
			width: 50%;
		}

		&__row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}

	&__networks {
		display: flex;
		flex-direction: column;
	}
}
</style>
