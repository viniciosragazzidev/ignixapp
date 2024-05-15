import db from "@/shared/services/db";
import { hashSync } from "bcrypt-ts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing name, email or password" });
  }

  try {
    const user = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashSync(password),
        createdAt: new Date(),
        updatedAt: new Date(),
        id: crypto.randomUUID(),
        role: "USER",
      },
    });

    return NextResponse.json({ user: user, status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Algo deu errado!", status: 500 });
  }
}
