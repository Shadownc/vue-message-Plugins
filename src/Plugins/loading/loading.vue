<template>
  <div class="loading" v-if="state">
    <img src="../image/loading.gif" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .loading
    position:absolute
    width:100%
    height:100%
    background:rgba(0,0,0,.5)
    top:0
    display:flex
    justify-content: center
    align-items: center
</style>
