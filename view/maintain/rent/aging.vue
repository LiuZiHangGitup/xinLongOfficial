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
            <p>精密仪器租赁-分期付款购买</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;利用租赁杠杆，抓住市场机遇，快速扩大公司规模在竞争中占据优势地位。
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、节约成本：减少企业开支，提高资金的利用率，增强资金的流动性；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、无需保养：根据合同约定，租赁方负责维修维护，不需承担维修保养费用，避免仪器重大问题带来的高昂维修费用；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、及时高效：应对紧急的生产及客户审核需要，应对紧急的订单，免去进口仪器长时间的交货期；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、方式灵活：企业可以根据自身经营情况，选择短租、长租、变租为购；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、省时省事：免除仪器选购的烦恼，以及可能选错仪器的风险。
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
              <label class="label-text">所需仪器品牌</label>
              <input type="text" placeholder="请选择品牌" v-model="formData.extentd.brand">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">所需仪器名称</label>
              <input type="text" placeholder="选择名称" v-model="formData.extentd.instrument">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">所需仪器型号</label>
              <input type="text" placeholder="选择型号" v-model="formData.extentd.model">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">所需仪器信息</label>
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
        serviceId: '31',
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
        [3, 3, 0]
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
