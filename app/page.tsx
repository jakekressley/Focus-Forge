import { useState, useEffect } from 'react'
import { getServerSession } from 'next-auth'
import axios from 'axios';

export default async function Home() {
  //const [data, setData] = useState("nothing");
  //const [experience, setExperience] = useState(0);
  const session = await getServerSession();

  //Red -> Pink -> Green  -> Blue -> Copper -> Silver -> Gold
  const red = 'text-red-500'
  const pink = 'text-pink-500'
  const green = 'text-green-500'
  const blue = 'text-blue-500'
  const copper = 'text-yellow-500'
  const silver = 'text-gray-500'
  const gold = 'text-yellow-300'
  const xp = 12;
/*
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      setData(res.data.data._id);
      console.log(res.data.data.experience)
      setExperience(res.data.data.experience);
    }

    getUserDetails();
  }, [])
*/
  return (
    <>
      <div>
        <h1>Home</h1>
        <h3>Your Rank: 
          { xp < 60 ? <span className={red}>Red</span> : (xp < 300) ? <span className={pink}>Pink</span> : (xp < 600) ? <span className={green}>Green</span> : (xp < 1200) ? <span className={blue}>Blue</span> : (xp < 1800) ? <span className={copper}>Copper</span> : (xp < 3000) ? <span className={silver}>Silver</span> : <span className={gold}>Gold</span>}
        </h3>
      </div>
    </>
  )
}
