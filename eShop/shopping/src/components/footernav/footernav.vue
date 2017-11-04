<template>
  <div class="footernav">
    <ul class="list">
      <li><a href="javascript:;"></a></li>
      <li><a href="javascript:;"></a></li>
      <li><a href="javascript:;"></a></li>
      <li><a href="javascript:;"></a></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 375/16rem;
  .footernav{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 103;
    width: 100%;
    height: 45/@rem;
    background: white;
    .list{
      width: 100%;
      height: 55/@rem;
      li{
        float: left;
        width: 25%;
        height: 55/@rem;
        text-align: center;
        a{
          position: relative;
          bottom: 0;
          display: inline-block;
          width: 42/@rem;
          height: 40/@rem;
          background: url("./img.png") no-repeat;
          background-size: 234/@rem 163/@rem;
          margin-top: 3/@rem;
        }
        &:nth-of-type(1){
          a{background-position: 0 0;}
        }
        &:nth-of-type(2){
          a{background-position: -85/@rem -41/@rem;}
        }
        &:nth-of-type(3){
          a{background-position: -85/@rem -82/@rem;}
        }
        &:nth-of-type(4){
          a{background-position: -85/@rem -123/@rem;}
        }
      }
    }
  }
</style>

