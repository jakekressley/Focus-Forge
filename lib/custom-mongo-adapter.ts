import { MongoClient } from "mongodb";
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { UserDataTypes } from "@/types";

class CustomMongoDBAdapter extends MongoDBAdapter {
    async createUser(profile: UserDataTypes) {
        const user = await super.createUser(profile);

        user.balance = 0;
        user.isRed = true;
        user.isPink = false;
        user.isGreen = false;
        user.isBlue = false;
        user.isSilver = false;
        user.isGold = false;

        await this.db.collection(this.collection).updateOne(
            { $set: user },
            { upsert: true }
        );

        return user
    }
}