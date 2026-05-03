"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import LoginWithGoogle from "@/components/ui/LoginWithGoogle";
import { redirect } from "next/navigation";

const handleLoginFunc = async (data) => {
  const { email, password } = data;

  const { data: res, error } = await authClient.signIn.email({
    email: email,
    password: password,
    rememberMe: true,
  });

  if (res) {
    toast.success("Login Successful");
    redirect("/");
  }
  if (error) toast.error(error.message);
};

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   const handleGoogleSignIn = async () => {
  //     const data = await authClient.signIn.social({
  //       provider: "google",
  //     });
  //     console.log(data);
  //   };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-base-200">
      <div className="p-30 rounded-xl bg-white">
        <h2 className="font-bold text-center text-3xl">Login Your Account</h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset rounded-box w-xs ">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label">Password</label>
            <div className="relative w-full max-w-xs">
              <input
                type={isVisible ? "text" : "password"}
                {...register("password", {
                  required: "Password field is required",
                })}
                className="input input-bordered w-full pr-10"
                placeholder="Password"
              />

              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link className="text-blue-700" href={"/auth/register"}>
            register
          </Link>
        </p>
        <LoginWithGoogle></LoginWithGoogle>
      </div>
    </div>
  );
};

export default LoginPage;
