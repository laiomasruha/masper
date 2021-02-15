import dbConnect from '../connectors/mongodbConnector';

const db = await dbConnect();

console.log(db);

