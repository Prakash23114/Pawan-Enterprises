import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async () => {
  try {
    const databaseConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `📡 MongoDB Atlas Connected: ${databaseConnection.connection.host}`
    );
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;