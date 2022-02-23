import mongoose, { Document, Schema } from 'mongoose';

export interface iClient extends Document {
  name: String,
  address: String,
  city: String,
  zip: Number,
  country: String,
}

const schema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    address: { type: String },
    city: { type: String },
    zip: { type: Number, max: [6, 'Zip max length 6'], min: [4, 'Zip max length 4'] },
    country: { type: String, default: 'Spain' },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const Client = mongoose.model<iClient>('Client', schema);
export default Client;
