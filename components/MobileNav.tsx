"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Home,
  Menu,
  Star,
  Users,
  Briefcase,
  Tag,
  User,
  CircleHelp,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
interface SidebarLink {
  imgURL: React.ReactNode;
  route: string;
  label: string;
}
const MobileNav = () => {
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

  const NavContents = () => {
    const pathname = usePathname();

    return (
      <section className="flex h-full flex-col pt-10">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <SheetClose asChild key={item.label}>
              <Button
                variant={"default"}
                size={"default"}
                className="bg-transparent hover:bg-transparent justify-start w-full h-[4rem] "
              >
                <Link
                  href={item.route}
                  className={`flex items-center justify-start h-full w-full gap-4 px-2 ${
                    isActive
                      ? "primary-gradient rounded-lg text-light-900"
                      : "text-black dark:text-white"
                  }`}
                >
                  {/* <Image
                    src={item.imgURL}
                    alt={item.imgURL}
                    width={20}
                    height={20}
                    className={`${isActive ? "dark:invert" : ""} `}
                  ></Image> */}
                  <span className="h-6 w-6 flex items-center">
                    {item.imgURL}
                  </span>
                  <p className={`${isActive ? "base-bold" : "base-medium "}`}>
                    {item.label}
                  </p>
                </Link>
              </Button>
            </SheetClose>
          );
        })}
      </section>
    );
  };

  return (
    <div className="lg:hidden md:hidden sm:block flex">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 cursor-pointer"></Menu>
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <SheetHeader>
            <SheetTitle className="mt-5 flex gap-2 px-4">
              <Image
                src="/assets/images/site-logo.svg"
                width={23}
                height={23}
                alt="DevFlow"
              ></Image>
              <p className="text-xl font-semibold space-grotesk text-dark-100 dark:text-light-900">
                Dev<span className="text-orange-500 ">Flow</span>
              </p>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            <div>
              <SheetClose asChild>
                <NavContents></NavContents>
              </SheetClose>
            </div>
            <SignedOut>
              <div className="flex flex-col gap-3 mt-6">
                <SheetClose asChild className="px-4 ">
                  <Link href="/sign-in" className="w-full h-full">
                    <Button
                      variant={"default"}
                      className="w-full rounded-lg dark:bg-slate-800 text-orange-500 bg-slate-200/50"
                    >
                      Log In
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className="px-4">
                  <Link href="/sign-up" className="w-full h-full">
                    <Button
                      variant={"default"}
                      className="w-full rounded-lg bg-slate-500/40 dark:bg-slate-800/50 text-black dark:text-white hover:bg-slate-800/40"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SignedOut>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
