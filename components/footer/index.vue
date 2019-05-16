<template>
  <div>
    <footer class="footer">
      <div class="index-footer">
        <div class="about-company">
          <p>新隆检测科技有限公司</p>
          <!-- <p class="fonts-top">检测咨询请拨打全国免费服务热线：<i>40055667788</i></p> -->
          <p>电话：0311-89897890</p>
          <p>传真：0311-89897890</p>
          <p>地址：石家庄市长安区丰收路122号泽润大厦2411室</p>
          <!-- <p class="fonts-top">企业邮箱：xinlong@163.com</p> -->
          <p>网址：www.xinlongjiance.com</p>
          <div class="footer-wire"></div>
        </div>
        <div class="inter-link">
          <p>友情链接</p>
          <p class="fonts-top">
            <a href="https://www.daklkh.com">https://www.daklkh.com</a>
          </p>
          <p class="fonts-top">
            <a href="https://www.sgsonline.com.cn">https://www.sgsonline.com.cn</a>
          </p>
          <p class="fonts-top">
            <a href="https://www.easylabplus.com">https://www.easylabplus.com</a>
          </p>
          <p class="fonts-top">
            <a href="https://www.ponytest.com">https://www.ponytest.com</a>
          </p>
          <div class="footer-wire"></div>
        </div>
        <div class="footer-qrcode">
          <img src="@/assets/images/foot_QR-Code.jpg" style="height:132px">
          <div class="qrcode-title">
            <p>扫描二维码</p>
            <p>关注新隆检测微信公众号</p>
          </div>
        </div>
      </div>
      <div class="ftCon-Wrapper">
        <p>网站首页 | 关于我们 | 联系方式 | 使用协议 | 版权隐私 | 网站地图 | 网站留言 | 广告服务</p>
        <p class="ftCon-font">COPYRIGHT © 2019新隆检测 ALL RIGHTS RESERVED.服务热线：18032131111</p>
      </div>
    </footer>
    <div class="shoping-cart" ref="shopingCart">
      <div class="shopping" ref="shopping">
        <shopcart></shopcart>
      </div>
    </div>
  </div>
</template>

<script>
import shopcart from '@/components/shopcart'
export default {
  components: { shopcart },
  name: 'footers',
  data () {
    return {}
  },
  mounted () {
    this.getHight()
  },
  methods: {
    getHight () {
      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var gaodu = (h - 270) / 2 - 9
      this.$refs.shopingCart.style = 'height:' + h + 'px'
      this.$refs.shopping.style = 'padding-top:' + gaodu + 'px'
    }
  }
}
</script>
<style>
/* 字体之间间距 */
.fonts-top {
  margin-top: 6px;
}
/* 底部开始 */
.footer {
  width: 100%;
  height: 336px;
  background-color: #a0a0a0;
  color: #ffffff;
  overflow: hidden;
  font-size: 14px;
}
/* 中心内容 */
.index-footer {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 公司介绍 */
.about-company {
  position: relative;
  width: 460px;
  padding-top: 62px;
  float: left;
}
.about-company p i {
  font-style: normal;
  font-size: 20px;
}
.footer-wire {
  position: absolute;
  background-color: #fff;
  width: 1px;
  height: 138px;
  right: 0;
  top: 62px;
}
/* 友情链接 */
.inter-link {
  position: relative;
  width: 350px;
  padding-top: 60px;
  float: left;
  padding-left: 30px;
}
.inter-link p a {
  text-decoration: none;
  outline: none;
  color: #ffffff;
}
/* 二维码模块 */
.footer-qrcode {
  position: relative;
  width: 304px;
  padding-top: 62px;
  float: left;
  padding-left: 46px;
}
.qrcode-title {
  position: absolute;
  right: 0px;
  top: 62px;
}
/* 底部信息模块 */
.ftCon-Wrapper {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
}
.ftCon-font {
  margin-top: 10px;
}
/* 购物车 */
.shoping-cart {
  background-color: #333333;
  position: fixed;
  top: 0;
  right: 0px;
  height: 100%;
  z-index: 999;
}
</style>
