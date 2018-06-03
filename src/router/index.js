import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

const PageIndex = resolve => require(['@/components/PageIndex'], resolve)
const PageGeoFencing = resolve => require(['@/components/PageGeoFencing'], resolve)
const PageGeoFencingAdd = resolve => require(['@/components/PageGeoFencingAdd'], resolve)
const PageGeoFencingEdit = resolve => require(['@/components/PageGeoFencingEdit'], resolve)
const PageFleetHistory = resolve => require(['@/components/PageFleetHistory'], resolve)
const PageFleetHistoryInner = resolve => require(['@/components/PageFleetHistoryInner'], resolve)
// const PageFleetHistoryError = resolve => require(['@/components/PageFleetHistoryError'], resolve)
// const PageFleetHistoryAlert = resolve => require(['@/components/PageFleetHistoryAlert'], resolve)
// const PageFleetHistoryParking = resolve => require(['@/components/PageFleetHistoryParking'], resolve)
const PageBicycleFleet = resolve => require(['@/components/PageBicycleFleet'], resolve)
// const PageBicycleFleetStatusParked = resolve => require(['@/components/PageBicycleFleetStatusParked'], resolve)
// const PageAlertUser = resolve => require(['@/components/PageAlertUser'], resolve)
// const PageAlertBicycle = resolve => require(['@/components/PageAlertBicycle'], resolve)
const PageFleetError = resolve => require(['@/components/PageFleetError'], resolve)
const PageFleetContract = resolve => require(['@/components/PageFleetContract'], resolve)
const PageFleetContractInfo = resolve => require(['@/components/PageFleetContractInfo'], resolve)
const PageFleetContractAdd = resolve => require(['@/components/PageFleetContractAdd'], resolve)
const PageFleetContractHistory = resolve => require(['@/components/PageFleetContractHistory'], resolve)
const PageFleetContractHistoryInfo = resolve => require(['@/components/PageFleetContractHistoryInfo'], resolve)
const PageLock = resolve => require(['@/components/PageLock'], resolve)
const PageLockInfo = resolve => require(['@/components/PageLockInfo'], resolve)
const PageLockImport = resolve => require(['@/components/PageLockImport'], resolve)
const PageLockEdit = resolve => require(['@/components/PageLockEdit'], resolve)
const PageUser = resolve => require(['@/components/PageUser'], resolve)
const PageUserInfo = resolve => require(['@/components/PageUserInfo'], resolve)
const PageUserAdd = resolve => require(['@/components/PageUserAdd'], resolve)
const PageUserEdit = resolve => require(['@/components/PageUserEdit'], resolve)
const PageUserHistory = resolve => require(['@/components/PageUserHistory'], resolve)
const PageUserHistoryInfo = resolve => require(['@/components/PageUserHistoryInfo'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'PageApp',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'PageIndex',
          alias: '',
          component: PageIndex,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'geo-fencing',
          name: 'PageGeoFencing',
          alias: '',
          component: PageGeoFencing,
          meta: {
            keepAlive: false,
            text: 'GEO FENCING'
          }
        },
        {
          path: 'geo-fencing-add',
          name: 'PageGeoFencingAdd',
          alias: '',
          component: PageGeoFencingAdd,
          meta: {
            keepAlive: false,
            text: 'ADD GEO FENCING',
            parentRoute: 'PageGeoFencing',
            parentRouteText: 'GEO FENCING'
          }
        },
        {
          path: 'geo-fencing-edit',
          name: 'PageGeoFencingEdit',
          alias: '',
          component: PageGeoFencingEdit,
          meta: {
            keepAlive: false,
            text: 'Edit GEO FENCING',
            parentRoute: 'PageGeoFencing',
            parentRouteText: 'GEO FENCING'
          }
        },
        {
          path: 'fleet-history',
          name: 'PageFleetHistory',
          alias: '',
          component: PageFleetHistory,
          meta: {
            keepAlive: false,
            text: 'FLEET HISTORY'
          }
        },
        {
          path: 'fleet-history-route',
          name: 'PageFleetHistoryRoute',
          alias: '',
          component: PageFleetHistoryInner,
          meta: {
            keepAlive: false,
            text: 'LOCK ROUTE HISTORY',
            parentRoute: 'PageFleetHistory',
            parentRouteText: 'FLEET HISTORY'
          }
        },
        {
          path: 'fleet-history-error',
          name: 'PageFleetHistoryError',
          alias: '',
          component: PageFleetHistoryInner,
          meta: {
            keepAlive: false,
            text: 'LOCK ERROR HISTORY',
            parentRoute: 'PageFleetHistory',
            parentRouteText: 'FLEET HISTORY'
          }
        },
        {
          path: 'fleet-history-alert',
          name: 'PageFleetHistoryAlert',
          alias: '',
          component: PageFleetHistoryInner,
          meta: {
            keepAlive: false,
            text: 'LOCK ALERT HISTORY',
            parentRoute: 'PageFleetHistory',
            parentRouteText: 'FLEET HISTORY'
          }
        },
        {
          path: 'fleet-history-parking',
          name: 'PageFleetHistoryParking',
          alias: '',
          component: PageFleetHistoryInner,
          meta: {
            keepAlive: false,
            text: 'LOCK PARKING HISTORY',
            parentRoute: 'PageFleetHistory',
            parentRouteText: 'FLEET HISTORY'
          }
        },
        {
          path: 'bicycle-fleet-in-use',
          name: 'PageBicycleFleetStatusUse',
          alias: '',
          component: PageBicycleFleet,
          meta: {
            keepAlive: false,
            text: 'BICYCLE FLEET IN USE'
          }
        },
        {
          path: 'bicycle-fleet-in-parked',
          name: 'PageBicycleFleetStatusParked',
          alias: '',
          component: PageBicycleFleet,
          meta: {
            keepAlive: false,
            text: 'BICYCLE FLEET IN PARKED'
          }
        },
        {
          path: 'alert-user',
          name: 'PageAlertUser',
          alias: '',
          component: PageBicycleFleet,
          meta: {
            keepAlive: false,
            text: 'USER ALERT'
          }
        },
        {
          path: 'alert-bicycle',
          name: 'PageAlertBicycle',
          alias: '',
          component: PageBicycleFleet,
          meta: {
            keepAlive: false,
            text: 'BICYCLE ALERT'
          }
        },
        {
          path: 'fleet-error',
          name: 'PageFleetError',
          alias: '',
          component: PageFleetError,
          meta: {
            keepAlive: false,
            text: 'FLEET ERROR'
          }
        },
        {
          path: 'contract',
          name: 'PageFleetContract',
          alias: '',
          component: PageFleetContract,
          meta: {
            keepAlive: false,
            text: 'CONTRACT LIST'
          }
        },
        {
          path: 'contract-info',
          name: 'PageFleetContractInfo',
          alias: '',
          component: PageFleetContractInfo,
          meta: {
            keepAlive: false,
            text: 'CONTRACT INFORMATION',
            parentRoute: 'PageFleetContract',
            parentRouteText: 'CONTRACT'
          }
        },
        {
          path: 'contract-add',
          name: 'PageFleetContractAdd',
          alias: '',
          component: PageFleetContractAdd,
          meta: {
            keepAlive: false,
            text: 'ADD CONTRACT',
            parentRoute: 'PageFleetContract',
            parentRouteText: 'CONTRACT'
          }
        },
        {
          path: 'contract-edit',
          name: 'PageFleetContractEdit',
          alias: '',
          component: PageFleetContractAdd,
          meta: {
            keepAlive: false,
            text: 'EDIT CONTRACT',
            parentRoute: 'PageFleetContractInfo',
            parentRouteText: 'CONTRACT INFORMATION',
            parentRoute2: 'PageFleetContract',
            parentRouteText2: 'CONTRACT'
          }
        },
        {
          path: 'contract-history',
          name: 'PageFleetContractHistory',
          alias: '',
          component: PageFleetContractHistory,
          meta: {
            keepAlive: false,
            text: 'CONTRACT HISTORY LIST',
            parentRoute: 'PageFleetContractInfo',
            parentRouteText: 'CONTRACT INFORMATION',
            parentRoute2: 'PageFleetContract',
            parentRouteText2: 'CONTRACT'
          }
        },
        {
          path: 'contract-history-info',
          name: 'PageFleetContractHistoryInfo',
          alias: '',
          component: PageFleetContractHistoryInfo,
          meta: {
            keepAlive: false,
            text: 'CONTRACT HISTORY INFORMATION',
            parentRoute: 'PageFleetContractHistory',
            parentRouteText: 'CONTRACT HISTORY LIST',
            parentRoute2: 'PageFleetContractInfo',
            parentRouteText2: 'CONTRACT INFORMATION',
            parentRoute3: 'PageFleetContract',
            parentRouteText3: 'CONTRACT'
          }
        },
        {
          path: 'lock',
          name: 'PageLock',
          alias: '',
          component: PageLock,
          meta: {
            keepAlive: false,
            text: 'LOCK LIST'
          }
        },
        {
          path: 'lock-info',
          name: 'PageLockInfo',
          alias: '',
          component: PageLockInfo,
          meta: {
            keepAlive: false,
            text: 'LOCK INFORMATION',
            parentRoute: 'PageLock',
            parentRouteText: 'LOCK LIST'
          }
        },
        {
          path: 'lock-import',
          name: 'PageLockImport',
          alias: '',
          component: PageLockImport,
          meta: {
            keepAlive: false,
            text: 'IMPORT LOCK',
            parentRoute: 'PageLock',
            parentRouteText: 'LOCK LIST'
          }
        },
        {
          path: 'lock-edit',
          name: 'PageLockEdit',
          alias: '',
          component: PageLockEdit,
          meta: {
            keepAlive: false,
            text: 'EDIT LOCK INFORMATION',
            parentRoute: 'PageLockInfo',
            parentRouteText: 'LOCK INFORMATION',
            parentRoute2: 'PageLock',
            parentRouteText2: 'LOCK LIST'
          }
        },
        {
          path: 'user',
          name: 'PageUser',
          alias: '',
          component: PageUser,
          meta: {
            keepAlive: false,
            text: 'USER LIST'
          }
        },
        {
          path: 'user-info',
          name: 'PageUserInfo',
          alias: '',
          component: PageUserInfo,
          meta: {
            keepAlive: false,
            text: 'USER INFORMATION',
            parentRoute: 'PageUser',
            parentRouteText: 'USER LIST'
          }
        },
        {
          path: 'user-add',
          name: 'PageUserAdd',
          alias: '',
          component: PageUserAdd,
          meta: {
            keepAlive: false,
            text: 'CREATE USER',
            parentRoute: 'PageUser',
            parentRouteText: 'USER LIST'
          }
        },
        {
          path: 'user-edit',
          name: 'PageUserEdit',
          alias: '',
          component: PageUserEdit,
          meta: {
            keepAlive: false,
            text: 'EDIT INFORMATION',
            parentRoute: 'PageUser',
            parentRouteText: 'USER LIST'
          }
        },
        {
          path: 'user-history',
          name: 'PageUserHistory',
          alias: '',
          component: PageUserHistory,
          meta: {
            keepAlive: false,
            text: 'INFORMATION HISTORY LIST',
            parentRoute: 'PageUserInfo',
            parentRouteText: 'USER INFORMATION',
            parentRoute2: 'PageUser',
            parentRouteText2: 'USER LIST'
          }
        },
        {
          path: 'user-history-info',
          name: 'PageUserHistoryInfo',
          alias: '',
          component: PageUserHistoryInfo,
          meta: {
            keepAlive: false,
            text: 'ISER INFORMATION HISTORY',
            parentRoute: 'PageUserHistory',
            parentRouteText: 'INFORMATION HISTORY LIST',
            parentRoute2: 'PageUserInfo',
            parentRouteText2: 'USER INFORMATION',
            parentRoute3: 'PageUser',
            parentRouteText3: 'USER LIST'
          }
        }
      ]
    }
  ]
})
