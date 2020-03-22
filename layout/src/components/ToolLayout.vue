<template>
	<el-layout>

		<template v-slot:header>
			<el-header
				class="ElLayout__header"
				:title="title"
				:subtitle="subtitle">
				<template v-slot:left>
					<b-link class="ElHeader__branding" href="https://holistic-toolbox.com">
						<h2
							class="ElHeader__branding__text"
							v-text="'Holistic Toolbox'"/>
					</b-link>
					<lottie-player :src="floatingNinjaAnimation" :options="animationOptions"/>
				</template>
			</el-header>
		</template>

		<slot/>

	</el-layout>
</template>
<script>
import { ElHeader, ElLayout } from '@holistic-web/el-layout';
import { LottiePlayer } from 'lottie-player-vue';
import floatingNinjaAnimation from '../assets/animations/floating-ninja.json';

export default {
	components: {
		ElHeader,
		ElLayout,
		LottiePlayer
	},
	props: {
		title: { type: String },
		subtitle: { type: String },
		baseUrl: { type: String, default: '/' }
	},
	data() {
		return {
			floatingNinjaAnimation,
			animationOptions: {
				autoplay: true,
				loop: true,
				width: '55px'
			}
		};
	}
};
</script>
