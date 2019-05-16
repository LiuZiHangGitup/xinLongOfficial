<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/about.jpg" alt>
      <div class="banner_text">
        <span>关于我们</span>
      </div>
    </div>
    <div class="aboutTitle">
      <span>关于我们</span>
    </div>
    <div class="content content-bom clearfix container">
      <p>河北新隆检测技术服务有限责任公司是一家以客户为中心以技术为导向的全方位综合服务公司，致力于为客户提供标准规范实验室全面管理服务。</p>
      <br>
      <p class="container-orange">我们提供实验室一站式服务平台</p>
      <br>
      <p>新隆检测科技有限公司作为仪器行业专业的服务商，志在连接用户和品牌供应商的一切核心需要，“专业、可靠、方便、快捷”是四面体平台的运营理念，助力用户降低运营成本、提升价值、用互联网+塑造品牌形象；新隆检测经营的产品均为正品行货、质量可靠、价格优惠、配送及时、售后保障，符合阳光采购、一站式服务的时代需求。</p>
    </div>
    <div class="about-us">
      <img src="@/assets/images/aboutUs.png" alt>
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
      number: null, // 一级分类索引
      isShowSub: null, // 二级分类索引
      isShow: 0, // 是否显示子类
      category: [
        {
          name: '仪器计量校准服务',
          categorySub: [
            { name: '玻璃器皿类' },
            { name: '精密仪器类' },
            { name: '常规仪器类' },
            { name: '仪器带证书销售' }
          ]
        }
      ]
    }
  },
  methods: {
    clickCategory (index) {
      this.isShow = index
    },
    clickCategorySub (index, idx) {
      this.number = index
      this.isShowSub = idx
    }
  }
}
</script>
<style scoped>
.container p {
  box-sizing: border-box;
  text-indent: 2em;
  font-size: 15px;
}
.container-orange {
  font-size: 17px !important;
  color: orange;
  font-weight: bolder;
}
.aboutTitle {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-top: 50px;
}
.aboutTitle span {
  display: inline-block;
  padding: 10px 50px;
  border-bottom: 5px solid orange;
  font-size: 35px;
  box-sizing: border-box;
}
.about-us {
  margin-left: 450px;
  margin-top: -200px;
}
</style>
