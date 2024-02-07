"use client"
import React, { SyntheticEvent } from 'react'
import Timer from '@/components/timer/Timer'
import PomodoroTimer from '@/components/timer/PomodoroTimer'
import { Tab } from '@headlessui/react'
import '../tabs.scss'
import { useEffect } from 'react'
import prisma from '@/lib/prisma'
import { ClassNames } from '@emotion/react'

const Study = () => {
  const styles = '--tab cursor-pointer w-1/2 rounded-lg py-2.5 font-medium leading-5 bg-gray-800 text-center text-lg --tab-hover'
  const selected = 'bg-gray-800 text-white opacity-100 fw-bold'
  
  const [selectedTab, setSelectedTab] = React.useState('Timer')

  return (
    <React.Fragment>
      <Tab.Group as="div" className="flex flex-col items-center">
        <Tab.List
          as="div"
          className="--tab-group"
        >
          <Tab as="input" type="radio" id="radio-1" className={selectedTab === 'Timer' ? `${styles} ${selected}` : `${styles} opacity-30`} onClick={() => setSelectedTab('Timer')}/>
          <label htmlFor="radio-1">Timer</label>

          <Tab as="input" type="radio" id="radio-2" className={selectedTab === 'Pomodoro' ? `${styles} ${selected}` : `${styles} opacity-30`} onClick={() => setSelectedTab('Pomodoro')}/>
          <label htmlFor="radio-2">Pomodoro</label>
          <span className="--glider"></span>
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
