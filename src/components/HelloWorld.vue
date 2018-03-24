<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p class="loadingBtn" @click="showloading">showloading</p>
    <p class="loadingBtn" @click="showdialog">showdialog</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
  },
  methods: {
    showloading () {
      this.$loading({
        state: true
      })
      setTimeout(() => {
        this.$loading({
          state: false
        })
        console.log('loading')
      }, 2000)
    },
    showdialog () {
      this.$dialog({
        state: true,
        title: '测试dialog插件',
        message: '测试测试测试。。。哈哈哈。。就是测试一下啦'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loadingBtn{
  width:200px;
  height:60px;
  background:#d93a55;
  line-height: 60px;
  margin: 0 auto;
  color:#fff;
  border-radius: 10px;
  margin-top: 100px;
}
</style>
