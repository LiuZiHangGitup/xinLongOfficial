<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/measure.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>计量校准服务</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;严格按照《中华人民共和国计量法》及有关计量法规的要求，相关检定规程、校准规范、国标或仪器说明书技术指标的要求等进行全面的校准和/或检测；实验室的校准检测工作完全满足ISO/IEC17025和ISO9000的要求，具完全独立合法的第三方公正法定计量机构，具有向社会出具公正数据等权威资质；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务内容：温度、力学、化学、长度
          </span>
          <div style="text-align:center;">
            <img src="@/assets/images/table.jpg" alt style="width:100%;height:auto;">
          </div>
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
        ['计量校准服务'],
        [{
          name: '仪器计量校准服务',
          categorySub: [
            { name: '玻璃器皿类' },
            { name: '精密仪器类' },
            { name: '常规仪器类' },
            { name: '仪器带证书销售' }
          ]
        }],
        [
          {
            title: 'measure', // 仪器计量校准服务
            pathAry: ['glassware', '', '', '']
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
