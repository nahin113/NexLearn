"use client";
import { createAuthClient } from "better-auth/client";
import { FaGoogle } from "react-icons/fa";
const authClient = createAuthClient();
const LoginWithGoogle = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex flex-col gap-2 pt-4">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white flex items-center gap-3 w-full"
      >
        <FaGoogle className="text-lg" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default LoginWithGoogle;
