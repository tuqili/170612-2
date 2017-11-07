<template>
  <div>

    <firstPage v-if="home.menus" :home="home"></firstPage>
  </div>
</template>

<script>
  import axios from 'axios'

  import firstPage from '../firstPage/firstPage.vue'
  export default {
    props: {
      home: Object
    },
    data (){
      return {

      }
    },
    mounted(){
     /* axios.get('/api/home')
        .then((response) => {
          let result = response.data;
//          console.log(response.data);
          if(result.code === 0){
            this.home = result.data;
          console.log('App中的home：',this.home,result);

          }
        });*/
    },
    components: {
      firstPage,

    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>

