<template>
  <div class="header">
    <div class="title">
      <div class="address">
        <a href="javascrip:;">
          <span>狗狗站</span>
          <span>|</span>
          <span>武汉</span>
          <i></i>
        </a>
      </div>
      <div class="search">
        <a href="javascrip:;">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="search-ico"></span>
        </a>
      </div>
      <a href="javascrip:;" class="rating">
        <img src="./mydope.png" alt="评论">
      </a>
    </div>
    <div class="find_nav" ref="navWrap">
      <ul>
        <router-link v-for="(menu,index) in home.menus" :to="menu.to" :key="index">
          <li>
            <a href="javascrip:;">
            <span class="rela">
              <span :class="{active: isShow}">{{menu.menu_name}}</span>
              <i :class="{on: isShow}"></i>
            </span>
            </a>
          </li>
        </router-link>
      </ul>
    </div>
    <keep-alive>
      <router-view v-if="home.menus" :home="home"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      home: Object
    },
    data (){
      return{
        isShow: true
      }
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll(this.$refs.navWrap,{
          scrollX: true,
          click: true
        })
      })

//      console.log(this.home);

    },
    methods:{
      changeMenu(index){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 375/16rem;
  .header{
    position: relative;
    width: 100%;
    height: 86/@rem;
    z-index: 110;
    background: #fff;
    .title{
      padding: 13/@rem 0;
      height: 41/@rem;
      width: 95%;
      box-sizing: border-box;
      text-align: center;
      display: -webkit-box;
      -webkit-box-align: center;
      margin: 0 auto 5/@rem;
      .address{
        position: relative;
        top: 7/@rem;
        font-size: 14px;
        color: #898989;
        i{
          display: inline-block;
          box-sizing: border-box;
          position: absolute;
          top: 6/@rem;
          right: -11/@rem;
          width: 8/@rem;
          height: 8/@rem;
          border-width: 4/@rem;
          font-size: 0;
          line-height: 0;
          border-style: solid solid dotted;
          border-color: #898989 transparent transparent;
        }
      }
      .search{
        position: relative;
        left: 21/@rem;
        width: 220/@rem;
        height: 25/@rem;
        line-height: 1.6;
        a{
          width: 100%;
          height: 100%;
          display: inline-block;
          input{
            position: absolute;
            left: 1/@rem;
            height: 25/@rem;
            width: 100%;
            color: #bcbcbc;
            border: 0;
            text-indent: 10/@rem;
            border-radius: 4/@rem;
            font-size: 13/@rem;
          }
          span{
            position: absolute;
            width: 11/@rem;
            height: 11/@rem;
            right: 5/@rem;
            top: 5/@rem;
            bottom: 0;
            margin: auto 0;
            background: url("./search.png") no-repeat;
            background-size: 11px auto;
          }
        }
      }
      .rating{
        width: 35/@rem;
        height: 25/@rem;
        margin-left: 30/@rem;
        img{
          width: 25/@rem;
          height: 25/@rem;
        }
      }
    }
    .find_nav{
      width: 100%;
      height: 36/@rem;

      position: absolute;
      z-index: 100;
      background: #ffffff;
      ul{
        position: absolute;
        display: flex;
        white-space: nowrap;
        /*width: 140%;*/
        height: 36/@rem;
        background: white;
        a{
          /*width: 100/7%;*/

          display: inline-block;

          width: 75/@rem;
          height: 36/@rem;
          float: left;
          &.active{
            li{
              a{
                color: #459d36;
                i{
                  position: absolute;
                  bottom: -8/@rem;
                  left: -10%;
                  width: 120%;
                  height: 2/@rem;
                  background: #459d36;
                  transition: .5s background;
                }
              }
            }
          }
          li{
            height: 36/@rem;
            width: 100%;
            a{
              display: inline-block;
              height: 36/@rem;
              width: 100%;
              font-size: 14px;
              text-align: center;
              line-height: 36/@rem;
              .rela{
                position: relative;
                width: 100%;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>
