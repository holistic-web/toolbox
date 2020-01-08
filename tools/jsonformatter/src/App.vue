<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <AppHeader />
    <Page />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Page from './components/Page.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    Page
  }
}
</script>

<style>

</style>
