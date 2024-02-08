"use client"
import { useState, useEffect } from 'react'
import { getServerSession } from 'next-auth'
import axios from 'axios';
import Rank from '@/components/Rank';

export default async function Home() {
  //const [data, setData] = useState("nothing");
  //const [experience, setExperience] = useState(0);
  //const session = await getServerSession();
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      setExperience(res.data.data.experience);
      console.log(experience);
    }

    getUserDetails();
  }, [])

  //Red -> Pink -> Green  -> Blue -> Copper -> Silver -> Gold
  const red = 'text-red-500'
  const pink = 'text-pink-500'
  const green = 'text-green-700'
  const blue = 'text-blue-500'
  const copper = 'text-yellow-500'
  const silver = 'text-gray-300'
  const gold = 'text-yellow-300'
  const xp = 324;
  const hours: number = Math.floor(xp / 60);

  const getRankProgressString = (xp: number) => {
    if (xp < 500) {
      return `${xp}/500`;
    } else if (xp < 1500) {
      return `${xp - 500}/1000`;
    } else if (xp < 3500) {
      return `${xp - 1500}/2000`;
    } else if (xp < 6000) {
      return `${xp - 3500}/2500`;
    } else if (xp < 9000) {
      return `${xp - 6000}/3000`;
    } else if (xp < 12000) {
      return `${xp - 9000}/3000`;
    } else {
      return `Max Level`;
    }
  }

  const getRankProgressPercent = (xp: number) => {
    if (xp < 500) {
      return (xp / 500) * 100;
    } else if (xp < 1500) {
      return ((xp - 500) / 1000) * 100;
    } else if (xp < 3500) {
      return ((xp - 1500) / 2000) * 100;
    } else if (xp < 6000) {
      return ((xp - 3500) / 2500) * 100;
    } else if (xp < 9000) {
      return ((xp - 6000) / 3000) * 100;
    } else if (xp < 12000) {
      return ((xp - 9000) / 3000) * 100;
    } else {
      return 100;
    }
  }

  const rankProgressString = getRankProgressString(xp);
  const rankProgressPercent = getRankProgressPercent(xp);
  const rankStyles = "text-5xl font-bold"

  return (
    <>
    <div className="flex justify-evenly">
      <div className="w-[50%]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-4 text-center --header-name">Progress</h2>
          <h3 className="text-lg flex items-center justify-center">Current Rank: 
            { xp < 500 ? <span className={`${rankStyles} ${red}`}>Red</span> : 
              (xp < 1500) ? <span className={`${rankStyles} ${pink}`}>Pink</span> : 
              (xp < 3500) ? <span className={`${rankStyles} ${green}`}>Green</span> : 
              (xp < 6000) ? <span className={`${rankStyles} ${blue}`}>Blue</span> : 
              (xp < 9000) ? <span className={`${rankStyles} ${copper}`}>Copper</span> : 
              (xp < 12000) ? <span className={`${rankStyles} ${silver}`}>Silver</span> : 
              <span className={`${rankStyles} ${gold}`}>Gold</span>}
            </h3>
            <h3 className="text-lg mb-2">Total Experience: {experience}</h3>
            <h3 className="text-lg mb-2">Rank Progress: {rankProgressString}</h3>
            <div className="h-4 w-[25rem] bg-transparent rounded --border">
              <div className="h-full --gradient-bg rounded transition-all duration-500 ease-in-out" style={{ width: `${rankProgressPercent}%` }}></div>
            </div>
            <h3>Total Hours Studied: {hours} hours</h3>
        </div>
      </div>
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-3xl --header-name font-bold mb-6">Ranks</h3>

          <Rank bgColor="Gold" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Silver" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Copper" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Blue" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Green" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Pink" />
          <span className="text-3xl font-light">&#x1F845;</span>
          <Rank bgColor="Red" />
        </section>
      </div>
    </>
  )
}
