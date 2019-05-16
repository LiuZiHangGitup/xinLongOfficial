<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/training.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>培训和开发服务</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以丰富的经验和专业的技术力量为依托，为食品、环保、药物分析、化工及第三方检测等行业用户提供从法规解读、样品前处理再到仪器的原理及软件的操作。全程手把手培训，让您爱上分析。</span>
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
        ['培训和方法开发服务'],
        [
          {
            name: '培训和方法开发服务',
            categorySub: [
              { name: '仪器操作培训' },
              { name: '仪器维修培训' },
              { name: '高级维修培训' },
              { name: '国标方法培训' },
              { name: '检测方法开发' },
              { name: '客户定制培训' }
            ]
          }
        ],
        [
          {
            title: 'training/course', // 培训和方法开发服务
            pathAry: ['theory', '', '', '', '', '']
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
