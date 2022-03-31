import lineReducer from "@features/wordle/lines.slice";
import positionReducer from "@features/wordle/position.slice";
import { combineReducers } from "@reduxjs/toolkit";
// import reducers from slices

console.log('positionReducer', positionReducer)
console.log('lineReducer', lineReducer)


export const rootReducer = combineReducers({
  //${reducer}: sliceReducerName
  lines: lineReducer,
  position: positionReducer,
})
