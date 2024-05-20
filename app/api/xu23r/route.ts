import { auth } from "@/shared/services/auth";
import db from "@/shared/services/db";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest, response: NextResponse) {
  const session = await auth();
  const userIsOwner = session?.user.role === "OWNER";

  try {
    if (userIsOwner) {
      const users = await db.user.findMany();
      return NextResponse.json({ users: users, status: 200 });
    } else {
      return NextResponse.json({ error: "Sem permissão!", status: 402 });
    }
  } catch (error) {
    NextResponse.json({ error: "Algo deu errado!", status: 500 });
  }
}
