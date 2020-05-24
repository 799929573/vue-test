<template>
  <div class="data">
  <button @click="getData()">请求</button>
  <button @click="getData2()">请求</button>
  </div>
</template>

<script>
// import Axios from 'axios'
export default {
    methods: {
        getData() {
            console.log(this, this.$http)
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.get(api).then(function(res){
                console.log(res)
            },function(err){
                console.log(err)
            })
        },
        getData2() {
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

            // Axios.get(api).then(res => {
            this.$axios.get(api).then(res => {
                console.log(res)
            }). catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>

</style>