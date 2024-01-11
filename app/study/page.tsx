"use client"
import React from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'

const Study = () => {
  const styles = 'cursor-pointer underline'
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
            <PomodoroTimer 
              focusTime={5}
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
