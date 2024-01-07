import { useState, useEffect } from "react";
import connectToDatabase from "../../mongo";
import { ObjectId } from "mongodb";

export async function getBalance(userId: string) {
    const db = await connectToDatabase();
    const collection = db.collection("users")

    //@ts-ignore
    const user = await collection.findOne({ _id: new ObjectId(userId) });

    if (user) {
        const balance = user.balance;
        console.log('User Balance:', balance);
        return balance;
    }
    else {
        console.log('User not found');
        return null;
    }
}

export async function updateBalance(userId: string, amount: number) {
    const db = await connectToDatabase();
    const collection = db.collection("users");
  
    const result = await collection.updateOne(
      { _id: new ObjectId(userId) },
      { $inc: { balance: amount } } // Increment the 'balance' field by 1
    );
    console.log(result);
}
/*
const StudyCredit = () => {
    const [totalCurrency, setTotalCurrency] = useState(0);
    const collection = db.collection()
}
*/