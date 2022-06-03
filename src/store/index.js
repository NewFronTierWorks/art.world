import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scannedArtwork : {}
  },
  getters: {
    artData (state) {
      return state.scannedArtwork
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
