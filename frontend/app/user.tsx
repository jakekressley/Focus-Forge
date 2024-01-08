import { ObjectId } from "mongodb";
import connectToDatabase from "../mongo";
import { UserDataTypes } from "@/types";

// Red -> Pink -> Green  -> Blue -> Silver -> Gold
enum Colors {
    Red = 'Red',
    Pink = 'Pink',
    Green = 'Green',
    Blue = 'Blue',
    Silver = 'Silver',
    Gold = 'Gold'
}

export function getHighestOrderColor(user: UserDataTypes) {
    if (user.isGold) return Colors.Gold;
    else if (user.isSilver) return Colors.Silver;
    else if (user.isBlue) return Colors.Blue;
    else if (user.isGreen) return Colors.Green;
    else if (user.isPink) return Colors.Pink;
    else return Colors.Red;
}

export async function saveUserData(userData: UserDataTypes): Promise<boolean> {
    const db = await connectToDatabase();
    const collection = db.collection("users");

    try {
        const result = await collection.updateOne(
            { _id: new ObjectId(userData._id) },
            { $set: userData },
            { upsert: true } // insert if not found
        );

        if (result.modifiedCount === 1 || result.upsertedCount === 1) {
            console.log('User data saved successfully');
            return true;
        }
        else {
            console.log('User data not saved');
            return false;
        }
    }
    catch (error) {
        console.error('Error saving user data:', error);
        return false;
    }
}