import React, { useState } from 'react'
import { usePosition } from '../position.slice'
import { Box, Line, Position } from '../types'
import { BoxContainer } from './BoxContainer'

export const LineContainer = (props: { lines: Line[] }) => {

  const position: Position = usePosition()

  return (
    <>
      {props.lines.map((line) => 
        line.boxes.map((box: Box) => {
          const selected = line.position === position.lineIdx && box.position === position.boxIdx
          const boxPosition:Position = {lineIdx: line.position, boxIdx: box.position}
          return <BoxContainer key={box.position} box={box} selected={selected} position={boxPosition}></BoxContainer>
        })
      )}
    </>
  )
}
