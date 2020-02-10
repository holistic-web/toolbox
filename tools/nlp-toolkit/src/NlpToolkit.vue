<template>
	<div class="NlpToolkit">

		<tool-markdown :markdown="`
Documentation for your new tool and any relevant links go here...
		`"/>


		<tool-taskbar>
			It can be a good idea to add buttons to the taskbar...
		</tool-taskbar>

	</div>
</template>

<script>
export default {

};
</script>


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.NlpToolkit {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>
