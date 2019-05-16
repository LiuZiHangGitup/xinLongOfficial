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
            <p>仪器计量校准服务-玻璃器皿类</p>
          </span>
        </div>
        <div class="content-con">
          <span class="contecon-title">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;严格按照《中华人民共和国计量法》及有关计量法规的要求，相关检定规程、校准规范、国标或仪器说明书技术指标的要求等进行全面的校准和/或检测；实验室的校准检测工作完全满足ISO/IEC17025和ISO9000的要求，具完全独立合法的第三方公正法定计量机构，具有向社会出具公正数据等权威资质；
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务内容：温度、力学、化学、长度
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
              <label class="label-text">计量仪器清单</label>
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
        serviceId: '36',
        linkName: '',
        job: '',
        linkPhone: '',
        linkAdd: '',
        remark: ''
      },
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
