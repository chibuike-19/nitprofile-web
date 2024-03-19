/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

export type IRole = "ADMIN" | "SUPER ADMIN" | "USER"

export interface IUser {
    id: string
    firstName: string
    lastName: string
    otherName?: string
    email: string
    emailVerified: boolean
    profilePicPublicId: string | null
    resetToken: string | null
    profilePicSecureUrl: string | null
    isVerified: boolean
    role: IRole
}

interface IInitialState {
    data: IUser | null
    isAuthenticated: boolean
}

const dummyUser = {
    id: "622c4d4e-3786-4c19-b790-29e4c8c67463",
    firstName: "Odumuyiwa",
    lastName: "Victor",
    otherName: "",
    email: "davidokunoye003@gmail.com",
    emailVerified: true,
    profilePicPublicId: null,
    resetToken: null,
    profilePicSecureUrl: null,
    isVerified: true,
    role: "USER" as IRole,
}

const initialState: IInitialState = {
    data: dummyUser,
    isAuthenticated: true,
}

const authReduxSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.data = null
        },

        login: (state, action: { payload: IUser }) => {
            state.isAuthenticated = true
            state.data = action.payload
        },
    },
})

export const authSlice = {
    reducer: authReduxSlice.reducer,
    actions: authReduxSlice.actions,
}
