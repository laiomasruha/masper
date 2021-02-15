import mongoose from 'mongoose';

const mongodb = (async () => {
    try {
        let connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        return connection.db(process.env.MONGODB_NAME);

    } catch (err) {
        throw new Error(err.message);
    }
})();

exports.save = async(payload) => {
    try {
        let {
            collection,
            document
        } = payload;
        let instance = await mongodb;
        let target = instance.collection(collection);
        return target.insertOne(document);
    } catch (error) {
        throw new Error(error.message);
    }
};