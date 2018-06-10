import Vue from 'vue'
import Router from 'vue-router'

const PageIndex = resolve => require(['@/components/PageIndex'], resolve)
const No1Index = resolve => require(['@/components/no.1/Layout'], resolve)
const No1PageMyTask = resolve => require(['@/components/no.1/PageMyTask'], resolve)
const No1PageInProgress = resolve => require(['@/components/no.1/PageInProgress'], resolve)
const No1PageCompleted = resolve => require(['@/components/no.1/PageCompleted'], resolve)

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
    }
  ]
})
