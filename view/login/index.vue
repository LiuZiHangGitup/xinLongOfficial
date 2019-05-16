<template>
  <div id="xiLongLogin">
    <div class="top">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt>
        </router-link>
        <b>
          <i>欢迎登录</i>
        </b>
      </div>
    </div>
    <div class="main">
      <div class="banner">
        <img src="@/assets/images/login_banner.jpg" alt>
      </div>
      <div class="login_con">
        <div class="login_border">
          <i></i>
        </div>
        <div class="login_form">
          <div class="login_tab">
            <a class="login_tab_l active" href="javascript:void(0);">手机快捷登录</a>
            <i></i>
            <a class="login_tab_r" href="javascript:void(0);">账号密码登录</a>
          </div>
          <div class="login_box">
            <form action>
              <div class="item">
                <img class="item_icon" src="@/assets/images/mobile.jpg" alt>
                <input type="text" placeholder="手机号(无须注册)" v-model="phone">
                <a href="javascript:void(0);" @click="getQryCode()">获取验证码</a>
                <span class="clear-btn" style="display: none;"></span>
              </div>
              <div class="item">
                <img class="item_icon" src="@/assets/images/mms.jpg" alt>
                <input type="text" placeholder="输入验证码" v-model="code">
                <span class="clear-btn" style="display: none;"></span>
              </div>
              <div class="login-btn">
                <a href="javascript:;" @click="goLogin()">登录</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, qryCode, getUserInfo } from '@/api/index'
import { constants } from 'fs';
// import { debug } from 'util';
export default {
  el: '#xiLongLogin',
  data () {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    async getQryCode () {
      if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        alert('请输入正确的手机号')
        return
      } else {
        try {
          let getQryCodeData = await qryCode(this.phone)
          if (getQryCodeData.data.code == 200) {
            alert('获取验证码成功')
          } else {
            alert('获取验证码失败')
          }
        } catch (error) {
          alert('获取验证码失败');
        }
      }
    },
    async goLogin () {
      try {
        let loginData = await login(this.phone, this.code)
        if (loginData.data.code == 200) {
          // window.location.pathname = localStorage.getItem('oldUrl')
          localStorage.setItem('token', loginData.data.result.token)
          this.getUserInfos()
        } else {
          alert(loginData.data.message)
        }
      } catch (error) {
        alert(error)
      }
    },
    async getUserInfos () {
      try {
        let userInfoData = await getUserInfo()
        if (userInfoData.code == 200) {
          localStorage.setItem('username', userInfoData.result.phoneNumber)
          if (!localStorage.getItem('oldUrl')) {
            window.location.pathname = '/'
          } else {
            this.$router.push({ path: localStorage.getItem('oldUrl') })
          }
        } else {
          alert(userInfoData.message)
        }
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
<style scoped>
/* 头部 */
.top {
  width: 1200px;
  margin: 36px auto 28px auto;
  overflow: hidden;
}
.logo {
  display: inline-block;
  height: 90px;
}
.logo a {
  margin-top: 11px;
  display: inline-block;
}
.logo b {
  border-left: 1px solid #bfbfbf;
  line-height: 90px;
  height: 90px;
  float: right;
  margin-left: 10px;
  padding-left: 26px;
}
.logo b i {
  color: #7d7d7d;
  font-size: 24px;
  font-style: normal;
  font-style: normal;
}
.main,
.banner {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  height: 600px;
}
.login_con {
  border: 2px solid #0c4cab;
  position: absolute;
  right: 150px;
  top: 65px;
  z-index: 2;
  width: 480px;
  height: 470px;
  overflow: hidden;
  margin: 0 auto;
  background: #ffffff;
}
.login_border {
  border: 6px solid #5a88cb;
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 2;
  content: "";
  display: block;
  width: 468px;
  height: 458px;
}
.login_border i {
  border: 2px solid #003d99;
  z-index: 2;
  content: "";
  display: block;
  width: 464px;
  height: 454px;
}
.login_form {
  margin: 54px 70px;
  position: relative;
  z-index: 3;
}
.login_tab {
  width: 100%;
  overflow: hidden;
}
.login_tab a:hover {
  text-decoration: none;
  color: #014099;
}
.login_tab a {
  font-size: 22px;
  color: #221815;
  height: 26px;
  line-height: 26px;
}
.login_tab a.active {
  color: #014099;
}
.login_tab_l {
  float: left;
}
.login_tab_r {
  float: right;
}
.login_tab i {
  width: 1px;
  height: 26px;
  position: absolute;
  left: 50%;
  top: 0;
  background: #d7d7d7;
  display: block;
  margin-left: -1px;
}
.login_box {
  width: 100%;
  margin-top: 48px;
  overflow: hidden;
}
.item {
  width: 100%;
  margin-bottom: 25px;
  position: relative;
}
.item_icon {
  position: absolute;
  left: 12px;
  top: 6px;
  z-index: 22;
}
.item input {
  padding-left: 50px;
  width: 288px;
  height: 48px;
  line-height: 48px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
}
.item a {
  line-height: 48px;
  position: absolute;
  right: 15px;
  top: 0;
}
.item a:hover {
  color: #014099;
  text-decoration: none;
}
.login-btn a {
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  display: block;
  text-align: center;
  background: #007fe1;
  font-size: 18px;
  border-radius: 6px;
}
</style>
