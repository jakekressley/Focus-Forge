"use client"
import React, { SyntheticEvent } from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'
import { useEffect } from 'react'
import prisma from '@/lib/prisma'

const Study = () => {
  const styles = 'cursor-pointer underline'

  const [focusTime, setFocusTime] = React.useState(25);
  const [shortBreakTime, setShortBreakTime] = React.useState(5);
  const [longBreakTime, setLongBreakTime] = React.useState(20);
  const [longBreakFrequency, setLongBreakFrequency] = React.useState(4);
  
  //@ts-expect-error
  const handleFocusTimeChange = (e) => {
    const newInput = e.target.value;
    setFocusTime(newInput);
  }

  //@ts-expect-error
  const handleShortBreakChange = (e) => {
    const newInput = e.target.value;
    setShortBreakTime(newInput);
  }

  //@ts-expect-error
  const handleLongBreakChange = (e) => {
    const newInput = e.target.value;
    setLongBreakTime(newInput);
  }

  //@ts-expect-error
  const handleFreqChange = (e) => {
    const newInput = e.target.value;
    setLongBreakFrequency(newInput);
  }

  useEffect(() => {
  }, [focusTime, shortBreakTime])

  return (
    <React.Fragment>
      <Tab.Group>
        <Tab.List
          as="div"
          className="flex p-2 items-center justify-center gap-5"
        >
          <Tab as="div" className={({ selected }) => (selected ? `underline ${styles}` : `${styles}`)}>Timer</Tab>
          <Tab as="div" className={({ selected }) => (selected ? `underline ${styles}` : `${styles}`)}>Pomodoro</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Timer />
          </Tab.Panel>
          <Tab.Panel>
            <label htmlFor="focus-time">Focus duration: </label>
            <input name="focus-time" type="number" min="1" defaultValue={25} id="focus-time"
            className="text-white bg-gray-800 border border-white rounded p-1 w-[70px] text-center"
            onChange={handleFocusTimeChange}
            />

            <br />

            <label htmlFor="short-break">Short Break Duration: </label>
            <input name="short-break" type="number" min="1" defaultValue={5} id="short-break"
            className="text-white bg-gray-800 border border-white rounded p-1 w-[70px] text-center"
            onChange={handleShortBreakChange}
            />

            <br />
            
            <label htmlFor="long-break">Long Break Duration: </label>
            <input name="long-break" type="number" min="1" defaultValue={20} id="long-break"
            className="text-white bg-gray-800 border border-white rounded p-1 w-[70px] text-center"
            onChange={handleLongBreakChange}
            />

            <br />
            
            <label htmlFor="break-freq">Long Break Frequency: </label>
            <input name="break-freq" type="number" defaultValue={4} id="break-freq"
            className="text-white bg-gray-800 border border-white rounded p-1 w-[70px] text-center"
            onChange={handleFreqChange}
            />
            <label htmlFor="break-freq">(zero if you do not want any long breaks)</label>

            <PomodoroTimer
              focusTime={focusTime}
              shortBreak={shortBreakTime}
              longBreak={longBreakTime}
              longBreakFrequency={longBreakFrequency}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </React.Fragment>
  )
}

export default Study
