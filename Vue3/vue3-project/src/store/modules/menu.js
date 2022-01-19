
const state = {
  collapsed: false,
}

const mutations = {
  // 切换菜单
  TOGGLE_COLLAPSED: (state) => {
    state.collapsed = !state.collapsed;
  }
}

const actions = {
  
}

export default{
  state,
  mutations,
  actions
}