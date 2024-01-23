"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [experience, setExperience] = useState(0);

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setData(res.data.data._id);
    console.log(res.data.data.experience)
    setExperience(res.data.data.experience);
  }
  return (
    <div>
      <h1>Profile here</h1>
      <button onClick={getUserDetails}>Details</button>
      <h3>experience: {experience}</h3>
      <p>Hours Studied: </p>
    </div>
  )
}

export default Profile
