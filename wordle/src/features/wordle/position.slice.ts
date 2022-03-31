import { useAppSelector } from '@redux/hooks'
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
  initialState,
  reducers: {
    nextPosition: (state) => {
      const { position } = state
      if (position.boxIdx < 5) {
        position.boxIdx += 1
      } else {
        position.lineIdx =
          position.lineIdx < 5 ? position.lineIdx + 1 : position.lineIdx
        position.boxIdx = 1
      }

      const boxId = `box-${position.lineIdx}-${position.boxIdx}`
      document.getElementById(boxId)?.focus()
    },
    previousPosition: (state) => {
      const { position } = state
      if (position.boxIdx > 1) {
        state.position.boxIdx -= 1
      } else {
        state.position.lineIdx > 1 && state.position.lineIdx--
        state.position.boxIdx = 5
      }
    },
  },
})

const { actions, reducer } = slice

const selectPosition = (state: RootState) => state.position.position

export const usePosition = () => useAppSelector(selectPosition)

export const { nextPosition, previousPosition } = actions
export default reducer
