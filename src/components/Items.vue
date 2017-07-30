<template lang="html">
  <section class="dashboard"> 
     <item v-for="item in items"
      :title="item.name"
      :image="item.image"
      :hashtags="item.hashtags">
    </item> 
  </section> 
</template>

<script>
import item from './Item'
var json_data = require("../assets/data.json");

export default {
  data: () => {
    return {
      items: json_data.items,
    }
  },
  components: {
    'item': item
  }
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
