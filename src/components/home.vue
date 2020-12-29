<template>
  <div class="container">
<!--    <div class="swiper-bg"-->
<!--         :style="{backgroundColor:slidesColor[index]}">-->
<!--    </div>-->
    <div class="top">
      <div class="login" >
        <p v-show="!userInfo">
        <el-link type="danger" @click="tag2()">欢迎来到xx商城，请登录</el-link></p>
        <p v-show="userInfo">
        <el-link type="success" >已登录，张三</el-link></p>
        
      </div>
      <div class="cart">
        <table>
          <tr>
            <td><el-link type="primary" @click="tag1()" style="">购物车</el-link> </td>
            <td>|个人中心</td>
            <td>|收藏夹</td>
          </tr>
        
        </table> 
      </div>
    </div>
    <div class="searchbox">
        <table>
          <tr>
            <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
            <td><el-button type="success">搜索</el-button></td>
          </tr>
        </table>  
    </div>
    <div class="shopgenre">
      <el-dropdown>
      <span class="el-dropdown-link">
         全部分类<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
       <el-dropdown-item  v-for="(item, index) in navbars"
          :key="index">{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown> 
    </div>
    <div class="stage">
      <h1 class="banner-title">精品推荐</h1>
      <div class="swiper">
        <Swiper :slides="slidesImage" v-model="index"></Swiper>
      </div>
    </div>
    <div class="rec-banner">
      <h1>冬季大促销</h1>
      <ul class="rec-list">
        <li
          class="rec-card"
          v-for="(item,index) in goods"
          :key="index"
          @click="togglePage(item)">
          <img :src="item.cover" class="rec-media" />
          <div class="rec-profile">
            <h4>{{item.text}}</h4>
            <p class="rec-params">
              原价：<span class="rec-price">¥{{item.price}}</span>
              促销价：<span class="rec-online-price">¥{{item.onlinePrice}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="botom"><img src="/static/images/bottom.jpg"></div>
    
     
  </div>
</template>

<script>
  import Swiper from '@/widgets/Swiper'
  import config from '@/config/config'
  export default {
    name: "Index",
    components: {Swiper},
    data() {
      return{
        index:0,
        input: ''
      }
    },
    computed: {
      navbars () {
        return config.navbars
      },
      goods () {
        return config.goods
      },
      // slidesColor () {
      //   return config.goods.map(item => item.color)
      // },
      slidesImage () {
        return config.goods.map(item => item.poster)
      }
      
    },
    methods: {
      togglePage (item) {
        this.$router.push({path: 'goods', query: { name: item.name}})
      },
      tag1(){
        this.$router.push({path: 'cart'})
      },
      tag2(){
        this.$router.push({path: 'login'})
      }
    }
  }
</script>

<style scoped>
  .top{
    height: 50px;
  }
  .login {
    width: 200px;
    float: left;
  }
  .cart {
    width: 200px;
    float: right;
  }
  .searchbox {
    width: 500px;
    height: 40px;
    position: relative;
    margin: auto;
    left: 150px;
  }
  .shopgenre {
    width: 150px;
    height: 40px;
    position: relative;
    margin: left;

  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .container {
    width: 1200px;
    position: relative;
    margin: auto;
    background-color: #f5f5f5;
    border-bottom: 0px solid transparent;
  }
  .swiper-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: #e5e5e5;
  }
  .stage {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(236, 204, 220);
  }
  .category-nav {
    /*display: inline-block;*/
    position: absolute;
    width: 200px;
    height: 500px;
    z-index: 2;
    list-style: none;
    background-color: rgba(0, 0, 0, 0.55);
    margin-top: 0px;
  }
  .swiper {
    height: 500px;
    background-color: #e8e8e8;
  }
  .rec-banner {
    margin: 30px auto;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 1120px;
    background-color: #fff;
  }
  .banner-title {
    padding: 8px 15px;
  }
  .rec-list {
    list-style: none;
  }
  .rec-card {
    display: inline-block;
    width: 25%;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
  }
  .rec-media {
    width: 240px;
  }
  .rec-profile {
    width: 200px;
    display: inline-block;
    color: #444;
  }
  .rec-price {
    text-decoration: line-through;
  }
  .rec-online-price {
    color: #ff0036;
    font-size: 16px;
  }
  .rec-params {
    font-size: 12px;
    color: #888;
  }
  

</style>
