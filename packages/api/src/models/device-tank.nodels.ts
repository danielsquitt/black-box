import mongoose, { Document, Schema } from 'mongoose';

export interface iDeviceTank extends Document {
  device_id: String,
  client_id: String
}

const schema = new Schema(
  {
    device_id: {
      type: Schema.Types.ObjectId, ref: 'Device', require: true, unique: true, immutable: true,
    },
    tank_id: {
      type: Schema.Types.ObjectId, ref: 'Tank', require: true, unique: true, immutable: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const DeviceTank = mongoose.model<iDeviceTank>('DeviceTank', schema);
export default DeviceTank;
