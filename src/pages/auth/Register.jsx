import React from "react";
import { Link } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col relative mb-5 space-y-4 ">
      <h4 className="text-xl font-semibold">Get Started With App</h4>
      <div className="flex space-x-1">
        <p>Already have an account?</p>
        <Link className="text-blue-700 hover:underline" to="/auth/login">
          Sign in
        </Link>
      </div>
      {/* register Form */}
      <RegisterForm />
      <div className="mt-3 text-center text-gray-600">
        {"By signing up, I agree to "}
        <Link className="underline text-blue-800 ">Terms of services</Link>
        {" and "}
        <Link className="underline text-blue-800">Privacy Policy</Link>
      </div>
      <AuthSocial />
    </div>
  );
};

export default Register;
