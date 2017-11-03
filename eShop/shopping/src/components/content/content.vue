<template>
  <div class="content">
    <div class="activity">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!--无缝滑屏-->
    <div class="carouse-wrapper" >
      <img src="./lb-1.jpg" alt="轮播图一">
    </div>
    <div class="bz">
      <img src="./bz.jpg" alt="bz">
    </div>
    <div class="productLists">
      <div class="row">
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
        <div class="item">
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 375/16rem;
  .content{
    width: 100%;
    .activity{
      span{
        float: left;
        display: inline-block;
        width: 33.33333333%;
        height: 50/@rem;
        &:nth-of-type(1){
          background: url("./hd-1.jpg") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-of-type(2){
          background: url("./hd-2.jpg") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-of-type(3){
          background: url("./hd-3.jpg") no-repeat;
          background-size: 100% 100%;
        }

      }
    }
    .carouse-wrapper{
      padding-top: 50/@rem;
      height: 160/@rem;
      img{
        height: 160/@rem;
      }
    }
    .bz{
      height: 288/@rem;
      img{
        height: 288/@rem;
      }
    }
    .productLists{
      .row{
        display: -webkit-box;
        display: flex;
      }
    }
  }
</style>

