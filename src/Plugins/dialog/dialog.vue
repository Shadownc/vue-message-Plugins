<template>
  <div class="dialog" v-if="state">
    <div class="content">
      <p class="dialogtitle">{{title}}</p>
      <p class="message">{{message}}</p>
      <div class="btns">
        <p class="cancel" @click="hidedialog">取消</p>
        <p class="confirm" @click="hidedialog">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      message: '',
      state: false
    }
  },
  methods: {
    hidedialog () {
      this.state = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .dialog
    position:absolute
    width:100%
    height:100%
    background:rgba(0,0,0,.5)
    display:flex
    justify-content:center
    align-items: center
    top:0
    .content
      width:400px
      height:200px
      background:#fff
      border-radius:10px
      overflow: hidden
      .dialogtitle
        height:50px
        line-height:50px
        text-align: center
        background:#d93a55
        color:#fff
      .message
        text-align: center
        height:100px
        line-height:100px
      .btns
        display:flex
        width:300px
        justify-content:space-between
        align-items:center
        margin:0 auto
        .cancel
          width:100px
          height:40px
          line-height:40px
          text-align: center
          border-radius:5px
          color:#333
          border:1px solid #999
        .confirm
          width:100px
          height:40px
          line-height:40px
          text-align: center
          border-radius:5px
          color:#fff
          background:#d93a55
</style>
