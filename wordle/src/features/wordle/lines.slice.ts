import { useAppSelector } from '@redux/hooks'
import { RootState } from '@redux/store'
import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'
import { Box, Line } from './types'

const baseBox: Box = {
  position: 1,
  letter: '',
  filled: false,
  fullMatch: false,
  match: false,
}

const baseLine: Line = {
  position: 1,
  boxes: [1, 2, 3, 4, 5].map((i) => ({ ...baseBox, position: i })),
}

const lines: Line[] = [1, 2, 3, 4, 5].map((i) =>
  produce(baseLine, (draftLine) => void (draftLine.position = i))
)

const initialState = {
  lines,
}

const slice = createSlice({
  name: 'lines',
  initialState: initialState,
  reducers: {},
})

const selectLines = (state: RootState) => state.lines.lines

export const useLines = () => useAppSelector(selectLines)

const { actions, reducer } = slice

export const {} = actions
export default reducer
