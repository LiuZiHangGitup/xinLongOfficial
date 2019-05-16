<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/maintain.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <left-menu :category="category"></left-menu>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>维修和维保服务</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务运用自身专业平台，专业售后技术工程师和优质零配件资源，为您提供优质仪器维护及保养服务。</span>
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
        ['维修和维保服务'],
        [{
          name: '仪器维修及保养服务',
          categorySub: [
            { name: '深度维护保养' },
            { name: '一般维护保养' },
            { name: '年度维护保养' }
          ]
        },
        {
          name: '仪器故障维修',
          categorySub: [
            { name: '硬件故障维修' },
            { name: '软件故障维修' },
            { name: '系统故障维修' }
          ]
        },
        {
          name: '仪器升级服务',
          categorySub: [
            { name: '现有仪器升级改造' },
            { name: '仪器软件系统升级' },
            { name: '升级网络版' },
            { name: '仪器客户定制服务' }
          ]
        },
        {
          name: '精密仪器租赁',
          categorySub: [
            { name: '分期付款购买' },
            { name: '整机租赁' },
            { name: '带维保租赁' }
          ]
        }],
        [
          {
            title: 'maintain/upkeep', // 仪器维修及保养服务
            pathAry: ['upkeep', '', '']
          },
          {
            title: 'maintain/trouble', // 仪器故障维修
            pathAry: ['hardware', '', '',]
          },
          {
            title: 'maintain/service', // 仪器升级服务
            pathAry: ['existing', '', '', '']
          },
          {
            title: 'maintain/rent', // 精密仪器租赁
            pathAry: ['aging', '', '']
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
