<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="content markdown-body editormd-preview-container" v-html="detail.content"></div>
  </div>
</template>

<script>
// import {CodeHtml} from "./../constants/code-html";
// import "./../assets/editor.md/css/editormd.css";
export default {
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    // this.detail = CodeHtml.find(item => item.code === this.$route.params.name);
  }
}
</script>

<style lang="scss">
.detail{    
  margin: 24px 24px 24px 0;
  background-color: #fff;
  .title{
    font-size: 18px;
    padding: 10px 0;
    text-align: center;
  }
  .content{
    
  }
}

@media screen and (max-width: 767px) {
  .detail{
    margin-right: 0;
    width: 100vw;
  }
}
</style>