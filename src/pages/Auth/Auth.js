import React from "react";
import LoginForm from "./LoginForm";

const Auth = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="bg-lightgray rounded-xl">
          <div className="mt-10 text-center text-xl font-semibold">Login</div>
          <div className="p-20">
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
