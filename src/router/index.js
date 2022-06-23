import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demo" */ '../views/DemoView.vue')
  },
  {
    path: '/entry-way',
    name: 'entryWay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "entryWay" */ '../views/EntryWay.vue')
  },
  {
    path: '/view-collection',
    name: 'viewCollection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "viewCollection" */ '../views/CollectionView.vue')
  },
  {
    path: '/scan-artwork',
    name: 'scanArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "scanArtwork" */ '../views/ScannerView.vue')
  },
  {
    path: '/token-creator',
    name: 'tokenCreator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tokenCreator" */ '../views/TokenCreator.vue')
  },
  {
    path: '/tezos-wallet-collection',
    name: 'tezosWalletCollection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tezosWalletCollection" */ '../views/wallets/TezosWalletCollection.vue')
  },
  {
    path: '/ethereum-wallet-collection',
    name: 'ethereumWalletCollection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ethereumWalletCollection" */ '../views/wallets/EthereumWalletCollection.vue')
  },
  {
    path: '/polygon-wallet-collection',
    name: 'polygonWalletCollection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "polygonWalletCollection" */ '../views/wallets/PolygonWalletCollection.vue')
  },
  {
    path: '/rinkeby-wallet-collection',
    name: 'rinkebyWalletCollection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rinkebyWalletCollection" */ '../views/wallets/RinkebyWalletCollection.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
