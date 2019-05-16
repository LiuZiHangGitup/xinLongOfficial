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
            <p>培训和方法开发服务——仪器培训操作</p>
          </span>
        </div>
        <div class="content-con">
          <span
            class="contecon-title"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据客户要求工程师上门为客户提供一对一的仪器操作培训</span>
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
import { constants } from 'fs';
export default {
  components: { footers, headers },
  data () {
    return {
      formData: {
        serviceId: '7',
        linkName: '',
        job: '',
        linkPhone: '',
        linkAdd: '',
        remark: ''
      },
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
        [0, 0, 0]
      ]
    }
  },
  methods: {
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
