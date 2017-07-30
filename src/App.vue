<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">My Shared Closet</h2>
      <router-link :to="{name: 'home'}"><md-button>My Movies</md-button></router-link>
      <router-link :to="{name: 'iphone'}"><md-button>My Iphone</md-button></router-link>
      <!-- <router-link :to="{name: 'myMovies'}">My Movies</router-link> -->
      <router-link :to="{name: 'items'}"><md-button>My Closet</md-button></router-link>
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
