import React from 'react'
import { useState } from 'react'
import produce from 'immer'

export const BoxContainer = (props: { box: Box }) => {
  const [box, setBox] = useState(props.box)


  return (
    <div className='box-border border-4 rounded-md sm:w-16 sm:h-16 md:w-32 md:h-32'>
      <input
        type='text'
        className='w-full h-full text-center lg:text-8xl md:text-6xl font-mono'
        value={box.letter}
        onChange={(e) =>
          setBox(
            produce(
              box,
              (draftBox) => void (draftBox.letter = e.target.value)
            )
          )
        }
      />
    </div>
  )
}
