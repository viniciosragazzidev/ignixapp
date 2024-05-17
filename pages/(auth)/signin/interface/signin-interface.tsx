import React from "react";
import SigninGoogle from "../../components/signinGoogle";

const SigninInterface = ({
  sendUser,
  session,
}: {
  sendUser: any;
  session: any;
}) => {
  return (
    <main>
      <h1></h1>
      <SigninGoogle />
    </main>
  );
};

export default SigninInterface;
