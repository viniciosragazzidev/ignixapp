import React from "react";
import SigninGoogle from "../../components/signinGoogle";
import SigninForm from "../components/signinForm";

const SigninInterface = ({
  sendUser,
  session,
}: {
  sendUser: any;
  session: any;
}) => {
  return (
    <main className="w-full h-full min-h-screen relative">
      <div className="grid grid-cols-1 w-full gap-4 min-h-screen md:grid-cols-6">
        <div className="bg-muted/40  w-full h-full col-span-3">
          <h1> Ola mundo</h1>
        </div>
        <div className=" w-full h-full flex justify-center items-center col-span-3">
          <div className="w-full flex justify-center">
            <SigninForm
              sendUser={sendUser}
              session={session}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SigninInterface;
