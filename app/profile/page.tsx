import React, { useState } from 'react'
import { getBalance, updateBalance } from '../../components/currency/StudyCredit'
import { useRouter } from 'next/navigation';
import { ObjectId } from 'mongodb';
import axios from 'axios';

export function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setData(res.data.data._id)
  }
  return (
    <div>
      <h1>Profile here</h1>
      <button onClick={getUserDetails}>Details</button>
      <h2>{data === "nothing" ? "nothing" : data}</h2>
      <p>Hours Studied: </p>
    </div>
  )
}

export default Profile
