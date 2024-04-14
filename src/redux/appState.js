import { createSlice } from '@reduxjs/toolkit'

const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode(state, action) {
            state.darkMode = !state.darkMode
        },

    },
})

export const { toggleDarkMode } = appStateSlice.actions
export default appStateSlice.reducer