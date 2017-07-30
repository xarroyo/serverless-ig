<template lang="html">
   <md-card class="item-card" md-with-hover>
    <md-card-media><img :src="image" ></md-card-media> 
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

<style lang="scss">

.item-card {
  // margin: 1em;
  width: 100%;

  img {
    max-height: 350px;
  };
}
</style>
