<template>
  <div>
    <div class="surprise">
      <div class="surprise-tit">
        <div class="f1 logo">
          <img :src="surprise.surprise_icon.image" alt="logo">
        </div>
        <div class="f1 text">距离本场结束</div>
        <div class="f1 time">
          <span class="f1">00</span>
          <span class="f1">:</span>
          <span class="f1">00</span>
          <span class="f1">:</span>
          <span class="f1">00</span>
        </div>
        <div class="f1 more">
          <a href="javascript:;">
            <img :src="surprise.right_image.image" alt="more">
          </a>
        </div>
      </div>
      <div class="surprise-pro">
        <div class="swiper-container" ref="surpriseWrap">
          <ul class="pro-list" :style="widthData">
            <li v-for="(good, index) in goods" :key="index">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="image">
                    <img :src="good.image.image">
                  </div>
                  <div class="price">
                    <span>￥</span>
                    <span>{{good.sale_price}}</span>
                  </div>
                  <p class="cheaper">{{good.little_price}}</p>
                </a>
              </div>
            </li>
            <!--<li>
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="image">
                    <img src="../firstPage/pro-2.jpg" alt="">
                  </div>
                  <div class="price">
                    <span>￥</span>
                    <span>1.5</span>
                  </div>
                  <p class="cheaper">省￥14.22</p>
                </a>
              </div>
            </li>
            <li>
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="image">
                    <img src="../firstPage/pro-3.jpg" alt="">
                  </div>
                  <div class="price">
                    <span>￥</span>
                    <span>1.5</span>
                  </div>
                  <p class="cheaper">省￥14.22</p>
                </a>
              </div>
            </li>
            <li>
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="image">
                    <img src="../firstPage/pro-4.png" alt="">
                  </div>
                  <div class="price">
                    <span>￥</span>
                    <span>1.5</span>
                  </div>
                  <p class="cheaper">省￥14.22</p>
                </a>
              </div>
            </li>
            <li>
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="image">
                    <img src="../firstPage/pro-5.jpg" alt="">
                  </div>
                  <div class="price">
                    <span>￥</span>
                    <span>1.5</span>
                  </div>
                  <p class="cheaper">省￥14.22</p>
                </a>
              </div>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data (){
      return {
        goods: []
      }
    },
    props:{
      surprise: Object
    },
    mounted(){
      setTimeout( () => {
        new BScroll(this.$refs.surpriseWrap,{
          click: true,
          scrollbar: true,
          scrollX: true
        });
      },1);

//      console.log('surprise22222222',this.goods);
    },
    computed: {
      widthData(){
        this.goods = this.surprise.goods;
//        console.log(this.goods.length);
        const num = this.goods.length;
        const width = (98+10)*num;
        return{
          width: (98+10)*num + 'px'
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  @rem: 375/16rem;
  .surprise {
    width: 100%;
    height: 192/@rem;
    .surprise-tit {
      position: relative;
      box-sizing: border-box;
      padding: 10/@rem;
      width: 100%;
      height: 60/@rem;
      .logo {
        width: 85/@rem;
        height: 24/@rem;
        img {
          width: 100%;
          height: 100%;
          /*margin-left: -15/@rem;*/
        }
      }
      .text {
        font-size: 13px;
        margin-top: 1/@rem;
        margin-left: 10/@rem;
      }
      .time {
        width: 83/@rem;
        height: 20/@rem;
        margin-left: 5/@rem;
        span {
          font-size: 12px;
          &:nth-child(odd) {
            display: inline-block;
            width: 20/@rem;
            height: 20/@rem;
            font-size: 13px;
            text-align: center;
            padding-top: 2/@rem;
            border: 1px solid;
          }
          &:nth-child(even) {
            display: inline-block;
            padding-top: 2/@rem;
            width: 3/@rem;
            height: 16/@rem;
            font-weight: 700;
            margin: 0 3/@rem;
          }
        }
      }
      .more {
        width: 135/@rem;
        height: 40/@rem;
        position: absolute;
        top: 2/@rem;
        right: -8/@rem;
        a {
          display: block;
          text-align: right;
          img {
            width: 50%;
            height: 100%;
          }
        }

      }
      .f1 {
        float: left;
      }
    }
    .surprise-pro {
      width: 100%;
      height: 131/@rem;
      .swiper-container {
        height: 131/@rem;
        .pro-list {
          height: 131/@rem;
          /*width: (98/@rem+10/@rem)*10;*/
          li {
            float: left;
            width: 98/@rem;
            height: 131/@rem;
            margin-right: 10/@rem;
            .pro-block {
              width: 84/@rem;
              height: 100%;
              margin: 0 auto;
              a {
                width: 84/@rem;
                display: inline-block;
                height: 131/@rem;
                .image {
                  width: 84/@rem;
                  img {
                    width: 84/@rem;
                    height: 84/@rem;
                  }
                }
                .price {
                  margin-top: 5/@rem;
                  height: 22/@rem;
                  color: red;
                  font-size: 14px;
                  text-align: center;
                  line-height: 1.6;
                }
                .cheaper {
                  line-height: 1.6;
                  text-align: center;
                  font-size: 12px;
                  color: #999;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

