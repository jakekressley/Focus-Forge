import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const options = { useNewURLParser: true, useUnifiedTopology: true };

let client;
let database;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri, options);
    }

    //if (!client.isConnected()) await client.connect();

    database = client.db("test")
    return database;
}

export default connectToDatabase;