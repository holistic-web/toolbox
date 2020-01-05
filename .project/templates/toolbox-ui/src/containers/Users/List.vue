<template>
	<default-layout :isLoading="page.isLoading" :isSubmitting="page.isSubmitting">

		<template v-slot:title>
			Users
		</template>

		<template v-slot:actions>
			<b-button
				variant="info"
				v-text="'Refresh'"
				@click="fetch"/>

			<b-btn
				v-if="isAdmin"
				variant="primary"
				v-text="'New User'"
				:disabled="page.isSubmitting"
				@click="openNewUserModal"/>
		</template>

		<template v-slot:content>

			<b-table
				:items="users"
				:fields="fields"
				striped>

				<template slot="actions" slot-scope="data">

					<div class="Table__actions">

						<b-btn
							class="Table__actions__item"
							variant="danger"
							v-text="'Delete'"
							@click="onDeleteUserClick(data.item)"/>

						<b-btn
							class="Table__actions__item"
							variant="info"
							v-text="'Edit'"
							@click="onEditUserClick(data.item)"/>

					</div>

				</template>

			</b-table>

			<confirm-modal
				:visible="page.isConfirmDeleteModalVisible"
				title="Remove User"
				text="Are you sure you want to remove this user?"
				:danger="true"
				@ok="onConfirmDeleteClick"
				@hidden="closeConfirmDeleteModal"/>

			<edit-user-modal
				:visible="page.isEditUserModalVisible"
				:user="page.lastClickedUser"
				@submitted="fetch"
				@hidden="closeEditUserModal"/>

			<edit-user-modal
				:visible="page.isNewUserModalVisible"
				:create="true"
				@submitted="fetch"
				@hidden="closeNewUserModal"/>

		</template>

	</default-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toastService from '../../lib/toastService';
import DefaultLayout from '../../components/DefaultLayout.vue';
import ConfirmModal from '../../components/ConfirmModal.vue';
import EditUserModal from './components/EditUserModal.vue';

export default {
	components: {
		DefaultLayout,
		ConfirmModal,
		EditUserModal
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false,
				isConfirmDeleteModalVisible: false,
				isNewUserModalVisible: false,
				isEditUserModalVisible: false,
				lastClickedUser: null
			},
			newUserUid: null,
			baseFields: [
				'email',
				'role'
			]
		};
	},
	computed: {
		...mapGetters({
			account: 'account/account',
			users: 'users/users',
			user: 'users/user'
		}),
		isAdmin() {
			const { email } = this.account.user;
			const user = this.users.find(u => u.email === email);
			if (!user) return false;
			return ['owner', 'admin'].includes(user.role);
		},
		fields() {
			const fields = [...this.baseFields];
			if (this.isAdmin) fields.push({ key: 'actions', label: '' });
			return fields;
		}
	},
	methods: {
		...mapActions({
			fetchUsers: 'users/fetchUsers',
			deleteUser: 'users/deleteUser'
		}),
		async fetch() {
			this.page.isLoading = true;
			await Promise.all([
				this.fetchUsers()
			]);
			this.page.isLoading = false;
		},
		async onConfirmDeleteClick() {
			this.page.isSubmitting = true;
			try {
				await this.deleteUser(this.page.lastClickedUser.userId);
				toastService.toast('User removed');
				this.fetch();
			} catch (err) {
				toastService.toast(`Error removing user: ${err}`);
			}
			this.closeConfirmDeleteModal();
			this.page.isSubmitting = false;
		},
		onEditUserClick(user) {
			this.page.lastClickedUser = user;
			this.openEditUserModal();
		},
		onDeleteUserClick(user) {
			this.page.lastClickedUser = user;
			this.openConfirmDeleteModal();
		},
		openEditUserModal() {
			this.page.isEditUserModalVisible = true;
		},
		closeEditUserModal() {
			this.page.isEditUserModalVisible = false;
		},
		openNewUserModal() {
			this.page.isNewUserModalVisible = true;
		},
		closeNewUserModal() {
			this.page.isNewUserModalVisible = false;
		},
		openConfirmDeleteModal() {
			this.page.isConfirmDeleteModalVisible = true;
		},
		closeConfirmDeleteModal() {
			this.page.isConfirmDeleteModalVisible = false;
		}

	},
	created() {
		this.fetch();
	}
};
</script>
