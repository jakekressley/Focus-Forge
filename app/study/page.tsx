"use client"
import React, { SyntheticEvent } from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'
import { useEffect } from 'react'
import prisma from '@/lib/prisma'
import { ClassNames } from '@emotion/react'

const Study = () => {
  const styles = 'cursor-pointer w-1/2 rounded-lg py-2.5 text-sm font-medium leading-5 bg-gray-800 text-center'
  const selected = 'bg-gray-800 text-white opacity-100 fw-bold'
  
  const [selectedTab, setSelectedTab] = React.useState('Timer')

  return (
    <React.Fragment>
      <Tab.Group as="div" className="flex flex-col items-center">
        <Tab.List
          as="div"
          className="flex p-1 justify-center rounded-lg items-center bg-gray-900 w-1/4 mb-5"
        >
          <Tab as="div" className={selectedTab === 'Timer' ? `${styles} ${selected}` : `${styles} opacity-30`} onClick={() => setSelectedTab('Timer')}>Timer</Tab>
          <Tab as="div" className={selectedTab === 'Pomodoro' ? `${styles} ${selected}` : `${styles} opacity-30`} onClick={() => setSelectedTab('Pomodoro')}>Pomodoro</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Timer />
          </Tab.Panel>
          <Tab.Panel>
            <PomodoroTimer/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </React.Fragment>
  )
}

export default Study
