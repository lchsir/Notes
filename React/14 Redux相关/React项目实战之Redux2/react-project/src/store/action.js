import { SWITCH_MENU } from "./constants"

export const switchMenuAction = menuName => ({
    type: SWITCH_MENU,
    menuName
})
