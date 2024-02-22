// timer option with a pomodoro that accepts children for how long they want it to be
"use client"
import { useState, useEffect } from 'react'
import { PomodoroTypes } from '@/types'
import React from 'react';
import connectToDatabase from "../../mongo";
import { ObjectId } from "mongodb";
import prisma from '@/lib/prisma';
import { useRouter } from 'next/router';
import TimerButton from './TimerButton';


function PomodoroTimer() {
    const [focusTime, setFocusTime] = React.useState(25);
    const [minutes, setMinutes] = useState(focusTime);
    const [totalMinutesStudied, setTotalMinutesStudied] = useState(0);
    const [shortBreakCounter, setShortBreakCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const styles = 'cursor-pointer underline'
    const [shortBreakTime, setShortBreakTime] = React.useState(5);
    const [longBreakTime, setLongBreakTime] = React.useState(20);
    const [longBreakFrequency, setLongBreakFrequency] = React.useState(4);
    const [totalSessionCounter, setTotalSessionCounter] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
    
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);

                } else {
                    setIsActive(false);
    
                    if (minutes === 0 && seconds === 0) {
                        
                        if (!isBreak) {
                            let newShortBreakCounter = shortBreakCounter + 1;
                            setShortBreakCounter(newShortBreakCounter);
                            setTotalSessionCounter(totalSessionCounter + 1);

                            if (newShortBreakCounter == longBreakFrequency) {
                                console.log("condition passed")
                                setShortBreakCounter(0);
                                setMinutes(longBreakTime);
                                setIsBreak(true);
                            } 
                            else {
                                setMinutes(shortBreakTime);
                                setIsBreak(true);
                                setSeconds(0);
                            }
                        }
                        else {
                            setMinutes(focusTime);
                            setIsBreak(false);
                            setSeconds(0);
                        }
                    }
                }
            }, 1000);
        }
    
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);
    
    //@ts-expect-error
    const handleFocusTimeChange = (e) => {
      const newInput = e.target.value;
      if (newInput === '') {
        setFocusTime(25);
      }
      else {
          setFocusTime(newInput);
      }
    }
  
    //@ts-expect-error
    const handleShortBreakChange = (e) => {
      const newInput = e.target.value;
      if (newInput === '') {
        setShortBreakTime(5);
      }
      else {
          setShortBreakTime(newInput);
      }
    }
  
    //@ts-expect-error
    const handleLongBreakChange = (e) => {
      const newInput = e.target.value;
      if (newInput === '') {
        setLongBreakTime(20);
      }
      else 
          setLongBreakTime(newInput);
    }
  
    //@ts-expect-error
    const handleFreqChange = (e) => {
      const newInput = e.target.value;
      if (newInput === '') {
        setLongBreakFrequency(4);
      }
      else
        setLongBreakFrequency(newInput);
    }
    
    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setMinutes(focusTime);
        setShortBreakCounter(0);
        setSeconds(0);
    };

    const handleForward = () => {
        setMinutes(0);
        setSeconds(0);
    }

    useEffect(() => {
        handleReset();
    }, [focusTime, shortBreakTime])


    // make this a headlessui modal
   const handleSessionEnd = () => {
        console.log("Session ended");
        const xpToAdd = minutes;
        handleReset 
    }

    //handleReset();

    return (
        <div className='flex flex-col items-center'>
            <div className="mt-5 grid grid-rows-2 grid-cols-2 gap-x-4
            gap-y-3">
                <div className="--input-group">
                    <label htmlFor="focus-time" className="text-sm">Focus duration: </label>
                    <input name="focus-time" type="number" min="1" defaultValue={25} id="focus-time"
                    className="text-white bg-gray-800 border border-white rounded p-1 w-[50px] text-center text-md"
                    onChange={handleFocusTimeChange}
                    />
                </div>

                <div className="--input-group">
                    <label htmlFor="short-break" className="text-sm">Short Break Duration: </label>
                    <input name="short-break" type="number" min="1" defaultValue={5} id="short-break"
                    className="text-white bg-gray-800 border border-white rounded p-1 w-[50px] text-center text-md"
                    onChange={handleShortBreakChange}
                    />
                </div>

                <div className="--input-group">
                    <label htmlFor="long-break" className="text-sm">Long Break Duration: </label>
                    <input name="long-break" type="number" min="1" defaultValue={20} id="long-break"
                    className="text-white bg-gray-800 border border-white rounded p-1 w-[50px] text-center text-md"
                    onChange={handleLongBreakChange}
                    />
                </div>
                
                <div className="--input-group">
                    <label htmlFor="break-freq" className="text-sm">Long Break Frequency: </label>
                    <input name="break-freq" type="number" defaultValue={4} id="break-freq"
                    className="text-white bg-gray-800 border border-white rounded p-1 w-[50px] text-center text-md"
                    onChange={handleFreqChange}
                    />
                </div>
            </div>
            <span className='text-9xl m-20'>{minutes} : {String(seconds).padStart(2, '0')}</span>
            <div className='flex justify-evenly items-center w-1/2 gap-4'>
                <div>
                    {isActive ? (
                        <TimerButton label="Pause" onClick={handlePause}></TimerButton>
                        ) : (
                            <TimerButton label="Start" onClick={handleStart}></TimerButton>
                            )}
                </div>
                <TimerButton label="Fast Forward" onClick={handleForward}></TimerButton>
            </div>
            <div className="mt-10">
                <TimerButton label="Reset" onClick={handleReset} className="mt-6"></TimerButton>
            </div>
            <div className="m-10">
                <TimerButton label="End session" size="large"></TimerButton>
            </div>        
            <p>Short Break Counter: {shortBreakCounter}</p>
            <p>Total Session Counter: {totalSessionCounter}</p>
        </div>
    )
}

export default PomodoroTimer
