import { auth } from "@/shared/services/auth";
import db from "@/shared/services/db";
import { genSaltSync, hashSync } from "bcrypt-ts";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  const session = await auth();

  const { name, email, password, surname } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing name, email or password" });
  }

  try {
    const user = await db.user.create({
      data: {
        name: name,
        surname: surname,
        email: email,
        linkedAccount: true,
        password: hashSync(password, 8),
        createdAt: new Date(),
        updatedAt: new Date(),
        // id: crypto.randomUUID(),
      },
    });

    return NextResponse.json({ user: user, status: 200 });
  } catch (error) {
    console.log(session);
    return NextResponse.json({ error: "Algo deu errado!", status: 500 });
  }
}
