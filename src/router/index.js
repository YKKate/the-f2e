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

// No.3
const No3Layout = resolve => require(['@/components/no.3/Layout'], resolve)
const No3PageDemo = resolve => require(['@/components/no.3/Demo'], resolve)
const No3PageIndex = resolve => require(['@/components/no.3/PageIndex'], resolve)
const No3PageOrders = resolve => require(['@/components/no.3/PageOrders'], resolve)
const No3PageProduct = resolve => require(['@/components/no.3/PageProduct'], resolve)

// No.4
const No4Layout = resolve => require(['@/components/no.4/Layout'], resolve)
const No4PageIndex = resolve => require(['@/components/no.4/PageIndex'], resolve)

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
      component: No2Layout,
      children: [
        {
          path: '/',
          name: 'No2Index',
          component: No2PageIndex
        }
      ]
    },
    {
      path: '/no3/',
      component: No3Layout,
      children: [
        {
          path: 'demo',
          name: 'No3Demo',
          component: No3PageDemo
        },
        {
          path: '/',
          name: 'No3Index',
          component: No3PageIndex
        },
        {
          path: '/orders',
          name: 'No3Orders',
          component: No3PageOrders
        },
        {
          path: '/product',
          name: 'No3Product',
          component: No3PageProduct
        }
      ]
    },
    {
      path: '/no4',
      component: No4Layout,
      children: [
        {
          path: '/',
          name: 'No4Index',
          component: No4PageIndex
        }
      ]
    }
  ]
})
