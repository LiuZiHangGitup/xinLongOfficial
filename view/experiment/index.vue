<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/experiment.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>实验室服务</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还在为人员不足、人员不够专业、效率低、实验数据不稳定、仪器各种问题无法解决等问题而烦恼吗？我们现推出实验室整体托管服务，为您提供高品质的服务。我们以标准化的服务流程保障执行程序及周期完整准确，提高实验室运营规范化、标准化，延长实验室设备的使用寿命，实现运行成本的最低化，从而带来经济效益和社会效益。</span>
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
        ['实验室整体托管'],
        [
          {
            name: '实验室整体托管', path: '/experiment/trusteeship'
          },
          {
            name: '实验室整体搬迁和移机服务',
            categorySub: [
              { name: '实验室整体搬迁' },
              { name: '实验室精密仪器移机' }
            ]
          },
          {
            name: '实验室改造',
            categorySub: [
              { name: '实验室水电改造' },
              { name: '实验室通风系统改造' },
              { name: '实验室功能改造' }
            ]
          }
        ],
        [
          {
            title: 'experiment', // 实验室整体搬迁和移机服务
            pathAry: ['']
          },
          {
            title: 'exper', // 实验室整体搬迁和移机服务
            pathAry: ['moval', '']
          },
          {
            title: 'construct', // 实验室改造
            pathAry: ['waterElectricity', '', '']
          }
        ],
        [100, 100, 100]
      ]
    }
  },
}
</script>
<style scoped>
</style>
