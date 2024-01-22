import { TimerButtonTypes } from '@/types'
import React from 'react'

const TimerButton = ({label, onClick}: TimerButtonTypes) => {
  return (
    <div>
      <button className="bg-white rounded-md text-gray-800 p-1.5 font-bold w-[128px]" onClick={onClick}>{label}</button>
    </div>
  )
}

export default TimerButton
