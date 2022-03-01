import mongoose, { Document, Schema } from 'mongoose';

export interface iDevice extends Document {
  alias: String,
  type: String,
  version: String,
  sw_v: String,
  client_id: String
}

const schema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    type: { type: String },
    version: { type: String },
    sw_v: { type: String },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const Device = mongoose.model<iDevice>('Device', schema);
export default Device;
