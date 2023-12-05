import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search_key: '',
  username: '',
  email: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.search_key = action.payload.search_key
      state.last_name = action.payload.last_name
      state.username = action.payload.username
      state.email = action.payload.email
    }
  }
})

export const { setSearchKey } = searchSlice.actions

export default searchSlice.reducer
