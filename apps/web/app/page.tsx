import { validateRequest } from "../utils/auth";

export default async function ProtectedPage() {
  const { user } = await validateRequest();
  if (!user) {
    return <h1>Not authenticated!</h1>;
  }
  return <h1>Hi, {user.username}!</h1>;
}
