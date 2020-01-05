<template>
	<b-modal
		:visible="visible"
		:title="title"
		ok-variant="outline-info"
		:ok-title="okTitle"
		:ok-disabled="isSubmitDisabled"
		@ok="onSubmit"
		@hidden="$emit('hidden')">

			<span v-if="isSubmitting" v-text="'Submitting...'"/>

			<template v-if="!isSubmitting">

				<b-form-group
					label="Email"
					label-for="NewUserModal__email">
					<b-form-input
						id="NewUserModal__email"
						v-model="email"
						:disabled="!create"
						trim/>
				</b-form-group>

				<b-form-group
					label="Role"
					label-for="NewUserModal__role">
					<b-form-select
						id="NewUserModal__role"
						v-model="role"
						:options="roleOptions"/>
				</b-form-group>

			</template>

	</b-modal>
</template>

<script>
import { mapActions } from 'vuex';
import toastService from '../../../lib/toastService';

export default {
	props: {
		visible: {
			required: true,
			type: Boolean
		},
		user: {
			type: Object
		},
		create: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isSubmitting: false,
			email: null,
			role: 'member',
			roleOptions: ['member', 'admin']
		};
	},
	computed: {
		title() {
			if (this.create) return 'New User';
			return 'Edit User';
		},
		okTitle() {
			if (this.create) return 'Add';
			return 'Update';
		},
		isSubmitDisabled() {
			return this.isSubmitting
				|| !this.email
				|| !this.role;
		}
	},
	methods: {
		...mapActions({
			createUser: 'users/createUser',
			updateUserRole: 'users/updateUserRole'
		}),
		async onSubmit(event) {
			event.preventDefault();
			this.isSubmitting = true;
			try {
				if (this.create) {
					await this.createUser({
						email: this.email,
						role: this.role
					});
					toastService.toast('User added');
				} else {
					await this.updateUserRole({
						userId: this.user._id,
						role: this.role
					});
					toastService.toast('User updated');
				}
				this.$emit('submitted');
				this.$emit('hidden');
			} catch (err) {
				if (this.create) {
					toastService.toast(`Error adding user: ${err}`);
				} else {
					toastService.toast(`Error updating user: ${err}`);
				}
			}
			this.isSubmitting = false;
		}
	},
	watch: {
		user() {
			if (!this.user) return;
			this.email = this.user.email;
			this.role = this.user.role;
		}
	}
};
</script>
