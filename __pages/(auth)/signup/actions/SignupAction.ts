"use server";
import { HttpErrorCode, HttpRoutes } from "@/shared/@enums/enums";
import { setHibrid } from "@/shared/components/providers/HibridToast";
import { compareSync, hashSync } from "bcrypt-ts";
const urlBase = process.env.NEXT_PUBLIC_BASE_URL;
export const SignupAction = async (user: any) => {
  try {
    const userSession = await fetch(
      `${urlBase}/api/${HttpRoutes.user}/${user.email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        next: {
          revalidate: 100,
          tags: ["user"],
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data.user);

    if (userSession) {
      return {
        message: "❌ Usuário ja cadastrado com esse email!",
        code: HttpErrorCode.NotFound,
      };
    } else {
      const newUser = await fetch(`${urlBase}/api/${HttpRoutes.user}/create`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => data.user);

      if (newUser) {
        setHibrid({
          type: "success",
          message: "✅ Usuário criado com sucesso!",
        });

        return {
          message: "✅ Usuário criado com sucesso!",
          code: HttpErrorCode.OK,
          user: newUser,
        };
      } else {
        return {
          message: "❌ Algo deu errado. Tente novamente mais tarde!",
          code: HttpErrorCode.BadRequest,
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
