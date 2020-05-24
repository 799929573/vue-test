<template>
  <!--所有内容要用一个根组件包裹起来-->
  <div id="app">
    <router-view></router-view>
    
    <img alt="Vue logo" src="./assets/logo.png">
    <request-data></request-data>
  </div>
</template>

<script>
import RequestData from './components/request-data.vue'

export default {
  name: 'App',
  components: {
    'request-data': RequestData,
  },
  mounted() {
    console.log(this.storage)
    this.storage.set('aaa', {a:1});
    console.log(this.storage.get('aaa'))
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex{ // flex布局
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
}
.flex-1{ // 子元素布局
  flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
}
.flex-align-center{ // 子元素垂直居中
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
}
.flex-pack-center{ // 子元素水平居中
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}
</style>
