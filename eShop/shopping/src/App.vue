<template>
  <div class="wrap">
    <shopHeader v-if="home.menus" :home="home"></shopHeader>
    <footernav v-if="home.menus" :home="home"></footernav>
  </div>
</template>

<script>

  import footernav from './components/footernav/footernav.vue'
  import home from './components/home/home.vue'
  import header from './components/header/header.vue'
  import axios from 'axios'

export default {
  data (){
    return {
      home: {},
      isShow: false
    }
  },
  mounted(){
    axios.get('/api/home')
      .then((response) => {
        let result = response.data;
//          console.log(response.data);
        if(result.code === 0){
          this.home = result.data;
//          console.log('App中的home：',this.home,result);
            console.log(this.home.menus);
        }
      });
  },
  components: {
    footernav,
    'shopHeader': header,
    home
  },
  methods:{
    moveTo(index,menu){
//      console.log(index,menu.menu_name);
    },
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  /*设计页面 750 则需要用 750/16rem*/
  @rem: 375/16rem;
  html,body{
    height: 100%;
    overflow: hidden;
    .wrap{
      height: 100%;
      overflow: hidden;
      position: relative;
    }
  }

</style>
