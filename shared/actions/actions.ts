import { HttpRoutes } from "../@enums/enums";

const urlBase = process.env.NEXT_PUBLIC_BASE_URL;
export const getUserByEmail = async (email: string) => {
  const user = await fetch(`${urlBase}/api/${HttpRoutes.user}/${email}`, {
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
  return user;
};
