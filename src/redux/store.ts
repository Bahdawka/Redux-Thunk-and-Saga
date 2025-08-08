import { configureStore, type Middleware, type Action } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { useDispatch } from 'react-redux'
import useReducer from './slices/userSlice'

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`
    Prev State: ${prevState}
      Dispatch action: ${(action as Action).type}
        NextState: ${nextState}
    `)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store