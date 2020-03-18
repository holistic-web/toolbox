<template>
	<el-layout class="ElLayout">

		<slot name="header">
			<el-header
				class="ElLayout__header"
				:title="title"
				:subtitle="subtitle">
				<template v-slot:left>
					<b-link class="ToolHeader__branding" href="https://holistic-toolbox.com">
						<h2
							class="ToolHeader__branding__text"
							v-text="'Holistic Toolbox'"/>
					</b-link>
					<lottie-player :src="floatingNinjaAnimation" :options="animationOptions"/>
				</template>
			</el-header>
		</slot>

	</el-layout>
</template>
<script>
import { ElHeader, ElLayout } from '@holistic-web/el-layout';

export default {
	components: {
		ElHeader,
		ElLayout
	},
	props: {
		title: { type: String },
		subtitle: { type: String },
		baseUrl: { type: String, default: '/' }
	}
};
</script>
