<template>
	<b-button :variant="variant" v-bind="$attrs">
		<slot/>
	</b-button>
</template>

<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'outline-primary'
		}
	}
};
</script>
