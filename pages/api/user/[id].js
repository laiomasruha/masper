import { ObjectId } from 'bson';
import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
    const { id } = req.query;

    const { db } = await connectToDatabase();

    const user = await db.collection("users").findOne({_id: ObjectId(id)});

    res.status(200).json(user);
}