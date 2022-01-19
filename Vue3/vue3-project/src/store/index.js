import { createStore } from 'vuex'
import getters from './getters'
import menu from './modules/menu'

export default createStore({
  modules: {
    menu,
  },
  getters
})
