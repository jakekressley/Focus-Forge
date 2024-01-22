import clientPromise from '../../../lib/MongoClient'

export default async (req, res) => {
    try {
        const client = await clientPromise
        const db = await client.db()

        const users = await db
            .collection("users")
            .find({})
            .toArray();

        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({ error });
    }
}