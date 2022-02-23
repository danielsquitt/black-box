import mongoose from 'mongoose';
import { DB_NAME, DB_URL } from '../config';

const connectDB = async () => {
  await mongoose.connect(`${DB_URL}/${DB_NAME}`);
  return { close: () => mongoose.disconnect() };
};

export default connectDB;

export const isValidId = (str: string): boolean => {
  if (!mongoose.Types.ObjectId.isValid(str)) return false;
  const id = new mongoose.Types.ObjectId(str);
  return id._id.toString() === str;
};
