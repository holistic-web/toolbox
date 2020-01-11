<template>
	<div id="app">
		<app-header />
		<page />
		<ad-banner />
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Page from './components/Page.vue'
import AdBanner from './components/AdBanner.vue'

export default {
	name: 'app',
	components: {
		AppHeader,
		Page,
		AdBanner
	}
}
</script>