"use client"
import React, { SyntheticEvent } from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'
import { useEffect } from 'react'
import prisma from '@/lib/prisma'
import { ClassNames } from '@emotion/react'

const Study = () => {
  const styles = '--tab cursor-pointer w-1/2 rounded-lg py-2.5 font-medium leading-5 text-center text-lg --tab-hover text-lightgray'
  const selected = 'bg-gray-800 opacity-100 fw-bold border-b-2 border-white text-offwhite'
  
  const [selectedTab, setSelectedTab] = React.useState('Timer')

  return (
    <React.Fragment>
      <Tab.Group as="div" className="flex flex-col items-center">
        <Tab.List
          as="div"
          className="--tab-group"
        >
          <Tab as="div" className={selectedTab === 'Timer' ? `${styles} ${selected} text-offwhite` : `${styles}`} onClick={() => setSelectedTab('Timer')}>Timer</Tab>
          <Tab as="div" className={selectedTab === 'Pomodoro' ? `${styles} ${selected} text-offwhite` : `${styles}`} onClick={() => setSelectedTab('Pomodoro')}>Pomodoro</Tab>
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
