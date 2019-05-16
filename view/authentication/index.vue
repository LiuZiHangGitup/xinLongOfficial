<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/authentication.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>认证咨询服务</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专门从事检测和/或校准实验室国家认可（ISO/IEC17025）、检验检测机构资质认定（计量认证CMA，含各行业检测机构）中国实验室国家认可（CNAS）等标准认证、认可咨询、实验室认证认可专项培训、实验室管理与规划咨询</span>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import footers from '@/components/footer'
import headers from '@/components/header'
export default {
  components: { footers, headers },
  data () {
    return {
      category: [
        ['认证咨询服务'],
        [{
          name: '实验室认证咨询',
          categorySub: [
            { name: 'CMA认证' },
            { name: 'CNAS认证' },
            { name: '农业系统双认证' },
            { name: '水厂42项' }
          ]
        }],
        [
          {
            title: 'authentication', // 实验室认证咨询
            pathAry: ['cma', '', '', '']
          }
        ],
        [100, 100, 100]
      ]
    }
  }
}
</script>
<style scoped>
</style>
