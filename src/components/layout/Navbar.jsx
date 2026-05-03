"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const links = (
  <>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/allcourses">Courses</NavLink>
    <NavLink href="/profile">My Profile</NavLink>
  </>
);

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="bg-base-100 shadow-sm mb-1">
      <div className="navbar lg:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl hidden lg:inline">
            SkillSphere
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-2 text-md">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {isPending ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="loading loading-spinner loading-xl text-primary"></span>
            </div>
          ) : user ? (
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full lg:w-[50px] lg:h-[50px]"
                src={
                  user?.image ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                width={40}
                height={40}
                alt="User Avatar"
              />
              <div className="hidden md:block">
                <h2 className="font-semibold">{user?.name}</h2>
                <h2>{user?.email}</h2>
              </div>
              <button className="btn">
                <Link
                  href={"/"}
                  onClick={async () => await authClient.signOut()}
                >
                  Logout
                </Link>
              </button>
            </div>
          ) : (
            <div>
              <Link className="btn btn-primary" href="/auth/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
