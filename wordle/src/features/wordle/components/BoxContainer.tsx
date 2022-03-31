import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import produce from 'immer'
import { Box, Char, Position } from '@features/wordle/types'
import { useAppDispatch } from '@redux/hooks'
import { nextPosition, previousPosition } from '../position.slice'

export const BoxContainer = (props: {
  box: Box
  selected: boolean
  position: Position
}) => {
  const [box, setBox] = useState(props.box)
  const dispatch = useAppDispatch()

  return (
    <div
      className={`box-border border-4 rounded-md sm:w-16 sm:h-16 md:w-32 md:h-32 ${
        props.selected ? 'border-red-700' : ''
      }`}
    >
      <input
        id={`box-${props.position.lineIdx}-${props.position.boxIdx}`}
        type='text'
        className='w-full h-full text-center lg:text-8xl md:text-6xl font-mono '
        value={box.letter}
        onChange={(e: ChangeEventHandler<HTMLInputElement>) =>
          setBox(
            produce(
              box,
              (draftBox) => void (draftBox.letter = e.target.value as Char)
            )
          )
        }
        onKeyDown={(e: KeyboardEventHandler<HTMLInputElement>) => {
          if (e.key === 'Backspace') {
            !box.letter && dispatch(previousPosition())
          } else if (e.key){
            dispatch(nextPosition())
          }
        }}
      />
    </div>
  )
}
