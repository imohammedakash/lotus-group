import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stories: [],
}

export const storieSlice = createSlice({
  name: 'storie',
  initialState,
  reducers: {
    stories: (state, action) => {
      state.stories = action.payload;
    },
  },
})

export const { stories  } = storieSlice.actions

export default storieSlice.reducer