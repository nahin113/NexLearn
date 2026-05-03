"use client";

import React from "react";
import { authClient } from "@/lib/auth-client"; 
import Link from "next/link";

const UserProfile = () => {

  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold mb-6">My Profile</h2>

          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.image || "https://i.pravatar.cc/300"}
                alt={user?.name || "User"}
              />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <p className="text-xl font-semibold">
              {user?.name || "Anonymous User"}
            </p>
            <p className="text-base-content/60">
              {user?.email || "No email provided"}
            </p>
          </div>

          <div className="card-actions w-full">
            <Link href="/profile/update" className="w-full">
              <button className="btn btn-primary btn-block">
                Update Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
