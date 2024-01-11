import React from 'react'
import { getBalance, updateBalance } from '../../components/currency/StudyCredit'
import { ObjectId } from 'mongodb';

async function Profile() {
  const userId = '659337a330dbca92e58f9699';
  const balance = await getBalance(userId);

  updateBalance(userId, 13);  
  return (
    <div>
      <h1>Profile here</h1>
      <p>Hours Studied: </p>
      <p>Balance: {balance}</p>
    </div>
  )
}

export default Profile