<template>
  <div class="footernav">
    <ul class="list">
      <router-link to="/home">
        <li><a href="javascript:;"></a></li>
      </router-link>
      <router-link to="/classify">
        <li><a href="javascript:;"></a></li>
      </router-link>
      <router-link to="/shopCar">
        <li><a href="javascript:;"></a></li>
      </router-link>
      <router-link to="/register">
        <li><a href="javascript:;"></a></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      home: Object
    },

    mounted(){
      console.log(this.home);
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 375/16rem;
  .footernav{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 110;
    width: 100%;
    height: 45/@rem;
    background: white;
    .list{
      width: 100%;
      height: 55/@rem;
      a{
        width: 25%;
        height: 55/@rem;
        &:nth-of-type(1){
          li{
            a{background-position: -85/@rem 0;}
          }
          &.active{
            li{
              a{background-position: 0 0; }
            }
          }
        }
        &:nth-of-type(2){
          li{
            a{background-position: -85/@rem -41/@rem;}
          }
          &.active{
            li{
              a{background-position: 0 -41/@rem; }
            }
          }
        }
        &:nth-of-type(3){
          li{
            a{background-position: -85/@rem -82/@rem;}
          }
          &.active{
            li{
              a{background-position: 0 -82/@rem; }
            }
          }
        }
        &:nth-of-type(4){
          li{
            a{background-position: -85/@rem -123/@rem;}
          }
          &.active{
            li{
              a{background-position: 0 -123/@rem; }
            }
          }
        }

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
        }
      }
      /*&>a{
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
            background-position: -85/@rem -123/@rem;
          }
        }
      }*/
    }
  }
</style>

