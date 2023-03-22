import React from "react";
import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <div className="flex flex-col mb-5 space-y-4 relative">
        <h3 className="font-semibold text-2xl">Reset Password</h3>
        <p className="text-gray-600">Please set your new password</p>
      </div>
      {/* Newpassword form */}
      <NewPasswordForm />

      <Link to="/auth/login" className="mt-3 mx-auto items-center inline-flex ">
        <CaretLeft />
        Return to sign in
      </Link>
    </>
  );
};

export default NewPassword;
