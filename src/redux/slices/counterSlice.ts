import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState: CounterState = {
  count: 0
}

export type CounterState = {
  count: number
}

const asyncDelay = (value: number) => new Promise<CounterState>((resolve) => setTimeout(() => resolve({ count: value }), 1000))

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => asyncDelay(1))

export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => asyncDelay(1))

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload.count
      }
    ).addCase(
      decrementAsync.fulfilled, (state, action) => {
        state.count -= action.payload.count
      }
    )
  }
})

export const selectCount = (state: RootState) => state.counter.count
export default counterSlice.reducer