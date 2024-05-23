import Image from "next/image";

import SignupForm from "../components/signupForm";

export const SignupInterface = ({
  createUser,
  session,
}: {
  createUser: any;
  session: any;
}) => {
  return (
    <div className="w-full lg:grid h-max min-h-screen  lg:grid-cols-2 ">
      <div className="flex  justify-center bg-primary items-center">
        <SignupForm
          createUser={createUser}
          session={session}
        />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
