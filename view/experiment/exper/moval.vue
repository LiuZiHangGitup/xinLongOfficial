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
            <p>实验室整体搬迁和移机服务-实验室整体搬迁</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室的设备搬迁每一步都至关重要，我们以满足客户需求为己任，以客户的满意为标准。我们有专业的工程师和专属的搬运团队，能为您实验室的仪器提供周到、稳妥、快捷的一站式迁移服务。根据您的需要，搬迁前为每个用户提供定制化搬迁服务，确保搬迁前后仪器性能一致性，满足实验室的要求。在迁移完成后根据用户需求对仪器进行整体维护、计量以及3Q认证服务。</span>
          <form class="subform">
            <div class="apparatus">
              <div class="apparatus-item">
                <input
                  id="apparatus-input"
                  type="radio"
                  name="machine"
                  value="1"
                  v-model="move"
                  @click="changeServiceId('52')"
                >
                <label id="apparatus-label" class="choice-item" for="1">一般移机</label>
              </div>
              <div class="apparatus-item">
                <input
                  id="apparatus-input"
                  type="radio"
                  name="machine"
                  value="2"
                  v-model="move"
                  @click="changeServiceId('53')"
                >
                <label id="apparatus-label" class="choice-item" for="2">完整移机</label>
              </div>
            </div>
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
      move: 2,
      formData: {
        serviceId: '5',
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
/* 单选按钮 */
.apparatus {
  padding-left: 244px;
  margin-bottom: 38px;
  overflow: hidden;
}
.apparatus-item {
  position: relative;
  border: 1px solid #e4e4e4;
  width: 200px;
  float: left;
  margin-left: 24px;
}
#apparatus-input {
  display: block;
  width: 200px;
  height: 54px;
  opacity: 0;
  z-index: 2;
  position: relative;
}
#apparatus-label {
  display: block;
  position: absolute;
  width: 200px;
  height: 54px;
  text-align: center;
  line-height: 54px;
  top: 0px;
  left: 0px;
}
input:checked + .choice-item {
  background: #f39900;
  color: #fff;
}
</style>
