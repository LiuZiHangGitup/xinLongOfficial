<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/caseshow.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>河北百奇商贸有限公司实验设备升级</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">客户名称：河北百奇商贸有限公司</span>
          <br>
          <span class="contecon-title">仪器品牌：安捷伦</span>
          <br>
          <span class="contecon-title">服务项目：实验室设备升级</span>
          <br>
          <span class="contecon-title">精彩分享：</span>
        </div>
        <div class="imgCount">
          <img src="@/assets/images/anLiCenter.png">
          <img src="@/assets/images/anLiCenter.png">
          <img src="@/assets/images/anLiCenter.png">
        </div>
        <div>
          <p class="contecon-title">案例总结</p>
          <span
            class="contecon-title"
          >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import footers from '@/components/footer'
import headers from '@/components/header'
import { postForm } from '@/api/index'
export default {
  components: { footers, headers },
  data () {
    return {
      category: [
        ['案例展示'],
        [
          {
            name: '实验室整体服务',
            categorySub: []
          },
          {
            name: '维修和维保服务',
            categorySub: []
          },
          {
            name: '认证咨询及计量校准服务',
            categorySub: []
          }
        ],
        [
          {
            title: 'exper',
            pathAry: ['']
          },
          {
            title: 'educate',
            pathAry: ['']
          },
          {
            title: 'construct',
            pathAry: ['']
          }
        ],
        [100, 100, 100]
      ]
    }
  },
  methods: {
    async postFrom () {
      try {
        let resData = await postForm();
        console.log(resData)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.imgCount img {
  display: inline-block;
  margin-bottom: 50px;
}
.contecon-title {
  font-size: 20px !important;
  display: inline-block;
  margin-bottom: 10px;
}
</style>
