import mongoose, { Document, Schema } from 'mongoose';

export interface iTanck extends Document {
  alias: String,
  description: String,
  client_id: String
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const Tank = mongoose.model<iTanck>('Tank', schema);
export default Tank;
