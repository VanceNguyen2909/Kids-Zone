import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search_key: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.search_key = action.payload.search_key
    }
  }
})

export const { setSearchKey } = searchSlice.actions

export default searchSlice.reducer
