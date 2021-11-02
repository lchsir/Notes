import { ADD_MONEY, SUB_MONEY, INCREMENT, DECREMENT } from './canstants'

const defaultState = {
    money: 0
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD_MONEY':
            return {...state, money: state.money + action.num}
        case 'SUB_MONEY':
            return {...state, money: state.money - action.num}
        case 'INCREMENT':
            return {...state, money: state.money + 1}
        case 'DECREMENT':
            return {...state, money: state.money - 1}
        default:
            return state
    }
}

export default reducer