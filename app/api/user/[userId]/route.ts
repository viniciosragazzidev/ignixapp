import db from "@/shared/services/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  if (!userId) {
    return NextResponse.json({ error: "Missing userId" });
  }
  try {
    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });
    return NextResponse.json({ user: user });
  } catch (error) {
    return NextResponse.json({ error: "Usuario não encontrado" });
  }
}
