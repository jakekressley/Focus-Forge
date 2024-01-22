"use client"

import { useState, useEffect } from "react";
import { PomodoroTypes } from "@/types";
import TimerButton from "./TimerButton";

const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isActive]);

    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor(totalSeconds / 3600);

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    }

    const handleReset = () => {
        setIsActive(false);
        setTotalSeconds(0);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-9xl m-10">
                <p className="m-20">
                    {hours > 0 && <><span className="text-9xl">{hours}</span><span className="text-4xl">h</span> : </>}
                    {(hours > 0 || minutes > 0) ? <><span className="text-9xl">{totalSeconds >= 600 ? String(minutes).padStart(2, '0') : minutes}</span><span className="text-4xl">m</span> : </> : ""}
                    <span className="text-9xl">{totalSeconds > 9 ? String(seconds).padStart(2, '0') : seconds}</span><span className="text-4xl">s</span>
                </p>
            </p>
            <div className='flex justify-evenly items-center w-1/2 gap-4 m-6'>
                <div>
                    {isActive ? (
                        <TimerButton label="Pause" onClick={handlePause}></TimerButton>
                    ) : (
                        <TimerButton label="Start" onClick={handleStart}></TimerButton>
                    )}
                </div>
                <TimerButton label="Reset" onClick={handleReset}></TimerButton>
            </div>
            <div className="m-4">
                <TimerButton label="End Session" size="large"></TimerButton>
            </div>
        </div>
    );
}

export default Timer;