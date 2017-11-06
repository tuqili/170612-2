<template>
  <div class="wrap">
    <shopHeader></shopHeader>
    <contentBox></contentBox>
    <footernav></footernav>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footernav from './components/footernav/footernav.vue'
  import contentBox from './components/content/content.vue'
export default {
  components: {
    'shopHeader': header,
    footernav,
    contentBox
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
      .content{

      }
    }
  }

</style>
