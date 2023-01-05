import { configureStore } from '@reduxjs/toolkit'
import storieReducer from './storeSlice'
import exploreReducer from './exploreSlice'
import searchReducer from './searchSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
const persistConfig = {
  key: "root",
  version: 1,
  storage
}
const reducer = combineReducers({
  storie: storieReducer,
  explore: exploreReducer,
  search : searchReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})