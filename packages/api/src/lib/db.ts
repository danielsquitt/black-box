import { FastifyPluginAsync } from 'fastify';
import mongoose from 'mongoose';
import { DB_NAME, DB_URL } from '../config';

// DB connection
const connectDB = async () => {
  await mongoose.connect(`${DB_URL}/${DB_NAME}`);
  return { close: () => mongoose.disconnect() };
};

export const db_plugin: FastifyPluginAsync = async (app) => {
  await connectDB();
  app.log.info(`Database ready ${DB_URL}`);
};

// Mongoose valid id
export const isValidId = (str: string): boolean => {
  if (!mongoose.Types.ObjectId.isValid(str)) return false;
  const id = new mongoose.Types.ObjectId(str);
  return id._id.toString() === str;
};
