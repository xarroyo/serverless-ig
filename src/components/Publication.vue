<template lang="html">
   <md-card>

    <md-card-media>
      <img :src="`https://image.tmdb.org/t/p/w500/${ image }`" alt="">
    </md-card-media>

    <md-card-header>
      <div class="md-title">{{ title }}</div> 
      <md-chip v-for="hashtag in hashtags">{{ hashtag }}</md-chip>
    </md-card-header>

    <md-card-actions>
      <md-button>Share</md-button>
      <md-button>Like!</md-button>
    </md-card-actions>
    
  </md-card> 
</template>

<script>
export default {
  props: {
    title:    { type: String, default() { return ""; } },
    image:    { type: String, default() { return ""; } },
    hashtags: { type: Array,  default() { return ""; } },
  }
}
</script>

<style lang="scss"></style>
