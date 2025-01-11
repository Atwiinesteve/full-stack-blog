import mongoose from "mongoose";

export default async function connectDB () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};