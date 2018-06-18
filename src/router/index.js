import Vue from 'vue'
import Router from 'vue-router'

const PageIndex = resolve => require(['@/components/PageIndex'], resolve)

// No.1
const No1Index = resolve => require(['@/components/no.1/Layout'], resolve)
const No1PageMyTask = resolve => require(['@/components/no.1/PageMyTask'], resolve)
const No1PageInProgress = resolve => require(['@/components/no.1/PageInProgress'], resolve)
const No1PageCompleted = resolve => require(['@/components/no.1/PageCompleted'], resolve)

// No.2
const No2Layout = resolve => require(['@/components/no.2/Layout'], resolve)
const No2PageIndex = resolve => require(['@/components/no.2/PageIndex'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex
    },
    {
      path: '/no1',
      name: 'no1',
      component: No1Index,
      children: [
        {
          path: 'my-task',
          name: 'No1MyTask',
          component: No1PageMyTask
        },
        {
          path: 'in-progress',
          name: 'No1InProgress',
          component: No1PageInProgress
        },
        {
          path: 'completed',
          name: 'No1Completed',
          component: No1PageCompleted
        }
      ]
    },
    {
      path: '/no2',
      name: 'no2',
      component: No2Layout,
      children: [
        {
          path: '/',
          name: 'No2Index',
          component: No2PageIndex
        }
      ]
    }
  ]
})
