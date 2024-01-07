import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;

const options = { useNewURLParser: true, useUnifiedTopology: true };

let client;
let database;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(url, options);
    }

    //if (!client.isConnected()) await client.connect();

    database = client.db("test")
    return database;
}

export default connectToDatabase;