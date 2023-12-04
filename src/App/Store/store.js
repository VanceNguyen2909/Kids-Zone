import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../Modules/Search/search.slice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),

//   devTools: true
})
