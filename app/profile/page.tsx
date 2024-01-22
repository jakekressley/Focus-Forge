import React from 'react'
import { getBalance, updateBalance } from '../../components/currency/StudyCredit'
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/MongoClient';

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
/*
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
    .collection("test")
    .find()
    .toArray();

    return {
        props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
    } catch (e) {
    console.error(e);
  }
}
*/
