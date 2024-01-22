import mongoose from 'mongoose';

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI as "");
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;