<template>
  <div id="app">
    <md-toolbar>

      <md-button class="md-icon-button"><md-icon>menu</md-icon></md-button>

      <h2 class="md-title" style="flex: 1">CAPSiDE - Serverless Workshop 2017</h2>

      <router-link :to="{name: 'home'}"><md-button>twitter</md-button></router-link>

    </md-toolbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/scss/index.scss" lang="scss"></style>
