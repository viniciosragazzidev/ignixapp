export const getUserFromDb = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  if (!email || !password) {
    return {
      error: "Email e Senha precisam ser preenchidos",
    };
  }

  try {
    const user = await fetch(`http://localhost:3000/api/user/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return user.json();
  } catch (error) {
    return { error: "Algo deu errado!", status: 500 };
  }
};
