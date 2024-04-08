import { createAction, createReducer } from '@reduxjs/toolkit'


// Define Interfaces
interface UserValue {
    firstname: string
    lastname: string
}
interface initialInterface {
    value: number
    user: UserValue
}


// Change State of Value
export const increment = createAction('value/increment')
const decrement = createAction('value/decrement')
const incrementByAmount = createAction<number>('value/incrementByAmount')


// Change Sate of User
const changeFirstname = createAction<string>('user/changeFirstname')
const changeLastname = createAction<string>('user/changeLastname')


// Init Reducer
const initialState = { value: 0, user: { firstname: "", lastname: "" } } satisfies initialInterface
const initialReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.value++
        })
        .addCase(decrement, (state) => {
            state.value--
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload
        })
        .addCase(changeFirstname, (state, action) => {
            state.user.firstname = action.payload
        })
        .addCase(changeLastname, (state, action) => {
            state.user.lastname = action.payload
        })
})

export default initialReducer;