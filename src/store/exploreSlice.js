import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  explores: false,
}

export const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    explores: (state, action) => {
      state.explores = action.payload;
    },
  },
})

export const { explores  } = exploreSlice.actions

export default exploreSlice.reducer