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
            <p>仪器故障维修-硬件故障维修</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务运用自身专业平台，专业售后技术工程师和优质零配件资源，为您提供原厂品质的仪器故障检修服务。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务为您制定精准快速有效的仪器维修方案，工程师会在您提出故障问题的第一时间建立直接有效的沟通渠道，凭借本地化的服务，快捷高效的响应，解决您的燃眉之急，为您的仪器高效准确运行保驾护航。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务在优质高效解决您燃眉之急的情况下，本着双赢的原则，为您节省仪器原厂高额的营运费用，我们将为您提供性价比更高的第三方维修服务。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务为您提供更快更经济的送修服务。如果您所在的区域没有工程师，或者仪器较为轻便，您可以将仪器或者模块寄发到新隆检测维修中心，我们为您做免费的故障检查和诊断，如果您确认维修，我们会在最短的时间将您的仪器维修好并给您寄回。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北新隆检测服务强大的工程师团队，无论前处理设备，光谱，色谱仪器，只要您在工作过程中遇到问题，都可以跟我们联系，我们会竭诚为您服务。
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>硬件故障维修：</b>专业技术工程师以及常规维修配件的现货供应为用户提供及时专业的服务
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
              <label class="label-text">品牌</label>
              <input type="text" placeholder="请选择品牌" v-model="formData.extentd.brand">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">名称</label>
              <input type="text" placeholder="选择名称" v-model="formData.extentd.instrument">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">型号</label>
              <input type="text" placeholder="选择型号" v-model="formData.extentd.model">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">详细故障说明</label>
              <textarea name id cols="58" rows="10" v-model="formData.remark"></textarea>
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
        serviceId: '24',
        linkName: '',
        job: '',
        linkPhone: '',
        linkAdd: '',
        remark: '',
        extentd: { brand: '', instrument: '', model: '' }
      },
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
        [1, 1, 0]
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
        if (this.formData.linkName == '' || this.formData.job == '' || this.formData.linkAdd == '' || this.formData.linkPhone == '' || this.formData.remark == '' || this.formData.extentd.brand == '' || this.formData.extentd.instrument == '' || this.formData.extentd.model == '') {
          alert('请填写所有信息')
          return
        } else {
          let resData = await postForm(this.formData)
          this.formData = {
            linkName: '',
            job: '',
            linkPhone: '',
            linkAdd: '',
            remark: '',
            extend: { brand: '', instrument: '', model: '' }
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
