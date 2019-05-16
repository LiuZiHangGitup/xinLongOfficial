import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      base: module,
      name: 'index',
      component: () => import('@/view/index/index')
    },
    {
      path: '/login',
      base: module,
      name: 'login',
      component: () => import('@/view/login/index')
    },
    { // 关于我们
      path: '/about',
      base: module,
      name: 'about',
      component: () => import('@/view/about/index')
    },
    { // 1实验室服务
      path: '/experiment',
      base: module,
      name: 'moval',
      component: () => import('@/view/experiment/index')
    },
    { // 1实验室服务
      path: '/experiment/trusteeship',
      base: module,
      name: 'moval',
      component: () => import('@/view/experiment/trusteeship/index')
    },
    { // 实验室服务
      path: '/exper/moval',
      base: module,
      name: 'moval',
      component: () => import('@/view/experiment/exper/moval')
    },
    {
      path: '/construct/waterElectricity',
      base: module,
      name: 'waterElectricity',
      component: () => import('@/view/experiment/construct/waterElectricity')
    },
    {
      path: '/caseShow/caseshow',
      base: module,
      name: 'caseshow',
      component: () => import('@/view/caseShow/caseshow')
    },
    // { // 实验室整体搬迁
    //   path: '/experiment',
    //   base: module,
    //   name: 'experiment',
    //   component: () => import('@/view/experiment/moval'),
    //   children: [
    //     {name: 'moval', path: '/exper/moval', component: () => import('@/view/experiment/exper/moval')},
    //     {name: 'handle', path: '/educate/handle', component: () => import('@/view/experiment/educate/handle')}
    //   ]
    // },
    { // 1维修维保
      path: '/maintain',
      base: module,
      name: 'moval',
      component: () => import('@/view/maintain/index')
    },
    //2仪器维护及保养
    { // 3深度维修保养
      path: '/maintain/upkeep/upkeep',
      base: module,
      name: 'maintainUpkeepUpkeep',
      component: () => import('@/view/maintain/upkeep/upkeep')
    },
    { // 3硬件故障维修
      path: '/maintain/trouble/hardware',
      base: module,
      name: 'maintainTroubleHardware',
      component: () => import('@/view/maintain/trouble/hardware')
    },
    { // 3现有仪器升级改造
      path: '/maintain/service/existing',
      base: module,
      name: 'maintainServiceExisting',
      component: () => import('@/view/maintain/service/existing')
    },
    { // 3整机租赁
      path: '/maintain/rent/aging',
      base: module,
      name: 'maintainRentAging',
      component: () => import('@/view/maintain/rent/aging')
    },
    { // 计量校准
      path: '/measure',
      base: module,
      name: 'measure',
      component: () => import('@/view/measure/index')
    },
    { // 计量校准子文件夹
      path: '/measure/glassware',
      base: module,
      name: 'measureGlassware',
      component: () => import('@/view/measure/service/glassware')
    },
    { // 认证咨询
      path: '/authentication',
      base: module,
      name: 'cmadmit',
      component: () => import('@/view/authentication/index')
    },
    { // 实验室认证咨询
      path: '/authentication/cma',
      base: module,
      name: 'authenticationCma',
      component: () => import('@/view/authentication/service/cma')
    },
    { // 1培训开发
      path: '/training',
      base: module,
      name: 'moval',
      component: () => import('@/view/training/index')
    },
    { // 培训开发
      path: '/training/course/theory',
      base: module,
      name: 'trainingCourseTheory',
      component: () => import('@/view/training/course/theory')
    },
    { // 备件耗材
      path: '/consumable',
      base: module,
      name: 'consumable',
      component: () => import('@/view/consumable/index')
    }
  ]
})
