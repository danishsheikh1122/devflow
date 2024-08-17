import {
  SignedIn,
  UserButton
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import GlobalSearch from "../GlobalSearch";
import MobileNav from "../MobileNav";
import { ModeToggle } from "../mode-toggle";
const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 bg-zinc-100/30 dark:bg-zinc-900 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        ></Image>
        <p className="text-lg font-semibold space-grotesk  text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-orange-500 ">Flow</span>
        </p>
      </Link>
      <GlobalSearch></GlobalSearch>
      <div className="flex-between gap-5"> 
        <ModeToggle />
        <div className="hidden lg:block">
          <SignedIn>
            <UserButton
              afterSwitchSessionUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            ></UserButton>
          </SignedIn>
        </div>
        <MobileNav></MobileNav>
      </div>
    </nav>
  );
};

export default NavBar;
