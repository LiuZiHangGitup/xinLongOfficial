<template>
  <div class="shop">
    <a :href="item.url" v-for="(item, index) in shopping" :key="index" @mouseenter="hoverTab(index)" @mouseleave="levalTab" @click="popup">
      <div :class="{shopCurrent:index == isShow}">
        <img :src="item.img">
        <span class="tab-text"><em>{{item.name}}</em><i class="triangle_border_right"></i></span>
      </div>
    </a>
    <a href="javascript:void(0);" @mouseenter="enter" @mouseleave="leval" @click="backTop" class="btnFlag" v-show="btnFlag">
      <div :class="{shopCurrent:isShowTop}">
        <img src="@/assets/images/top.png">
        <span class="tab-text"><em>返回顶部</em><i class="triangle_border_right"></i></span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'shopcart',
  data () {
    return {
      isShow: null,
      isShowTop: false,
      btnFlag: false,
      shopping: [
        {img: require('@/assets/images/release.png'), name: '发布需求', url: 'javascript:void(0);'},
        {img: require('@/assets/images/service.png'), name: '在线客服', url: 'javascript:void(0);'},
        {img: require('@/assets/images/WeChat.png'), name: '官方微信', url: 'javascript:void(0);'},
        {img: require('@/assets/images/telephone.png'), name: '客服电话', url: 'javascript:void(0);'}
      ]
    }
  },
  methods: {
    popup () {
      alert('请拨打客服热线：400-350-1103')
    },
    hoverTab (index) {
      this.isShow = index
    },
    levalTab (index) {
      this.isShow = null
    },
    enter () {
      this.isShowTop = true
    },
    leval (index) {
      this.isShowTop = false
    },
    // 点击图片回到顶部
    backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>
<style>
.shop{
width: 33px;
}
.shop a{
  display: block;
  width: 100%;
}
.shop div{
  margin-top: 18px;
  position: relative;
  padding:6px 4.5px;
  height:24px;
}
.shop div img{
  width:24px;
  height:24px;
}
.shop .tab-text {
    width: 92px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    position: absolute;
    z-index: 1;
    left: 35px;
    top: 0;
}
.shopCurrent{
  background-color: #4A90E2;
}
.shopCurrent .tab-text {
  left:-84px;
}
.tab-text em{
  width: 84px;
  float: left;
  color: #fff;
  font-style:normal;
  background-color: #494949;
}
.triangle_border_right{
  float: left;
  width:0;
  height:0;
  border-width:6px 0 6px 6px;
  border-style:solid;
  border-color:transparent transparent transparent #494949;
  margin:12px auto;
  position:relative;
}
</style>
