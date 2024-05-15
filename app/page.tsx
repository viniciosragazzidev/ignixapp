// import { auth, signOut } from "@/shared/services/auth";
import ProtectRoute from "@/shared/components/wrappers/ProtectRoute";
import { auth, signOut } from "@/shared/services/auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  const user = session?.user;

  return (
    <ProtectRoute>
      <main>
        <h1>Bem vindo {user?.name}</h1>

        <form
          action={async () => {
            "use server";

            await signOut({
              redirectTo: "/signin",
            });
          }}
        >
          <button type="submit">Signout</button>
        </form>

        {user?.role === "ADMIN" && (
          <form
            action={async () => {
              "use server";
              redirect("/system");
            }}
          >
            <button type="submit">Gerenciador do Sistema</button>
          </form>
        )}
      </main>
    </ProtectRoute>
  );
}
