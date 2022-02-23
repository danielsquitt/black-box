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
    name: { type: String, require: true },
    address: { type: String },
    city: { type: String },
    zip: { type: Number },
    country: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Client = mongoose.model<iClient>('Client', schema);
