"use client"

import { useState, useEffect } from "react";
import { PomodoroTypes } from "@/types";
import axios from "axios";
import TimerButton from "./TimerButton";

const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor(totalSeconds / 3600);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
            }, 1);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isActive]);


    useEffect(() => {
      const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        setExperience(res.data.data.experience);
      };
  
      getUserDetails();
    }, []);

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

    const handleSessionEnd = async () => {
        console.log("Session ended");
        try {
            const res = await axios.put("/api/users/me", { experience: experience + Math.floor(totalSeconds / 60)});
            if (res.data.success) {
              console.log("User's experience updated successfully");
              setExperience(experience + Math.floor(totalSeconds / 60));
              handleReset();
            } else {
              console.log("Failed to update user's experience", res.data.error);
            }
          } catch (error: any) {
            console.log("Failed to update user's experience", error.message);
          }
        };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-9xl m-10">
                <div className="m-20">
                    {hours > 0 && <><span className="text-9xl">{hours}</span><span className="text-4xl">h</span> : </>}
                    {(hours > 0 || minutes > 0) ? <><span className="text-9xl">{totalSeconds >= 600 ? String(minutes).padStart(2, '0') : minutes}</span><span className="text-4xl">m</span> : </> : ""}
                    <span className="text-9xl">{totalSeconds > 9 ? String(seconds).padStart(2, '0') : seconds}</span><span className="text-4xl">s</span>
                </div>
            </div>
            <div className='flex justify-evenly items-center w-1/2 gap-4 m-6'>
                <div>
                    {isActive ? (
                        <TimerButton label="Pause" onClick={handlePause} size="large"></TimerButton>
                    ) : (
                        <TimerButton label="Start" onClick={handleStart} size="large"></TimerButton>
                    )}
                </div>
                <TimerButton label="Reset" onClick={handleReset} size="large"></TimerButton>
            </div>
            <div className="m-4">
                <TimerButton label="End Session" size="large" onClick={handleSessionEnd}></TimerButton>
            </div>
        </div>
    );
}

export default Timer;