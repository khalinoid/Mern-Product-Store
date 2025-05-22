import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongose Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`DBError: `, error.message);
  }
};
