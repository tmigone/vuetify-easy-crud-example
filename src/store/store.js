import Vue from 'vue'
import Vuex from 'vuex'
import players from '@/store/players.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    players: players
  }
})
