import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSearch: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search : (state, action) => {
            state.showSearch = action.payload;
        },
    },
})

export const { search } = searchSlice.actions

export default searchSlice.reducer