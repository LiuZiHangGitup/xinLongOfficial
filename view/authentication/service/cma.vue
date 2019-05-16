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
            <p>实验室认证咨询-CMA认证</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供全方位的CMA认证咨询、体系编制、人员培训、仪器验证、方法培训等等一站式解决方案，确保最短时间通过认证</span>
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
              <label class="label-text">认证项目数量</label>
              <input type="text" placeholder="数量" v-model="formData.extentd.num">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">目前人员水平</label>
              <input type="text" placeholder="低端/中端/高端" v-model="formData.extentd.levels">
            </div>
            <div class="subinput subinput-top">
              <label class="label-text">具体服务需求</label>
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
        serviceId: '42',
        linkName: '',
        job: '',
        linkPhone: '',
        linkAdd: '',
        remark: '',
        extentd: { num: '', levels: '' }
      },
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
        [0, 0, 0]
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
        if (this.formData.linkName == '' || this.formData.job == '' || this.formData.linkAdd == '' || this.formData.linkPhone == '' || this.formData.remark == '' || this.formData.extentd.num == '' || this.formData.extentd.levels == '') {
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
            extentd: { num: '', levels: '' }
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
