<template>
  <div class="top-search">
    <div class="site-nav">
      <div class="container">
        <div class="site-nav-l">欢迎来到新隆检测-实验室一站式服务供应商，服务热线:400-350-1103</div>
        <div class="site-nav-r">
          <ul>
            <li class="site-nav-sign">
              <router-link :to="ifGoLogin">{{ username }}</router-link>
              <!-- <span class="site-nav-symbol" v-if="this.$store.state.user.username=''">/</span> -->
              <!-- <a
                href="javascript:void(0);"
                @click="popup"
                v-if="this.$store.state.user.username=''"
              >注册</a>-->
            </li>
            <li>|</li>
            <li>
              <a href="javascript:void(0);" @click="popup">我的订单</a>
            </li>
            <li class="site-nav-menu">
              <a href="javascript:void(0);" @click="popup">
                <span>购物车</span>
                <span>(0)</span>
              </a>
            </li>
            <li class="site-nav-menu">
              <a href="javascript:void(0);" @click="popup">
                <span>询价篮</span>
                <span>(0)</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="javascript:void(0);" @click="popup">帮助中心</a>
            </li>
            <li>
              <a href="javascript:void(0);" @click="popup">小程序</a>
            </li>
            <li>|</li>
            <li>
              <a href="javascript:void(0);" @click="goOut()">退出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-wrap">
      <div class="search-con">
        <div class="search-panel">
          <input placeholder="请输入关键词搜索产品，多个关键词用空格分割" class="search-input">
          <button class="search-btn" type="submit">搜索</button>
        </div>
        <div class="search-hots">
          <a href="javascript:void(0);" @click="popup">Phenomenex</a>
          <a href="javascript:void(0);" @click="popup">博纳艾杰尔</a>
          <a href="javascript:void(0);" @click="popup">移液器</a>
          <a href="javascript:void(0);" @click="popup">标准物质</a>
          <a href="javascript:void(0);" @click="popup">天平</a>
          <a href="javascript:void(0);" @click="popup">固相萃取</a>
          <a href="javascript:void(0);" @click="popup">空心阴极灯</a>
          <a href="javascript:void(0);" @click="popup">生物安全柜</a>
          <a href="javascript:void(0);" @click="popup">C18</a>
          <a href="javascript:void(0);" @click="popup">顶空瓶</a>
          <a href="javascript:void(0);" @click="popup">QuEChERS</a>
          <a href="javascript:void(0);" @click="popup">净化包</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topsearch',
  data () {
    return {
      username: this.$store.state.user.username,
      ifGoLogin: ''
    }
  },
  created () {
    if (!this.username) {
      this.username = '登录'
      this.ifGoLogin = '/login'
    }
  },
  methods: {
    goOut () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.username = '登录'
      this.ifGoLogin = '/login'
    },
    popup () {
      alert('请拨打客服热线：400-350-1103')
    }
  },
  mounted: function () {
  }
}
</script>
<style scoped>
.top-search {
  width: 100%;
}
/* 顶部导航 */
.site-nav {
  background-color: #f2f2f2;
  border-bottom: 1px solid #dedede;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #676767;
}
.site-nav-l {
  float: left;
  width: 420px;
}
.site-nav-r {
  float: right;
}
.site-nav-r ul li {
  float: left;
  padding-left: 10px;
}
.site-nav-sign a {
  color: #498fe5;
}
.site-nav-symbol {
  margin: 0 2px;
}
.site-nav-menu a {
  color: #fb3485;
}
/* 搜索 */
.search-wrap {
  margin: 0 auto;
  width: 1200px;
  position: relative;
}
.search-con {
  width: 604px;
  left: 404px;
  top: 30px;
  position: absolute;
}
.search-panel {
  overflow: hidden;
}
.search-input {
  float: left;
  border: 2px solid #ff9d2e;
  overflow: hidden;
  height: 34px;
  line-height: 34px;
  width: 534px;
  padding-left: 5px;
  outline: none;
  color: #231910;
}
.search-btn {
  float: left;
  border: 2px solid #ff9d2e;
  background-color: #ff9d2e;
  overflow: hidden;
  height: 38px;
  line-height: 38px;
  padding: 0 10px 0 14px;
  outline: none;
  color: #ffffff;
  letter-spacing: 4px;
  margin-left: -2px;
}
.search-hots {
  overflow: hidden;
  height: 24px;
}
.search-hots a {
  float: left;
  font-size: 12px;
  color: #686669;
  margin-right: 3px;
}
</style>
