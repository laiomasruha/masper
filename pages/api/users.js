import { ObjectId } from 'bson';
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {

    const { db } = await connectToDatabase();

    const method = req.method;

    switch (method) {
        case 'POST':
            const resultPost = await db.collection("users").insert(req.body);
            res.status(200).json(resultPost.insertedIds);
            break;

        case 'GET':
            const users = await db.collection("users").find({}).toArray();
            res.status(200).json(users);
            break;

        case 'PUT':
            const id = ObjectId(req.body.id);
            delete req.body.id;
            const resultUpdate = await db.collection("users").updateOne(
                { _id: id },
                {
                    $set: req.body,
                    $currentDate: { lastModified: true }
                }
            );
            res.status(200).json(resultUpdate);
            break;

        case 'DELETE':
            const resultDelete = await db.collection("users").deleteOne({ _id: ObjectId(req.body.id) });
            res.status(200).json(resultDelete);
            break;

        default:
            users = await db.collection("users").find().toArray();
            res.status(200).json(users);
            break;
    }

}