<template>
  <div class="home-content">
    <topsearch></topsearch>
    <headers class="por"></headers>
    <div class="nav-levels" @mouseleave="leave()">
      <div class="nav-second-level">
        <ul v-for="(items,index) in productsServices" :key="index" @mouseenter="enter(index)">
          <span :class="{current:index == current}">{{items.name}}</span>
          <li v-for="(item,idx) in items.subclass" :key="idx">
            <a
              href="javascript:void(0);"
              @click="popup(items)"
              :class="{active:idx == active && index == current}"
              @mouseenter="subEnter(index,idx)"
            >{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="nav-three-level">
        <div class="nav-level" v-for="(items,index) in productsServices" :key="index">
          <div
            v-for="(item,idx) in items.subclass"
            :key="idx"
            :style="{display:(idx == active && index == current)?'block':'none'}"
          >
            <h5>
              <a href="javascript:void(0);" @click="popup(item)">{{item.name}}</a>
            </h5>
            <p>
              <img src="@/assets/images/arrows_left.jpg" alt>
            </p>
            <div class="subclass">
              <li v-for="(subclass,number) in item.subclass" :key="number">
                <i></i>
                <a href="javascript:void(0);" @click="popup(subclass)">{{subclass.name}}</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <left-menu :logo="dataScouce"></left-menu>
    <div class="banner">
      <img src="@/assets/images/banner.jpg" alt>
    </div>
    <newsa></newsa>
    <div class="backgroudColor">
      <!-- 实验室服务 -->
      <div class="machine">
        <div class="machine-title">
          实验室服务
          <span>Laboratory service</span>
        </div>
        <div class="machine-content">
          <div class="machine-left">
            <img src="@/assets/images/laboratory.jpg">
          </div>
          <div class="machine-right">
            <div class="machrigh-content">
              <img src="@/assets/images/laboratory_1.jpg">
              <p class="machrigh-title">实验室托管</p>
              <p class="machrigh-text">提供标准化、规范化的实验室托管</p>
            </div>
            <div class="machrigh-content">
              <img src="@/assets/images/laboratory_2.jpg">
              <p class="machrigh-title">实验室搬迁</p>
              <p class="machrigh-text">实验室仪器的一站式搬迁服务</p>
            </div>
            <div class="machrigh-content">
              <img src="@/assets/images/laboratory_3.jpg">
              <p class="machrigh-title">实验室改造</p>
              <p class="machrigh-text">专业实验室装修队伍</p>
            </div>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/laboratory_4.jpg">
            <p class="machrigh-title">培训和方法开发</p>
            <p class="machrigh-text">丰富的经验，专业的技术，全称手把手培训</p>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/laboratory_5.jpg">
            <p class="machrigh-title">实验室认证</p>
            <p class="machrigh-text">CMA认证、CANS认证、农业系统双认证、水厂42项</p>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/laboratory_6.jpg">
            <p class="machrigh-title">仪器计量校准</p>
            <p class="machrigh-text">完全独立合法的第三方公正法定计量机构</p>
          </div>
        </div>
      </div>
      <!-- 仪器售后 -->
      <div class="machine machine-space">
        <div class="machine-title">
          仪器售后
          <span>Machine after sale</span>
        </div>
        <div class="machine-content">
          <div class="machine-left">
            <img src="@/assets/images/instrument.jpg">
          </div>
          <div class="machine-right">
            <div class="machrigh-content">
              <img src="@/assets/images/instrument_1.jpg">
              <p class="machrigh-title">深度维护保养</p>
              <p class="machrigh-text">专业提供厂家级别的深度维护保养让设备焕然一新</p>
            </div>
            <div class="machrigh-content">
              <img src="@/assets/images/instrument_2.jpg">
              <p class="machrigh-title">年度维护保养</p>
              <p class="machrigh-text">年度保养让你对使用仪器高枕无忧</p>
            </div>
            <div class="machrigh-content">
              <img src="@/assets/images/instrument_3.jpg">
              <p class="machrigh-title">仪器故障维修</p>
              <p class="machrigh-text">为您提供原厂品质的仪器故障检修服务</p>
            </div>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/instrument_4.jpg">
            <p class="machrigh-title">仪器升级服务</p>
            <p class="machrigh-text">为您量身打造高效的升级方案</p>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/instrument_5.jpg">
            <p class="machrigh-title">仪器定制服务</p>
            <p class="machrigh-text">根据客户要求提供非常规的定制仪器</p>
          </div>
          <div class="machrigh-content matp">
            <img src="@/assets/images/instrument_6.jpg">
            <p class="machrigh-title">精密仪器租赁</p>
            <p class="machrigh-text">企业可以根据自身经营情况，选择短租、长租、变租为购</p>
          </div>
        </div>
      </div>
      <!-- 耗材商城 -->
      <div class="consumable">
        <div class="machine-title">
          耗材商城
          <span>Machine after sale</span>
        </div>
        <div class="machine-content">
          <div class="machine-left consumable-border">
            <img src="@/assets/images/consumable.jpg">
            <div class="consumable-tab">
              <div v-for="(item,i) in shoping" :key="i" @click="consumableTab(i)">
                <div class="contab-item" v-bind:class="{tabActive:i==index}">{{item.title}}</div>
              </div>
            </div>
          </div>
          <div id="tab-one">
            <div
              v-for="(item,j) in shoping"
              :key="j"
              v-bind:style="{display:j===index?'block':'none'}"
            >
              <div
                class="consumable-content"
                v-bind:class="{matp:option.show}"
                v-for="option in item.list"
                :key="option.price"
              >
                <!-- <img src="@/assets/images/consumable_1.jpg"> -->
                <!-- <img src="../../assets/images/consumable_1.jpg"> -->
                <span>
                  <img :src="option.consumaimg">
                </span>
                <p class="consumable-title">{{option.consumaTitle}}</p>
                <div class="consumable-text">
                  <span>{{option.consumaText}}</span>
                  <span class="consum-left">￥{{option.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="context-footer"></div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import topsearch from '@/components/header/search'
import headers from '@/components/header'
import newsa from '@/components/header/components/news'
import footers from '@/components/footer'
import shopcart from '@/components/shopcart'
export default {
  components: { topsearch, headers, newsa, footers, shopcart },
  data () {
    return {
      current: null, // 二级导航添加class名
      active: null, // 三级导航添加class名
      dataScouce: '组件传值', // 组件传值
      productsServices: [ // 产品与服务 分类
        {
          name: '实验室服务', // 二级分类
          subclass: [
            {
              name: '实验室整体托管', // 三级分类
              path: '/experiment/trusteeship',
              subclass: [] // 四级分类
            },
            {
              name: '实验室整体搬迁和移机服务',
              subclass: [
                { name: '实验室整体搬迁', path: '/exper/moval' },
                { name: '实验室精密仪器移机', path: '' }
              ]
            },
            {
              name: '实验室改造', // 三级分类
              subclass: [ // 四级分类
                { name: '实验室水电改造', path: '/construct/waterElectricity' },
                { name: '实验室通风系统改造', path: '' },
                { name: '实验室功能改造', path: '' }
              ]
            },
            {
              name: '培训和方法开发服务',
              subclass: [
                { name: '实验室功能改造', path: '/training/course/theory' },
                { name: '仪器维修培训', path: '' },
                { name: '高级维修培训', path: '' },
                { name: '国标方法培训', path: '' },
                { name: '检测方法开发', path: '' },
                { name: '客户定制培训', path: '' }
              ]
            }
          ]
        },
        {
          name: '维修和维保服务',
          subclass: [
            {
              name: '仪器维护及保养',
              subclass: [
                { name: '深度维护保养', path: '/maintain/upkeep/upkeep' },
                { name: '一般维护保养', path: '' },
                { name: '年度维护保养', path: '' }
              ]
            },
            {
              name: '仪器故障维修',
              subclass: [
                { name: '硬件故障维修', path: '/maintain/trouble/hardware' },
                { name: '软件故障维修', path: '' },
                { name: '系统故障维修', path: '' }
              ]
            },
            {
              name: '仪器升级服务',
              subclass: [
                { name: '现有仪器升级改造', path: '/maintain/service/existing' },
                { name: '仪器软件系统升级', path: '' },
                { name: '升级网络版', path: '' },
                { name: '仪器客户定制服务', path: '' }
              ]
            },
            {
              name: '精密仪器租赁',
              subclass: [
                { name: '分期付款购买', path: '/maintain/rent/aging' },
                { name: '整机租赁', path: '' },
                { name: '带维保租赁', path: '' }
              ]
            }
          ]
        },
        {
          name: '认证咨询及计量校准服务',
          subclass: [
            {
              name: '实验室认证咨询',
              subclass: [
                { name: 'CMA认证', path: '/authentication/cma' },
                { name: 'CNAS认证', path: '' },
                { name: '农业系统双认证', path: '' },
                { name: '水厂42项', path: '' }
              ]
            },
            {
              name: '仪器计量校准服务',
              subclass: [
                { name: '玻璃器皿类', path: '/measure/glassware' },
                { name: '精密仪器类', path: '' },
                { name: '常规仪器类', path: '' },
                { name: '仪器带证书销售', path: '' }
              ]
            }
          ]
        },
        {
          name: '备件耗材商城',
          subclass: [
            {
              name: '色谱专用配件',
              subclass: []
            },
            {
              name: '色谱柱',
              subclass: []
            },
            {
              name: '固相萃取小柱',
              subclass: []
            },
            {
              name: '过滤产品',
              subclass: []
            }
          ]
        }
      ],
      // 控制显示
      index: 0,
      shoping: [
        {
          title: '色谱专用配件',
          list: [
            {
              consumaimg: require('../../assets/images/shop_list2.jpg'),
              consumaTitle: '衬管',
              consumaText: 'S221-75193',
              price: 1360
            },
            {
              consumaimg: require('../../assets/images/shop_list3.jpg'),
              consumaTitle: '衬管',
              consumaText: 'S221-75197',
              price: 1840
            },
            {
              consumaimg: require('../../assets/images/shop_list7.jpg'),
              consumaTitle: '进样口隔垫',
              consumaText: '201-35584',
              price: 84
            },
            {
              show: true,
              consumaimg: require('../../assets/images/shop_list1.jpg'),
              consumaTitle: 'O型圈',
              consumaText: 'S227-35005-01',
              price: 320
            }]
        },
        {
          title: '色谱柱',
          list: [
            {
              consumaimg: require('../../assets/images/shop_list14.jpg'),
              consumaTitle: 'Vensuil MP C18',
              consumaText: 'VA952505-0',
              price: 3190
            }]
        },
        {
          title: '固相萃取小柱',
          list: [
            {
              consumaimg: require('../../assets/images/shop_list15.jpg'),
              consumaTitle: 'Florisil',
              consumaText: 'FS0006',
              price: 357
            },
            {
              consumaimg: require('../../assets/images/shop_list16.jpg'),
              consumaTitle: '黄曲霉毒素总量免疫亲和柱',
              consumaText: 'BAC09001',
              price: 357
            }]
        },
        {
          title: '过滤产品',
          list: [
            {
              consumaimg: require('../../assets/images/shop_list17.jpg'),
              consumaTitle: '针筒过滤器水系(MCM)不印字',
              consumaText: 'AS011320-NZT',
              price: 123
            }]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    // 选显卡切换
    consumableTab: function (i) {
      this.index = i
    },
    enter (index) {
      this.current = index
    },
    leave (event) {
      this.current = null
      this.active = null
    },
    subEnter (index, idx) {
      this.active = idx
      this.current = index
    },
    popup (item) {
      console.log(item)
      if (item.path) {
        this.$router.push({ path: item.path })
      } else {
        alert('请拨打客服热线：400-350-1103')
      }
    }
  }
}
</script>
<style scoped>
.home-content {
  width: 100%;
  overflow: hidden;
}
/* 背景颜色 */
.backgroudColor {
  padding-top: 46px;
  background-color: #eeeeee;
}
/* tab动态加入css */
.matp {
  margin-top: 16px;
}
/* 仪器售后和实验室服务模块 */
.machine {
  height: 530px;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
}
.machine-title {
  /* margin-top: 15px; */
  padding-top: 12px;
  font-size: 18px;
  margin-left: 12px;
}
.machine-title span {
  color: #bababa;
}
.machine-content {
  margin-top: 18px;
  overflow: hidden;
}
.machine-left {
  float: left;
  overflow: hidden;
}
.machine-right {
  margin-left: 4px;
  overflow: hidden;
}
.machrigh-content {
  height: 222px;
  background-color: #f7f7f7;
  text-align: center;
  float: left;
  margin-left: 26px;
}
.machrigh-title {
  font-size: 17px;
  margin-top: 18px;
}
.machrigh-text {
  font-size: 12px;
  color: #bababa;
  margin-top: 10px;
}
.machine-mt {
  margin-top: 19px;
}
.machine-space {
  margin-top: 66px;
}
/* 耗材商城模块 */
.consumable {
  height: 524px;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 66px;
  background-color: #fff;
}
.consumable-border {
  border: 1px solid #cbcbcb;
}
/* 选项卡切换 */
.consumable-tab {
  padding-top: 30px;
  height: 260px;
  text-align: center;
}
.consumable-tab div {
  margin-bottom: 20px;
}
.contab-item {
  line-height: 36px;
  height: 36px;
  width: 80%;
  font-size: 18px;
  margin: 0 auto;
  box-sizing: border-box;
  cursor: pointer;
}
/* 切换内容 */
.consumable-mt {
  margin-top: 19px;
}
.consumable-content {
  height: 220px;
  width: 284px;
  margin-left: 28px;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  display: inline-block;
}
.consumable-content span {
  height: 168px;
  overflow: hidden;
  display: block;
}
.consumable-text span {
  display: inline-block !important;
}
.consumable-content span img {
  width: 100%;
  height: 168px;
  display: block;
}
.consumable-title {
  padding-left: 12px;
  font-size: 14px;
  text-align: left;
}
.consumable-text {
  padding-left: 12px;
  /* padding-top: 4px; */
  font-size: 14px;
  color: #656565;
  text-align: left;
}
.tabActive {
  border: 1px solid #cacaca;
  color: #f49800;
  border-left: 0px;
  border-right: 0px;
}
.consum-left {
  float: right;
  text-align: right;
  margin-right: 10px;
  color: #ff6600;
  font-weight: 800;
}
.context-footer {
  height: 72px;
  background-color: #eee;
}
/* 购物车 */
.shoping-cart {
  background-color: #333333;
  position: fixed;
  top: 0;
  right: 0px;
  height: 100%;
  z-index: 999;
}
/* 下拉导航 */
.nav-levels {
  width: 1200px;
  position: relative;
  margin: 0 auto;
}
.nav-second-level {
  text-align: center;
  width: 222px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 490px;
  overflow: hidden;
}
.nav-second-level ul {
  border-bottom: 1px solid #b6b6b6;
  margin: 10px 15px;
}
.nav-second-level ul:last-child {
  border-bottom: 0;
}
.nav-second-level ul span {
  display: block;
  font-size: 16px;
  color: #b6b4b7;
  margin-bottom: 2px;
}
.nav-second-level ul span.current {
  color: #ffffff;
}
.nav-second-level li a {
  font-size: 12px;
  color: #b6b4b7;
  display: block;
}
.nav-second-level li a.active {
  color: #f29900;
}
.nav-three-level {
  background-color: #ffffff;
  position: absolute;
  left: 222px;
  top: 0;
  z-index: 1;
  height: 452px;
}
.nav-level {
  overflow: hidden;
}
.nav-level div {
  min-height: 28px;
  margin: 30px 25px;
  overflow: hidden;
  width: 928px;
}
.nav-level h5 {
  color: #4a4947;
  float: left;
}
.nav-level p {
  float: left;
  margin: 7px;
}
.nav-level div.subclass {
  border-bottom: 1px solid #d0d0d0;
  overflow: hidden;
  padding-bottom: 5px;
  margin: 0;
  width: auto;
}
.subclass li {
  float: left;
  line-height: 28px;
}
.subclass li i {
  height: 16px;
  width: 1px;
  background: #d0d0d0;
  float: left;
  margin-top: 6px;
}
.subclass li a {
  color: #686868;
  font-size: 12px;
  margin: 0 8px;
  float: left;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.machrigh-content img {
  height: 126px;
  width: 284px;
}
</style>
