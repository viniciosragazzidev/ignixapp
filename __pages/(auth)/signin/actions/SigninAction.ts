"use server";
import { HttpErrorCode } from "@/shared/@enums/enums";
import { setHibrid } from "@/shared/components/providers/HibridToast";
import { compareSync } from "bcrypt-ts";
const urlBase = process.env.NEXT_PUBLIC_BASE_URL;
export const SigninAction = async (user: any) => {
  try {
    const userSession = await fetch(`${urlBase}/api/user/${user.email}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      next: {
        revalidate: 100,
        tags: ["user"],
      },
    })
      .then((response) => response.json())
      .then((data) => data.user);

    console.log(userSession);

    if (!userSession) {
      return {
        message: "❌ Usuário não encontrado!",
        code: HttpErrorCode.NotFound,
      };
    } else {
      const isPasswordValid = compareSync(user.password, userSession.password);

      if (isPasswordValid) {
        return {
          message: "🎉 Login efetuado com sucesso!",
          user: userSession,
          code: HttpErrorCode.OK,
        };
      } else {
        return {
          message: "🔑 Email ou senha inválido!",
          code: HttpErrorCode.Unauthorized,
        };
      }
    }
  } catch (error) {
    return {
      message: "❌ Algo deu errado. Tente novamente mais tarde!",
      error: error,
      code: HttpErrorCode.BadRequest,
    };
  }
};
