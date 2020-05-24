<template>
  <ul class="list">
    <li v-for="(item, index) in lists" :key="index" @click="jumpDetail(item)">
      <p class="title">{{item.title}}</p>
      <p class="content" v-if="item.text">{{item.text}}</p>
    </li>
  </ul>
</template>
<script>
// import {CodeHtml} from "./../constants/code-html";
// import vueData from '@/assets/mock/vue.json'
export default {
  data() {
    return {
      lists: [],
      type: ''
    }
  },
  methods: {
    jumpDetail(item) {
      this.$router.push({path: '/docs/' + item.parent + '/' + item.code});
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    // this.lists = CodeHtml.filter(item => item.parent === this.type);
  },
}
</script>

<style lang="scss">
.list{
  margin-top: 24px;
  margin-right: 24px;
  li{
    margin-bottom: 24px;
    background-color: #fff;
    padding: 0 20px;
    .title{
      font-size: 16px;
      padding: 10px 0;
      cursor: pointer;
    }
    .content{
      padding: 10px 0;
    }
  }
}
@media screen and (max-width: 767px) {
  .list{
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>