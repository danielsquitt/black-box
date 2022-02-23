import mongoose, { Document, Schema } from 'mongoose';

export enum UserState {
  PENDING = 'pending',
  CONFIRM = 'confirm',
  DENY = 'deny',
}

export interface iUser extends Document {
  user_id: String,
  client_id: String,
  state:UserState,
}

const schema = new Schema(
  {
    client_id: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
    state: { type: String, num: ['pending', 'confirm', 'deny'], default: 'pending' },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const User = mongoose.model<iUser>('User', schema);
export default User;
