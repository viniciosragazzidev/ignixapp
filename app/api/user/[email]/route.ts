import db from "@/shared/services/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;
  if (!email) {
    return NextResponse.json({ error: "Missing email" });
  }
  try {
    const user = await db.user.findFirst({
      where: {
        email: email,
      },
    });
    return NextResponse.json({ user: user });
  } catch (error) {
    return NextResponse.json({ error: "Usuario não encontrado" });
  }
}
