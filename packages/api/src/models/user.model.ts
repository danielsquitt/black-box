import mongoose, { Document, Schema } from 'mongoose';

export enum UserState {
  PENDING = 'pending',
  CONFIRM = 'confirmed',
  DENY = 'deny',
}

export enum UserRole {
  ADMIN = 'admin',
  OWNER = 'owner',
  PROD = 'prod',
}

export interface iUser extends Document {
  user_id: String,
  name: String,
  client_id: String,
  state:UserState,
  role:UserRole,
}

const schema = new Schema(
  {
    client_id: { type: Schema.Types.ObjectId, ref: 'Client' },
    user_id: { type: String, required: true },
    name: { type: String },
    state: { type: String, num: ['pending', 'confirm', 'deny'], default: 'pending' },
    role: { type: String, num: ['admin', 'owner', 'prod'], default: 'prod' },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const User = mongoose.model<iUser>('User', schema);
export default User;
