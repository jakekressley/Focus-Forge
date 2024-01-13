"use client"
import React, { SyntheticEvent } from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'

const Study = () => {
  const styles = 'cursor-pointer underline'

  const [focusTime, setFocusTime] = React.useState(25);
  //@ts-expect-error
  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setFocusTime(newInput);
  }

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
            <input name="focus-time" type="number" min="1" defaultValue={25}
            className="text-white bg-gray-800 border border-white rounded p-1 w-[70px] text-center"
            />
            <PomodoroTimer
              focusTime={focusTime}
              shortBreak={3}
              longBreak={15}
              longBreakFrequency={4}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </React.Fragment>
  )
}

export default Study
