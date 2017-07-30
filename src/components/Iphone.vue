<template>
  <div class="centered">
  <section class="dispositive">
    <section class="display">
      <items></items>
    </section>
    <section class="menu">
        <md-icon class="md-size-2x iphone-button">crop_square</md-icon>
    </section>
  </section>
  </div>     
</template>

<script>
  import Items from './Items'
  export default {
    components: {
      items: Items,
    }
  }
</script>

<style>
.centered {
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 1em;
}
.dispositive {
    border: 1px solid grey;
    border-radius: 10px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em;
    background: black;

}

.display {
  height: 667px;
  width: 375px;
  background: white;
  min-height: 90%;
  overflow: scroll;
}

.display::-webkit-scrollbar,
.display::-moz-scrollbar,
 { 
    display: none; 
}
.menu {
    color: white;
    display: flex;
    justify-content:center;
    flex-direction: row;
    padding-top: 1em;
    
}
.iphone-button {
    border: 1px solid grey;
    border-radius: 30px;
    font-size: 14pt;
    
}
</style>
