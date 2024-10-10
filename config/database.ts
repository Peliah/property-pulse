import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
    mongoose.set("strictQuery", true);

    //if the database already connected, dont connect again.
    if (connected) {
        console.log("Mongo db is connexted");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MONGODB connected");

    } catch (error) {
        console.error(error);

    }
};

export default connectDb;