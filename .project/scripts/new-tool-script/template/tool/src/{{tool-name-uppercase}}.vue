<template>
	<div class="{{tool-name-uppercase}}">

		<div class="ToolWrapper">

			<tool-markdown :markdown="`
	Documentation for your new tool and any relevant links go here...
			`"/>

		</div>

		<tool-taskbar>
			It can be a good idea to add buttons to the taskbar...
		</tool-taskbar>

	</div>
</template>

<script>
import { ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';

export default {
	components: {
		ToolMarkdown,
		ToolTaskbar
	}
}
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.{{tool-name-uppercase}} {

}
</style>
