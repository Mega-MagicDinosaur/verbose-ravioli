import { createStore } from 'vuex'

export default createStore({
  state: {
    selected_company: null
  },
  getters: {
  },
  mutations: {
    set_selected_company (state, payload){ return state.selected_company = payload.company; }
  },
  actions: {
    set_selected_company (context, payload) { context.commit('set_selected_company', payload) }
  },
  modules: {
  }
})
