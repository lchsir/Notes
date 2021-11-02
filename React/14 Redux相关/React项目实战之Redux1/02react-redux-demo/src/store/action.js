import { ADD_MONEY, SUB_MONEY, INCREMENT, DECREMENT } from './canstants'

export const addAction = num => ({
    type: ADD_MONEY,
    num
})

export const subAction = num => ({
    type: SUB_MONEY,
    num
})

export const incAction = num => ({
    type: INCREMENT,
    num
})

export const decAction = num => ({
    type: DECREMENT,
    num
})
