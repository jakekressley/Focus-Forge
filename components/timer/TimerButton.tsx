import { TimerButtonTypes } from '@/types'
import React from 'react'

const TimerButton = ({label, onClick, className, size}: TimerButtonTypes) => {
    const defaultStyles = "bg-white rounded-md text-gray-700 p-1.5 font-bold --btn "
    const largeStyles = "py-3 px-6 text-lg";
    const smallStyles = "py-2 px-4 text-sm"
  return (
    <div>
      <button className={`${defaultStyles} ${size === 'large' ? largeStyles : smallStyles}`} onClick={onClick}>{label}</button>
    </div>
  )
}

export default TimerButton
