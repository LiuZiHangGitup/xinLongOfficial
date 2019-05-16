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
            <p>实验室改造-实验室水电改造</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以实验室装修标准为依据，结合实验室开展的检测项目要求，由专业从事实验室装修的队伍提供实验室新建、改建、扩建等装修装饰服务。实验室装修施工过程中，从主体到通风到电气到污水处理应确保实验室施工过程满足设计要求、相关实验室认可认证要求和客户要求。
            <br>
            <br>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室电路设计基本要求：</b>
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;严格按国标（GB-5023-97）标准选择电线。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电线截面积在2.5~6平方毫米的标准内选用。
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动力电源所选择的电线，必须是三相五线，并符合国家规定接线标准。
            <br>
            <br>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室水路设计基本要求：</b>
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室用水一般分为：自来水、三蒸水和离子水。走上水时，要根据实验室具体用水来选择上下水的所需水管、接头的材质。同时还要考虑到水电的分离、水管周围的环境和水路的走向等等。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室有水盆的房间设计地漏防止漏水，用水区域前段设计阀门控制供水，便于检修，单个房间进水口设计阀门控制供水，达到一间实验室水路出现故障，不影响其他房间的原则。每一层单独设计层阀控制给水管，入户水管设计阀门，控制实验室内给水。达到实验室用水安全。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上水设计：PP-R材质，热熔连接，不渗漏。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排水设计：实验区排水全部采用防腐蚀耐酸碱材质（PP），达到排水不渗漏不腐蚀。排水铺设至楼下一层地面，实验室污水采用污水处理设备过滤
          </span>
          <form class="subform">
            <div class="subinput">
              <label class="label-text">联系方式</label>
              <input type="text" placeholder="请输入联系人" v-model="formData.linkName">
            </div>
            <div class="subinput subinput-right subinput-top">
              <label></label>
              <input type="text" placeholder="从事职务" v-model="formData.job">
            </div>
            <div class="subinput subinput-right subinput-top">
              <input type="text" placeholder="联系地址" v-model="formData.linkAdd">
            </div>
            <div class="subinput subinput-right subinput-top">
              <input type="text" placeholder="联系电话" v-model="formData.linkPhone">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">具体服务需求</label>
              <textarea id cols="58" rows="10" v-model="formData.remark"></textarea>
            </div>
          </form>
          <div class="auth-btn">
            <input type="button" value="提交申请" @click="postFroms()">
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
import { postForm } from '@/api/index'
export default {
  components: { footers, headers },
  data () {
    return {
      formData: {
        serviceId: '13',
        linkName: '',
        job: '',
        linkPhone: '',
        linkAdd: '',
        remark: ''
      },
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
        [2, 2, 0]
      ]
    }
  },
  methods: {
    // 修改serviceId
    changeServiceId (id) {
      this.formData.serviceId = id;
    },
    async postFroms () {
      try {
        if (this.formData.linkName == '' || this.formData.job == '' || this.formData.linkAdd == '' || this.formData.linkPhone == '' || this.formData.remark == '') {
          alert('请填写所有信息')
          return
        } else {
          let resData = await postForm(this.formData)
          this.formData = {
            linkName: '',
            job: '',
            linkPhone: '',
            linkAdd: '',
            remark: ''
          }
          alert(resData.data.message);
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.subinput {
  position: relative;
}
.check {
  display: none;
}
.active {
  display: block;
  position: absolute;
  right: -110px;
  top: 0;
  color: #ff0000;
  font-size: 12px;
  line-height: 36px;
  width: 200px;
  text-align: left;
}
</style>
