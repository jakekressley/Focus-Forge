// timer option with a pomodoro that accepts children for how long they want it to be
"use client"
import { useState, useEffect } from 'react'
import { PomodoroTypes } from '@/types'

function PomodoroTimer({ focusTime, shortBreak, longBreak, longBreakFrequency }:PomodoroTypes) {
    const [minutes, setMinutes] = useState(focusTime);
    const [shortBreakCounter, setShortBreakCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
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

                            if (newShortBreakCounter === longBreakFrequency) {
                                setShortBreakCounter(0);
                                setMinutes(longBreak);
                                setIsBreak(true);
                            } 
                            else {
                                setMinutes(shortBreak);
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

    return (
        <div>
            <p>Session Duration: <span key={focusTime}>{focusTime}</span> minutes</p>
            <p>Short Break Duration: {shortBreak} minutes</p>
            <p>Long Break Duration: {longBreak} minutes</p>
            <p>Long Break Frequency: {longBreakFrequency} sessions</p>
            <p>Short Break Counter: {shortBreakCounter}</p>
            <p>Total Session Counter: {totalSessionCounter}</p>
            <p>Session Duration: {minutes} : {String(seconds).padStart(2, '0')}</p>
            <div>
                {isActive ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handleStart}>Start</button>
                )}
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default PomodoroTimer
