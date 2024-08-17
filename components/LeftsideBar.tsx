"use client";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import {
  Briefcase,
  CircleHelp,
  CircleUser,
  Home,
  LogOut,
  Star,
  Tag,
  User,
  UserPlusIcon,
  Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
interface SidebarLink {
  imgURL: React.ReactNode;
  route: string;
  label: string;
}

const LeftsideBar = () => {
  const sidebarLinks: SidebarLink[] = [
    {
      imgURL: <Home></Home>,
      route: "/",
      label: "Home",
    },
    {
      imgURL: <Users></Users>,
      route: "/community",
      label: "Community",
    },
    {
      imgURL: <Star></Star>,
      route: "/collection",
      label: "Collections",
    },
    {
      imgURL: <Briefcase></Briefcase>,
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: <Tag></Tag>,
      route: "/tags",
      label: "Tags",
    },
    {
      imgURL: <User></User>,
      route: "/profile",
      label: "Profile",
    },
    {
      imgURL: <CircleHelp></CircleHelp>,
      route: "/ask-question",
      label: "Ask a question",
    },
  ];

  const pathname = usePathname();
  const { signOut } = useClerk();
  return (
    <section className="bg-zinc-100/30 dark:bg-zinc-900   background-light900-dark200 custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex-col flex flex-1">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Button
              key={item.label}
              variant={"default"}
              size={"default"}
              className="bg-transparent hover:bg-transparent justify-start  w-full h-[4rem] "
            >
              <Link
                href={item.route}
                className={`flex items-center justify-start h-full w-full gap-4 px-4  ${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-black dark:text-white"
                }`}
              >
                <span className="h-6 w-6 flex items-center">{item.imgURL}</span>
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium "
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            </Button>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3 mt-6">
          <Link href="/sign-in" className="w-full h-full">
            <Button
              variant={"default"}
              className="w-full rounded-lg dark:bg-slate-800 text-orange-500 bg-slate-200/50 hover:bg-slate-200/40"
            >
              <CircleUser className="h-6 w-6 lg:hidden"></CircleUser>
              <span className="max-lg:hidden  ">Log In</span>
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full h-full">
            <Button
              variant={"default"}
              className="w-full rounded-lg bg-slate-500/40 dark:bg-slate-800/50 text-black dark:text-white hover:bg-slate-800/40"
            >
              <UserPlusIcon className="h-6 w-6 lg:hidden"></UserPlusIcon>
              <span className="max-lg:hidden  ">Sign Up</span>

            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-12 flex flex-col gap-3">
          <Link href="/sign-up" className="w-full h-full">
            <Button
              variant={"default"}
              className="w-full gap-2 rounded-lg dark:bg-slate-800 text-orange-500 bg-slate-200/50 hover:bg-slate-200/40 dark:hover:bg-slate-800/50"
              onClick={() => signOut({ redirectUrl: "/" })}
            >
              <LogOut className="h-6 w-6"></LogOut>
              <span className="max-lg:hidden">
                
              Sign out
              </span>
            </Button>
          </Link>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftsideBar;
