import { RootState } from '@redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Position } from './types'

const position: Position = {
  lineIdx: 1,
  boxIdx: 1,
}

const initialState = {
  position,
}

const slice = createSlice({
  name: 'position',
  initialState: initialState,
  reducers: {
    nextPosition: (
      state,
    ) => {
      const { position } = state
      if(position.boxIdx < 5) {
        state.position.boxIdx++
      } else {
        state.position.lineIdx < 5 && state.position.lineIdx++
        state.position.boxIdx = 1
      }
    },
    previousPosition: (
      state,
    ) => {
      const { position } = state
      if(position.boxIdx > 1) {
        state.position.boxIdx--
      } else {
        state.position.lineIdx > 1 && state.position.lineIdx--
        state.position.boxIdx = 5
      }
    }

  },
})

const { actions, reducer } = slice

export const selectPosition = (state: RootState) => 
  state.position

export const { nextPosition, previousPosition } = actions
export default reducer
