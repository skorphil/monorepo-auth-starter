import { dbConnect } from "./dbConnect";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";
import User from "../models/user.model";
import Session from "../models/session.model";

const user = User;
const session = Session;

await dbConnect();

const adapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users")
);

export { adapter };
