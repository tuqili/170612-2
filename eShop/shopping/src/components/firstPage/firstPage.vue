<template>
  <div class="container" ref="contentWrap">
    <div class="content">
      <div class="activity">
        <img :src="activityImg.image" alt="">
        <!--<span></span>
        <span></span>
        <span></span>-->
      </div>
      <!--无缝滑屏-->
      <div class="carouse-wrapper" >
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for="(item, index) in carouseImg" :key="index">
            <img :src="item.image" alt="轮播图一">
          </mt-swipe-item>
          <!--<mt-swipe-item><img src="./lb-2.jpg" alt="轮播图一"></mt-swipe-item>
          <mt-swipe-item><img src="./lb-3.jpg" alt="轮播图一"></mt-swipe-item>
          <mt-swipe-item><img src="./lb-4.jpg" alt="轮播图一"></mt-swipe-item>-->
        </mt-swipe>
      </div>
      <div class="bz">
        <img :src="bz.image" alt="bz">
      </div>
      <div class="productLists">
        <ul>
          <li class="item" v-for="(item, index) in productLists" :key="index">
            <a href="javascript:;">
              <img :src="item.image" alt="">
            </a>
          </li>
        </ul>
        <!--<div class="row">
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-1.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-2.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-3.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-4.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-5.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-6.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-7.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./pl-8.jpg" alt="">
            </a>
          </div>
        </div>-->
      </div>
      <div class="strategy1">
        <a href="javascript:;">
          <img :src="strategy1.image" alt="攻略">
        </a>
      </div>
      <div class="strategy2">
        <a href="javascript:;">
          <img :src="strategy2.image" alt="攻略">
        </a>
      </div>
      <surprise v-if="surprise.goods" :surprise="surprise"></surprise>
      <div class="pre-sale">
        <a href="javascript:;">
          <img :src="active.image" alt="">
        </a>
      </div>
      <div class="category">
        <div class="products" v-for="(product,index) in products" :key="index">
          <div class="listWrap">
            <div class="pro-tit">
              <a href="javascript:;">
                <img :src="product[0][0].title" alt="">
              </a>
            </div>
            <ul>
              <li v-for="(item,index1) in product[1]" :key="index1">
                <a href="javascript:;">
                  <img :src="item.url" alt="">
                  <p>{{item.name}}</p>
                  <p>
                    <span>￥{{item.price}}</span>
                    <span><del>￥{{item.oldPrice}}</del></span>
                  </p>
                </a>
              </li>
            </ul>
            <!--<ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk5.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk6.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk7.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk8.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>-->
          </div>
        </div>
        <!--<div class="products">
          <div class="listWrap">
            <div class="pro-tit">
              <a href="javascript:;">
                <img src="./bj-title.jpg" alt="">
              </a>
            </div>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk1.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk2.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk3.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk4.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk5.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk6.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk7.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk8.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="products">
          <div class="listWrap">
            <div class="pro-tit">
              <a href="javascript:;">
                <img src="./food-title.png" alt="">
              </a>
            </div>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk1.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk2.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk3.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk4.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk5.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk6.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk7.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk8.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="products">
          <div class="listWrap">
            <div class="pro-tit">
              <a href="javascript:;">
                <img src="./huo-title.png" alt="">
              </a>
            </div>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk1.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk2.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk3.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk4.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk5.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk6.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk7.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk8.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="products">
          <div class="listWrap">
            <div class="pro-tit">
              <a href="javascript:;">
                <img srczl-title.jpg.gif" alt="">
              </a>
            </div>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk1.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk2.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk3.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk4.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./jk5.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk6.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk7.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./jk8.jpg" alt="">
                  <p>渴望幼犬粮11.4kg</p>
                  <p>
                    <span>￥528.0</span>
                    <span><del>￥628.0</del></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>-->
      </div>
      <div class="dapai1">
        <a href="javascript:;">
          <img :src="dapai1.image" alt="">
        </a>
      </div>
      <div class="dapai2">
        <a href="javascript:;">
          <img :src="dapai2.image" alt="">
        </a>
      </div>
      <div class="brand" v-for="(brand,index) in brands" :key="index">
        <div class="brand-lists">
          <div class="item" v-for="(item1,index1) in brand.content1" :key="index1">
            <a href="javascript:;" v-for="(item12,index12) in item1" :key="index12">
              <img :src="item12.image" alt="">
            </a>
            <!--<a href="javascript:;">
              <img src="" alt="">
            </a>-->
          </div>
          <!--<div class="item">
            <a href="javascript:;">
              <img src="./img-brand/hw-2.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-brand/hw-5.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/hw-3.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-brand/hw-6.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/hw-7.jpg" alt="">
            </a>
          </div>-->
        </div>
        <div class="brand-lists1">
          <div class="item1" v-for="(item2,index2) in brand.content2" :key="index2">
            <a href="javascript:;" v-for="(item21,index21) in item2" :key="index21">
              <img :src="item21.image" alt="">
            </a>
          </div>
          <!--<div class="item1">
            <a href="javascript:;">
              <img src="./img-brand/hw-9.jpg" alt="">
            </a>
          </div>-->
        </div>
      </div>
      <!--<div class="brand">
        <div class="brand-lists">
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/gn-1.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-brand/gn-4.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/gn-2.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-brand/gn-5.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/gn-3.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-brand/gn-6.jpg" alt="">
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="./img-brand/gn-7.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="brand-lists1">
          <div class="item1">
            <a href="javascript:;">
              <img src="./img-brand/gn-8.jpg" alt="">
            </a>
          </div>
          <div class="item1">
            <a href="javascript:;">
              <img src="./img-brand/gn-9.jpg" alt="">
            </a>
          </div>
        </div>
      </div>-->
      <div class="column">
        <div class="title">
          <a href="javascript:;">
            <img :src="column.image" alt="">
          </a>
        </div>
        <div class="column-lists">
          <div class="item" v-for="(list,index) in lists" :key="index">
            <a href="javascript:;" v-for="(item,index1) in list" :key="index1">
              <img :src="item.image" alt="">
            </a>
            <!--<a href="javascript:;">
              <img src="./img-column/lm-3.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-column/lm-5.jpg" alt="">
            </a>-->
          </div>
          <!--<div class="item">
            <a href="javascript:;">
              <img src="./img-column/lm-2.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-column/lm-4.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./img-column/lm-6.jpg" alt="">
            </a>
          </div>-->
        </div>
      </div>
      <div class="carnival">
        <a href="javascript:;">
          <img :src="carnival.image" alt="">
        </a>
      </div>
      <div class="movie">
        <img :src="movieImg.image"  @click="changeVideo" alt="">
        <div class="video" v-if="isShow">
          <div class="control" @click="close">
            <img src="./close.png" alt="">
          </div>
          <video width="100%" height="92%" :src="movieVideo.url" controls></video>
        </div>
      </div>
      <div class="banner">
        <img :src="banner.image" alt="">
      </div>
      <div class="foot">
        <div class="item">
          <span title="触屏版">触屏版</span>
          <span>
          <a href="javascript:;">手机客户端</a>
        </span>
          <span>
          <a href="javascript:;">关于我们</a>
        </span>
          <span>
          <a href="javascript:;">联系我们</a>
        </span>
        </div>
        <div class="banQuan">© wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import surprise from '../surprise/surprise.vue'

  export default {
    props: {
      home: Object
    },
    data(){
      return{
        isShow: false,
        value: [],
        activityImg: {},
        carouseImg: [],
        bz: {},
        productLists: [],
        strategy1: {},
        strategy2: {},
        surprise: {},
        active: {},
        products: {},
        dapai1: {},
        dapai2: {},
        brands: [],
        column: {},
        lists: [],
        carnival: {},
        movieImg: {},
        movieVideo: {},
        banner: {}

      }
    },
    mounted(){
      setTimeout( () => {
       this.scroll = new BScroll(this.$refs.contentWrap,{
       click: true,
       scrollbar: true
       });


      },1);
//      console.log('firstPage',this.productLists);

      this.$nextTick(() => {
        this._initData();
      })
    },
    methods:{
      _initData(){
//        console.log('12345',this.dapai2)
        const Data = this.home;
        this.value = Data.datas;
        this.activityImg = this.value[0].value[0];
        this.carouseImg = this.value[1].value;
        this.bz = this.value[2].value[0];
        this.productLists = this.value[3].menus;
        this.strategy1 = this.value[4].value[0];
        this.strategy2 = this.value[5].value[0];
        this.surprise = Data.goods.data;
        this.active = this.value[7].value[0];
        this.products = this.value[8].image;
        this.dapai1 = this.value[13].value[0];
        this.dapai2 = this.value[14].value[0];
        this.brands = this.value[15].image;
        this.column = this.value[16].value[0];
        this.lists = this.value[17].content_images;
        this.carnival = this.value[18].value[0];
        this.movieImg = this.value[19].value.first;
        this.movieVideo = this.value[19].value.video;
        this.banner = this.value[20].value[0];

//        console.log(11111111111,this.products[0][0][0].title);
      },

      changeVideo(){
        this.isShow = !this.isShow;
      },

      close(){
        this.isShow = !this.isShow;
      }
    },
    components: {
      surprise
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  @rem: 375/16rem;
  .container {
    height: 535/@rem;
    width: 100%;
    position: absolute;
    top: 86/@rem;
    .content {
      width: 100%;
      .activity {
        width: 100%;
        height: 50/@rem;
        img{
          width: 100%;
          height: 100%;
        }
        /*overflow: hidden;
        span {
          float: left;
          display: inline-block;
          width: 33.33333333%;
          height: 50/@rem;
          &:nth-of-type(1) {
            background: url("./hd-1.jpg") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-of-type(2) {
            background: url("./hd-2.jpg") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-of-type(3) {
            background: url("./hd-3.jpg") no-repeat;
            background-size: 100% 100%;
          }

        }*/
      }
      .carouse-wrapper {
        height: 160/@rem;
        width: 375/@rem;
        img{
          width: 100%;
          height: 100%;
        }
        .mint-swipe-indicators {
          position: absolute;
          top: 130 /@rem;
          left: 200 /@rem;
          width: 54/@rem;
          .mint-swipe-indicator {
            width: 5 /@rem;
            height: 5 /@rem;
            background-color: white;
            border-radius: 30%;
            opacity: 1;
            &.is-active {
              width: 15 /@rem;
              transition: .5s width;
            }
          }
        }
      }
      .bz {
        height: 288/@rem;
        img {
          height: 288/@rem;
        }
      }
      .productLists {
        height: 175.5/@rem;
        ul {
          height: 100%;
          .item {
            float: left;
            height: 50%;
            width: 93.5/@rem;
            a {
              height: 100%;
              width: 100%;
              display: inline-block;
              img {
                height: 100%;
                width: 100%;
              }
            }
          }

        }
      }
      .strategy1 {
        width: 100%;
        height: 50/@rem;
        a {
          height: 100%;
          display: block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .strategy2 {
        width: 100%;
        height: 150/@rem;
        a {
          height: 100%;
          display: block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .pre-sale {
        height: 62/@rem;
        a {
          img {
            height: 62/@rem;
            width: 100%;
          }
        }
      }
      .category {
        background: rgb(255, 74, 104);
        .products {
          width: 100%;
          height: 304/@rem;
          .listWrap {
            position: relative;
            box-sizing: border-box;
            padding: 5/@rem 0;
            width: 366/@rem;
            height: 300/@rem;
            border-radius: 4/@rem;
            margin-left: 4/@rem;
            .pro-tit {
              width: 100%;
              a {
                img {
                  width: 366/@rem;
                  height: 40/@rem;
                }
              }
            }
            ul {
              position: absolute;
              left: 0;
              top: 40/@rem;
              width: 366/@rem;
              height: 264/@rem;
              margin: 0 auto;
              background: white;
              li {
                float: left;
                width: 25%;
                height: 50%;
                a {
                  width: 25%;
                  height: 100%;
                  img {
                    width: 100%;
                    height: 70%;
                  }
                  p {
                    text-align: center;
                    line-height: 1.6;
                    font-size: 10/@rem;
                    span {
                      &:nth-child(1) {
                        line-height: 1.6;
                        font-size: 12/@rem;
                        color: red;
                      }
                      &:nth-child(2) {
                        color: #666;
                      }
                    }
                  }
                }
              }
              &:nth-of-type(2) {
                position: absolute;
                left: 0;
                top: 172/@rem;
              }
            }
          }
        }
      }
      .dapai1 {
        height: 140/@rem;
        a {
          height: 140/@rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .dapai2 {
        height: 55/@rem;
        a {
          height: 55/@rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .brand {
        .brand-lists {
          height: 200/@rem;
          width: 100%;
          .item {
            float: left;
            width: 25%;
            height: 100%;
            a {
              display: inline-block;
              width: 100%;
              height: 50%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            &:nth-of-type(4) {
              a {
                height: 100%;
              }
            }
          }
        }
        .brand-lists1 {
          height: 77/@rem;
          width: 100%;
          .item1 {
            width: 50%;
            height: 100%;
            float: left;
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .column {
        .title {
          width: 100%;
          height: 58/@rem;
          a {
            .a-size();
          }
        }
        .column-lists {
          height: 294/@rem;
          .item {
            float: left;
            height: 100%;
            width: 50%;
            a {
              .a-size();
              height: 33.333333333333%;
            }
          }
        }
      }
      .carnival {
        height: 63/@rem;
        a {
          .a-size();
        }
      }
      .movie {
        height: 235/@rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .video{
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          .control{
            width: 6%;
            height: 8%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          video{
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
      .banner{
        width: 100%;
        height: 35.5/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .foot {
        height: 86/@rem;
        .item {
          padding: 15/@rem 0 5/@rem;
          font-size: 14/@rem;
          line-height: 1.6;
          text-align: center;
          height: 42/@rem;
          span {
            padding-right: 10/@rem;
            color: #333;
            a {
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            &:nth-of-type(1) {
              color: red;
            }
          }
        }
        .banQuan {
          height: 44/@rem;
          text-align: center;
          font-size: 12/@rem;
        }
      }
    }
  }

</style>

