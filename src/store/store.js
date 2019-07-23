import Vue from 'vue'
import Vuex from 'vuex'
import players from '@/store/players.js'
import VuexEasyFirestore from 'vuex-easy-firestore'
import playersFirestore from '@/store/playersFirestore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    players: players
  },
  plugins: [ VuexEasyFirestore([ playersFirestore ], { logging: true, FirebaseDependency: Vue.$firebase }) ]
})
