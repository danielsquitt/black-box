import mongoose, { Document, Schema } from 'mongoose';

export interface iClient extends Document {
  alias: String,
  description: String,
  client_id: String
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
    device_id: { type: Schema.Types.ObjectId, ref: 'Device', require: true },
  },
  {
    timestamps: true,
  },
);

export const Client = mongoose.model<iClient>('Client', schema);
