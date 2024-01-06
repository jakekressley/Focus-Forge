import React from 'react'
import Timer from '../../components/timer/Timer'
import PomodoroTimer from '../../components/timer/PomodoroTimer'

const Study = () => {
  return (
    <>
      <Timer />
      <br />
      <PomodoroTimer 
        focusTime={5}
        shortBreak={3}
        longBreak={15}
        longBreakFrequency={4}
      />
    </>
  )
}

export default Study
