import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './appState'


export const store = configureStore({
    reducer: {
        appState: appStateReducer,

    },
})