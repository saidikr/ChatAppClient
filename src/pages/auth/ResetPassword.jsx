import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/ResetPassword";

const ResetPassword = () => {
  return (
    <div className="flex flex-col space-y-4 mb-5 relative">
      <h3 className="text-2xl font-semibold">Forgot your Password?</h3>
      <p className="text-gray-600">
        Please enter the email address associated with your account and We will
        email you a link to reset your password.
      </p>
      {/*  resetPasswordForm */}
      <ResetPasswordForm/>
      <Link to="/auth/login" className="mt-3 mx-auto items-center inline-flex ">
        <CaretLeft />
        Return to sign in
      </Link>
    </div>
  );
};

export default ResetPassword;
