"use client"

import { useState, useEffect } from "react";

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
        <div>
            <p>Session Duration:
                {hours > 0 && `${hours} : `}
                {(hours > 0 || minutes > 0) ? `${totalSeconds >= 600 ? String(minutes).padStart(2, '0') : minutes} : ` : ""}
                {totalSeconds > 9 ? String(seconds).padStart(2, '0') : seconds}
            </p>
            <div>
                {isActive ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handleStart}>Start</button>
                )}
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Timer;