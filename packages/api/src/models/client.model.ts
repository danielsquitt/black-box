import mongoose, { Document, Schema } from 'mongoose';

export interface iClient extends Document {
  name: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  country: String,
  cif: String,
  img: String,
}

const schema = new Schema(
  {
    name: {
      type: String, require: true, unique: true, minlength: [3, 'Name min length 3'],
    },
    address: { type: String, minlength: [3, 'Address min length 3'] },
    city: { type: String, minlength: [3, 'City min length 3'] },
    state: { type: String, minlength: [3, 'City min length 3'] },
    zip: { type: String, minlength: [3, 'Zip code min length 3'] },
    country: { type: String, minlength: [3, 'Country min length 3'] },
    cif: { type: String, minlength: [3, 'CIF min length 3'] },
    img: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const Client = mongoose.model<iClient>('Client', schema);
export default Client;
