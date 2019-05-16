<template>
  <div class="recommend">
    <div class="home-news-bg">
      <!-- 赞助商模块 -->
      <div class="container sponsors">
        <div class="home-news">
          <div class="home-news-title">
            <ul>
              <li
                :class="{titleCurrent:index == isShow}"
                @mouseenter="hoverTab(index)"
                v-for="(items, index) in news"
                :key="index"
              >
                <span>{{items.title}}</span>
              </li>
            </ul>
          </div>
          <div class="home-news-content">
            <div
              v-for="(items, index) in news"
              :key="index"
              :style="{display:isShow===index?'block':'none'}"
            >
              <div class="news-time">
                <p class="year">{{items.year}}</p>
                <p class="month-day">{{items.monthDay}}</p>
              </div>
              <div class="home-news-hot" v-for="(item, idx) in items.newsHot" :key="idx">
                <h1>
                  <a :href="item.url">{{item.title}}</a>
                </h1>
                <div class="text-warp">{{item.info}}</div>
                <a :href="item.url" class="more">更多 ></a>
              </div>
              <div class="home-news-list">
                <ul>
                  <li v-for="(value, number) in items.newsList" :key="number">
                    <a :href="value.url">{{value.title}}</a>
                    <span>{{value.time}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="sponsors-top">
          <img src="@/assets/images/indexCenter.png">
        </div>
      </div>
    </div>
    <div class="sponsors-bottom container">
      <img src="@/assets/images/two_sponsors_1.jpg">
      <img src="@/assets/images/two_sponsors_2.jpg">
      <img src="@/assets/images/two_sponsors_3.jpg">
      <img src="@/assets/images/two_sponsors_4.jpg">
      <img src="@/assets/images/two_sponsors_5.jpg">
      <img src="@/assets/images/two_sponsors_6.jpg">
      <img src="@/assets/images/two_sponsors_7.jpg">
      <img src="@/assets/images/two_sponsors_8.jpg">
      <img src="@/assets/images/two_sponsors_9.jpg">
      <img src="@/assets/images/two_sponsors_10.jpg">
      <img src="@/assets/images/two_sponsors_11.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsa',
  data () {
    return {
      isShow: 0,
      news: [
        {
          title: '行业资讯',
          year: '2019',
          monthDay: '12.13',
          newsHot: [
            { title: '河北新隆检测技术服务有限责任公司', info: '是一家以客户为中心以技术为导向的全方位实验室综合服务公司，致力于为客户提供标准规范的实验室全面管理服务。实验室设计、规划、改造，整体实验室的运营，整体实验室搬迁', url: '#' }
          ],
          newsList: [
            { title: '2018第二届北京亦庄生物学术年会暨生物制药分析技术论坛', time: '2019.03.07', url: '#' },
            { title: '不可不知的实验室危险化学品的分类与管理！！', time: '2019.03.06', url: '#' },
            { title: '国家重点实验室将增至700个', time: '2019.03.05', url: '#' }
          ]
        },
        {
          title: '实验室动态',
          year: '2018',
          monthDay: '12.13',
          newsHot: [
            { title: '河北新隆检测技术服务有限责任公司', info: '是一家以客户为中心以技术为导向的全方位实验室综合服务公司，致力于为客户提供标准规范的实验室全面管理服务。实验室设计、规划、改造，整体实验室的运营，整体实验室搬迁', url: '#' }
          ],
          newsList: [
            { title: '2018第二届北京亦庄生物学术年会暨生物制药分析技术论坛', time: '2019.03.07', url: '#' },
            { title: '不可不知的实验室危险化学品的分类与管理！！', time: '2019.03.06', url: '#' },
            { title: '国家重点实验室将增至700个', time: '2019.03.05', url: '#' }
          ]
        },
        {
          title: '会议会展',
          year: '2017',
          monthDay: '12.13',
          newsHot: [
            { title: '河北新隆检测技术服务有限责任公司', info: '是一家以客户为中心以技术为导向的全方位实验室综合服务公司，致力于为客户提供标准规范的实验室全面管理服务。实验室设计、规划、改造，整体实验室的运营，整体实验室搬迁', url: '#' }
          ],
          newsList: [
            { title: '2018第二届北京亦庄生物学术年会暨生物制药分析技术论坛', time: '2019.03.07', url: '#' },
            { title: '不可不知的实验室危险化学品的分类与管理！！', time: '2019.03.06', url: '#' },
            { title: '国家重点实验室将增至700个', time: '2019.03.05', url: '#' }
          ]
        }
      ]
    }
  },
  methods: {
    hoverTab (index) {
      this.isShow = index
    }
  }
}
</script>

<style scoped>
.recommend {
  width: 100%;
}
.home-news-bg {
  background-color: #fafafa;
  width: 100%;
}
.home-news {
  position: absolute;
  left: 0;
  top: -57px;
  z-index: 11;
  width: 1200px;
  height: 220px;
  background-color: #ffffff;
  border-bottom: 2px solid #f1f1f1;
}
.home-news-title {
  position: absolute;
  left: 222px;
  top: -38px;
  z-index: 11;
  width: 978px;
  height: 38px;
  line-height: 38px;
}
.home-news-title li {
  float: left;
}
.home-news-title li span {
  padding: 0 40px;
  color: #ffffff;
  display: inline-block;
}
.home-news-title li span:hover {
  cursor: pointer;
}
.home-news-title li.titleCurrent {
  background-color: #ffffff;
}
.home-news-title li.titleCurrent span {
  color: #f49800;
  background: url("../../../assets/images/arrows.jpg") no-repeat center bottom;
}
.home-news-content {
  margin: 40px 40px 22px 40px;
}
.home-news-content a:hover {
  text-decoration: none;
  color: #f49900;
}
.news-time {
  border: 2px solid #f5f4f0;
  width: 104px;
  height: 126px;
  text-align: center;
  font-family: "Microsoft YaHei";
  float: left;
}
.news-time .year {
  font-size: 20px;
  margin: 34px 0 4px 0;
}
.month-day {
  font-size: 28px;
  font-weight: 700;
}
.home-news-hot {
  float: left;
  width: 406px;
  margin: 0 44px 0 28px;
}
.home-news-hot h1 {
  background: url("../../../assets/images/circle.jpg") no-repeat center left;
  padding-left: 15px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-news-hot h1 a {
  font-weight: normal;
  font-size: 20px;
}
.text-warp {
  font-size: 15px;
  margin: 10px 0;
  line-height: 22px;
}
.more {
  color: #373634;
  font-size: 12px;
}
.home-news-list {
  width: 534px;
  float: left;
}
.home-news-list ul li {
  background: url("../../../assets/images/circle.jpg") no-repeat center left;
  padding-left: 15px;
  height: 36px;
  line-height: 36px;
}
.home-news-list a {
  font-size: 15px;
  display: inline-block;
  width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-news-list span {
  float: right;
  width: 75px;
}
/* 赞助商模块 */
.sponsors {
  overflow: visible;
  position: relative;
}
.sponsors-top img {
  display: inline;
}
.sponsors-top {
  text-align: justify;
  text-align-last: justify;
  line-height: 0;
  padding-top: 165px;
}
.sponsors-bottom {
  text-align: justify;
  text-align-last: justify;
  line-height: 0;
  margin: 64px auto 55px auto;
  border-right: 1px solid #eaeaea;
  display: flex;
}
.sponsors-bottom img {
  flex: 1;
  -ms-flex: 1;
  -webkit-box-flex: 1;
  float: left;
  border-left: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
</style>
