<template>
  <div>
    <headers></headers>
    <div class="banner clearfix">
      <img src="@/assets/images/consumabled.jpg" alt>
    </div>
    <div class="content content-bom clearfix container">
      <div class="left clearfix">
        <div class="content-place">备件耗材商城</div>
        <div class="content-tabs">
          <ul>
            <li v-for="(items, index) in category" :key="index" class="item">
              <span @click="clickCategory(index)">
                <i></i>
                {{items.name}}
              </span>
              <ul class="content-tabs-sub" :style="{display:index == isShow?'block':'none'}">
                <li
                  :class="{current:index == number && idx == isShowSub}"
                  v-for="(item, idx) in items.categorySub"
                  :key="idx"
                  @click="clickCategorySub(index,idx)"
                >
                  <i></i>
                  {{item.name}}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="right clearfix">
        <div class="content-title">
          <span>
            <p>维修类耗材</p>
          </span>
        </div>
        <div class="content-con">
          <div>您已选择 ></div>
          <div class="consumaselect-border">
            <div class="comcontabs-select">
              <div class="comcontabs-class">按类型</div>
              <div class="comconitem-val">色谱</div>
              <div class="comconitem-val">质谱</div>
              <div class="comconitem-val">光谱</div>
            </div>
            <div class="comcontabs-select">
              <div class="comcontabs-class">按品牌</div>
              <div class="comconitem-val">热电</div>
              <div class="comconitem-val">安捷伦</div>
              <div class="comconitem-val">岛津</div>
              <div class="comconitem-val">沃斯特</div>
              <div class="comconitem-val comconitem-active">日立</div>
              <div class="comconitem-val">PE</div>
              <div class="comconitem-val">耶拿</div>
            </div>
          </div>
          <div class="materials">
            <div class="good" v-for="(item,index) in shoplist" :key="index">
              <div class="good-img">
                <img :src="item.url">
              </div>
              <div class="good-info">
                <p>{{ item.name }}</p>
                <p>货号:{{ item.huoHao }}</p>
                <p>价格:{{ item.price }}</p>
              </div>
              <div class="good-button">立即咨询</div>
            </div>
          </div>
        </div>
        <div class="materialsc-bottom">★★★耗材上门安装服务 （购买维修类耗材提供免费安装服务）</div>
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
      number: null, // 一级分类索引
      isShowSub: null, // 二级分类索引
      isShow: 0, // 是否显示子类
      category: [
        {
          name: '常规类耗材',
          categorySub: []
        },
        {
          name: '维修类耗材',
          categorySub: []
        }
      ],
      shoplist: [
        { name: '衬管', url: require('../../assets/images/shop_list2.jpg'), huoHao: 'S221-75193', price: '1360' },
        { name: '衬管', url: require('../../assets/images/shop_list3.jpg'), huoHao: 'S221-75197', price: '1360' },
        { name: '进样口隔垫', url: require('../../assets/images/shop_list7.jpg'), huoHao: '201-35584', price: '84' },
        { name: 'O型圈', url: require('../../assets/images/shop_list1.jpg'), huoHao: 'S227-35005-01', price: '320' },
        { name: '石墨压环', url: require('../../assets/images/shop_list9.jpg'), huoHao: 'S227-35006-01', price: '565' },
        { name: '石墨压环', url: require('../../assets/images/shop_list9.jpg'), huoHao: 'S227-35009-01', price: '565' },
        { name: '进样针', url: require('../../assets/images/shop_list8.jpg'), huoHao: 'S221-34618', price: '617' },
        { name: '柱塞密封垫', url: require('../../assets/images/shop_list13.jpg'), huoHao: '228-35145', price: '892' },
        { name: '柱塞密封垫', url: require('../../assets/images/shop_list13.jpg'), huoHao: '228-35146', price: '667' },
        { name: '单向阀', url: require('../../assets/images/shop_list4.jpg'), huoHao: '228-48249-96', price: '2061' },
        { name: '单向阀', url: require('../../assets/images/shop_list4.jpg'), huoHao: '228-48249-42', price: '2055' },
        { name: '单向阀', url: require('../../assets/images/shop_list4.jpg'), huoHao: '228-45705-91', price: '2102' },
        { name: '清洗密封', url: require('../../assets/images/shop_list10.jpg'), huoHao: '228-35935', price: '96' },
        { name: '吸滤头', url: require('../../assets/images/shop_list12.jpg'), huoHao: '228-45707-91', price: '482' },
        { name: '进样针', url: require('../../assets/images/shop_list8.jpg'), huoHao: '670-12554-01', price: '466' },
        { name: '氘灯', url: require('../../assets/images/shop_list5.jpg'), huoHao: '228-34016', price: '4738' },
        { name: '氘灯', url: require('../../assets/images/shop_list5.jpg'), huoHao: '228-34016-02', price: '4512' },
        { name: '钨灯', url: require('../../assets/images/shop_list11.jpg'), huoHao: '228-34410-91', price: '400' },
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
<style lang="css" scoped>
.good {
  width: 215px;
  height: 380px;
  border: 1px solid #e8e8e8;
  padding: 15px;
  box-sizing: border-box;
  transition: 0.3s all ease;
  float: left;
  margin-right: 10px;
  margin-bottom: 20px;
  color: #333333;
}
.good:nth-child(4n) {
  margin-right: 0px;
}
.good:hover {
  background-color: #32e4fd;
}
.good-img {
  width: 185px;
  height: 185px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
}
.good-img img {
  width: 100%;
  height: 100%;
}
.good-info p:first-child {
  font-weight: bolder;
  letter-spacing: 2px;
  margin: 5px 0px;
}
.good-button {
  width: 150px;
  margin: 20px auto;
  background: #79bdff;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  transition: 0.3s all ease;
}
.good:hover .good-button {
  background: #fff;
  color: #333333;
}
/* 筛选内容 */
.comcontabs-select {
  text-align: center;
  line-height: 46px;
  overflow: hidden;
  border-bottom: 1px dashed #e2eeff;
  border-right: 1px solid #e2eeff;
}
.comcontabs-class {
  float: left;
  background-color: #e2eeff;
  height: 46px;
  width: 91px;
}
.comconitem-val {
  float: left;
  width: 74px;
  padding-left: 24px;
}
.consumaselect-border {
  width: 918px;
  margin-top: 14px;
  border-top: 1px solid #e2eeff;
  border-right: 1px solid #e2eeff;
  border-left: 1px solid #e2eeff;
  box-sizing: border-box;
}
/* 材料商品内容 */
.materials-list {
  width: 170px;
  height: 260px;
  float: left;
  margin-left: 14px;
  margin-top: 14px;
  background-color: #e1b148;
}
.materials-list:nth-child(5n + 1) {
  margin-left: 0px;
}
.materials {
  margin-top: 34px;
  box-sizing: border-box;
}
.materials .materialsc-text {
  /* text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical; */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  /* -webkit-box-orient:vertical; */
  /* white-space: nowrap; */
  /* -o-text-overflow: ellipsis; */
  font-size: 12px;
  line-height: 14px;
  height: 28px;
  -webkit-line-clamp: 2;
}
.materialsc-shoptitle {
  font-size: 12px;
  padding: 8px;
}
.materialsc-btn {
  margin-top: 10px;
  height: 26px;
  line-height: 26px;
  background-color: #fff;
  text-align: justify;
  text-justify: inter-ideograph;
  box-sizing: border-box;
}
.materialsc-ask {
  padding-left: 8px;
  color: #79bdff;
  float: left;
  font-weight: 700;
  position: relative;
}
/* 没有价格的样式 */
.materialsc-buy {
  float: right;
  text-align: right;
  padding-right: 8px;
  background-color: #339fdd;
  color: #fff;
  position: relative;
}
.materialsc-buy::after {
  position: absolute;
  content: "";
  bottom: 0px;
  left: -20px;
  border-top: solid 28px transparent;
  border-left: solid 20px transparent;
  border-bottom: solid 26px #339fdd;
}
/* 有价格的样式 */
.materialsc-collect {
  float: right;
  text-align: right;
  padding-right: 8px;
  background-color: #32e4fd;
  color: #fff;
  position: relative;
}
.materialsc-collect::after {
  position: absolute;
  content: "";
  bottom: 0px;
  left: -20px;
  border-top: solid 28px transparent;
  border-left: solid 20px transparent;
  border-bottom: solid 26px #32e4fd;
}
/* 底部文字 */
.materialsc-bottom {
  width: 100%;
  margin-top: 40px;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  background-color: #efefef;
  color: #df8e00;
  text-align: right;
}
</style>
