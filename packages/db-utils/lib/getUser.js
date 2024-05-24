import User from "../models/user.model";

export async function getUser(userData) {
  const user = await User.findOne(userData, {
    _id: 1,
    password_hash: 1,
    username: 1,
  });
  if (user) {
    return user;
  } else return false;
}
