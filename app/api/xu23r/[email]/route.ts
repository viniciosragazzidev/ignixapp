import { auth } from "@/shared/services/auth";
import db from "@/shared/services/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;
  const session = await auth();
  const userIsOwner = session?.user.role === "OWNER";
  const sessionUserEmail = session?.user.email;
  if (!email) {
    return NextResponse.json({ error: "Missing email" });
  }
  try {
    const user = await db.user.findFirst({
      where: {
        email: email,
      },
      include: {
        memberships: true,
      },
    });
    return NextResponse.json({ user: user });
  } catch (error) {
    return NextResponse.json({ error: "Usuario não encontrado" });
  }
}
