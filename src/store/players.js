const state = {
  players: [
    { id: 0, name: 'Radamel', surname: 'Falcao', age: 33, country: 'Colombia', club: 'Monaco FC' },
    { id: 1, name: 'Zlatan', surname: 'Ibrahimovic', age: 37, country: 'Sweeden', club: 'LA Galaxy' }
  ]
}

const mutations = {
  addMutation: (state, player) => {
    player.id = state.players.length
    state.players.push(player)
  },
  updateMutation: (state, player) => {
    state.players = state.players.map(i => i.id === player.id ? player : i)
  },
  deleteMutation: (state, player) => {
    state.players = state.players.filter(i => i.id !== player.id)
  }
}

const getters = {
  get: state => { return state.players }
}

const actions = {
  add ({ commit }, player) {
    commit('addMutation', player)
  },
  delete ({ commit }, player) {
    commit('deleteMutation', player)
  },
  update ({ commit }, player) {
    commit('updateMutation', player)
  }
}

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
