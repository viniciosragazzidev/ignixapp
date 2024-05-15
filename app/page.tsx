// import { auth, signOut } from "@/shared/services/auth";
"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  const user = session;
  console.log(session);

  return (
    <main>
      <h1>Bem vindo {user?.data?.user?.name}</h1>

      {/* <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/signin",
          });
        }}
      >
        <button type="submit">Signout</button>
      </form> */}
    </main>
  );
}
