import mongoose, { Document, Schema } from 'mongoose';

export interface iClient extends Document {
  alias: String,
  client_id: String
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
  },
  {
    timestamps: true,
  },
);

export const Client = mongoose.model<iClient>('Client', schema);
