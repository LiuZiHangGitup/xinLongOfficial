<template>
  <div class="left clearfix">
    <div class="content-place">{{category[0][0]}}</div>
    <div class="content-tabs">
      <ul>
        <li v-for="(items, index) in category[1]" :key="index" class="item">
          <span @click="clickCategory(index,items)">
            <i></i>
            {{items.name}}
          </span>
          <ul class="content-tabs-sub" :style="{display:index == isShowSub?'block':'none'}">
            <li
              v-for="(item, idx) in items.categorySub"
              :key="idx"
              @click="clickCategorySub(index,idx)"
            >
              <i></i>
              <p :class="{current:index == number && idx == subIdx}">{{item.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      number: null, // 一级分类索引
      subIdx: null, // 二级分类索引
      isShowSub: 0 // 是否显示子类
    }
  },
  props: ['category'],
  created: function () {
    this.isShowSub = this.category[3][0]
    this.number = this.category[3][1]
    this.subIdx = this.category[3][2]
  },
  methods: {
    clickCategory (index, items) {
      this.isShowSub = index
      if (items.path) {
        this.$router.push({ path: items.path })
      } else if (items.categorySub == '') {
        alert('请拨打客服热线：400-350-1103')
      }
    },
    // 页面进入初始化一次，防止点击之后有冲突
    showCategorySub (index, idx) {
      this.number = index
      this.subIdx = idx
    },
    // 发生点击事件跳转路由
    clickCategorySub (index, idx) {
      var that = this
      that.number = index
      that.subIdx = idx
      let rot = '/' + that.category[2][index].title + '/' + that.category[2][index].pathAry[idx]
      if (that.category[2][index].pathAry[idx] === '') {
        this.number = null
        this.subIdx = null
        alert('请拨打客服热线：400-350-1103')
      } else {
        that.$router.push({ path: rot })
      }
    }
  }
}
</script>
<style scoped>
</style>
