import Image from "next/image";

import SigninForm from "../components/signinForm";

export const SigninInterface = ({
  sendUser,
  session,
}: {
  sendUser: any;
  session: any;
}) => {
  return (
    <div className="w-full lg:grid h-max min-h-screen  lg:grid-cols-2 ">
      <div className="flex  justify-center bg-primary items-center">
        <SigninForm
          sendUser={sendUser}
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
