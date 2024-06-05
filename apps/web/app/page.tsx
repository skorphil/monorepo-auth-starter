import { validateRequest } from "../utils/auth";
import { lucia } from "@monorepo-auth/auth-utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { ActionResult } from "next/dist/server/app-render/types";

export default async function ProtectedPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect(process.env.LANDING_URL as string);
  }
  return (
    <>
      <h1>Web-app</h1>
      <h2>Hi, {user.username}!</h2>
      <form action={logout}>
        <button>Sign out</button>
      </form>
    </>
  );
}

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect(process.env.LANDING_URL as string);
}
