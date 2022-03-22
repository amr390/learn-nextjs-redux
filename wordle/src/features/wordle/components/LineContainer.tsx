import React from 'react'
import { Box, Line } from '../types'
import { BoxContainer } from './BoxContainer'

export const LineContainer = (props: { lines: Line[] }) => {
  return (
    <>
      {props.lines.map((line) =>
        line.boxes.map((box: Box) => <BoxContainer key={box.position} box={box}></BoxContainer>)
      )}
    </>
  )
}
