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
  const green = 'text-green-500'
  const blue = 'text-blue-500'
  const copper = 'text-yellow-500'
  const silver = 'text-gray-300'
  const gold = 'text-yellow-300'
  const xp = experience;

  const getRankProgress = (xp: number) => {
    if (xp < 100) {
      return `${xp}/100`;
    } else if (xp < 300) {
      return `${xp - 100}/200`;
    } else if (xp < 600) {
      return `${xp - 300}/300`;
    } else if (xp < 1200) {
      return `${xp - 600}/600`;
    } else if (xp < 1800) {
      return `${xp - 1200}/600`;
    } else if (xp < 3000) {
      return `${xp - 1800}/1200`;
    } else {
      return `Max Level`;
    }
  }

  const rankProgress = getRankProgress(xp);

  return (
    <>
      <div>
        <h1>Home</h1>
        <h3>Your Rank: 
          { xp < 100 ? <span className={red}>Red</span> : (xp < 300) ? <span className={pink}>Pink</span> : (xp < 600) ? <span className={green}>Green</span> : (xp < 1200) ? <span className={blue}>Blue</span> : (xp < 1800) ? <span className={copper}>Copper</span> : (xp < 3000) ? <span className={silver}>Silver</span> : <span className={gold}>Gold</span>}
        </h3>
        <h3>Your Experience: {experience}</h3>
        <h3>Your Rank Progress: {rankProgress}</h3>
        <h3 className="text-xl">Ranks:</h3>
        <p>
          <span className={red}>Red</span> -&gt; 
          <span className={pink}>Pink</span> -&gt; 
          <span className={green}>Green</span> -&gt;
          <span className={blue}>Blue</span> -&gt;
          <span className={copper}>Copper</span> -&gt;
          <span className={silver}>Silver</span> -&gt;
          <span className={gold}>Gold</span>
        </p>
      </div>
      <section>
        
      </section>
    </>
  )
}
