import { TimerButtonTypes } from '@/types'
import React from 'react'

const TimerButton = ({label, onClick, className, size}: TimerButtonTypes) => {
    const defaultStyles = "bg-white rounded-md text-gray-800 p-1.5 font-bold"
  return (
    <div>
      <button className={size === 'large' ? `w-[272px] ${defaultStyles} p-2.5 text-lg` : `w-[128px] ${defaultStyles}`} onClick={onClick}>{label}</button>
    </div>
  )
}

export default TimerButton
