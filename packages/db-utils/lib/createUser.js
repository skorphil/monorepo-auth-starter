import { dbConnect } from "./dbConnect";
import User from "../models/user.model";

export async function createUser(userData) {
  const user = await new User(userData);
  try {
    await dbConnect();
    await user.save();
    console.debug("User saved to db");
  } catch (error) {
    throw error;
  }
}
