import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
  },
  { _id: false } // default mongodb _id will be replaced by custom _id, which is being generated from entropy as Lucia docs suggesting
);

export default models.User || model("User", userSchema);
