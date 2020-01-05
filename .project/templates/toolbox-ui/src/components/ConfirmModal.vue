<template>
	<b-modal
		:visible="visible"
		:title="title"
		:header-text-variant="headerTextVariant"
		:header-bg-variant="headerBgVariant"
		:ok-variant="okVariant"
		@ok="$emit('ok')"
		@hidden="$emit('hidden')">
		<span v-text="text"/>
	</b-modal>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		danger: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		headerTextVariant() {
			if (this.danger) return 'light';
			return '';
		},
		headerBgVariant() {
			if (this.danger) return 'danger';
			return '';
		},
		okVariant() {
			if (this.danger) return 'danger';
			return 'info';
		}
	}
};
</script>
