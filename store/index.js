import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const createStore = () =>{
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
export default createStore