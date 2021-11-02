import { SWITCH_MENU } from "./constants"

const initState = {
    menuName: '首页'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SWITCH_MENU:
            return {...state, menuName: action.menuName}
        default:
            return state
    }
}

export default reducer