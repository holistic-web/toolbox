<template>
	<div class="{{tool-name-uppercase}}">

		<div class="ElWrapper">

			<el-markdown :markdown="`
	Documentation for your new tool and any relevant links go here...
			`"/>

		</div>

		<el-taskbar>
			It can be a good idea to add buttons to the taskbar...
		</el-taskbar>

	</div>
</template>

<script>
import { ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';

export default {
	components: {
		ElMarkdown,
		ElTaskbar
	}
}
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.{{tool-name-uppercase}} {

}
</style>
