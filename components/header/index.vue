<template>
  <div class="head">
    <div class="top-wrap clearfix container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt>
        </router-link>
      </div>
      <div class="qrcode">
        <img src="@/assets/images/QR-code.jpg" alt>
      </div>
    </div>
    <div class="navigation">
      <div class="container nav-content">
        <div class="nav-main">
          <ul>
            <li class="nav-main-fixed">
              <router-link to="/">产品与服务</router-link>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
            </li>
            <li>
              <router-link to="/experiment">实验室服务</router-link>
            </li>
            <li>
              <router-link to="/maintain">维修维保</router-link>
            </li>
            <li>
              <router-link to="/measure">计量校准</router-link>
            </li>
            <li>
              <router-link to="/authentication">认证咨询</router-link>
            </li>
            <li>
              <router-link to="/training">培训开发</router-link>
            </li>
            <li>
              <router-link to="/consumable">备件耗材</router-link>
            </li>
            <li>
              <router-link to="/caseShow/caseshow">案例展示</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headers',
  data () {
    return {}
  },
  methods: {
    popup () {
      alert('请拨打客服热线：400-350-1103')
    }
  }
}
</script>
<style scoped>
.head {
  width: 100%;
}
/* 头部 */
.top-wrap {
  height: 114px;
  overflow: hidden;
}
.logo {
  margin: 23px 0;
  float: left;
}
.logo a {
  display: block;
}
.qrcode {
  float: right;
  margin: 10px 0;
}
/* 导航 */
.navigation {
  width: 100%;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}
.nav-content {
  position: relative;
  overflow: visible;
}
.nav-main {
  height: 58px;
  line-height: 58px;
  overflow: hidden;
}
.nav-main li.nav-main-fixed a {
  width: 222px;
  color: #ffffff;
  background-color: #f39800;
  padding: 0;
  height: 59px;
  line-height: 59px;
}
.nav-main li a {
  text-align: center;
  font-size: 16px;
  float: left;
  padding: 0 28px;
}
</style>
