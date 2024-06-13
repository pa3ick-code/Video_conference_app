import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/server";
// import { cn } from "../lib/utils/cn";

export default async function NavBar() {
  return (
    <div className="fixed z-50 flex justify-between w-full h-fit px-6 py-2 text-[#272727] bg-white border-b-[1px]">
      <Link href={`/`} className="flex items-center gap-1">
        <Image 
          src={`./images/logo.svg`}
          alt="logo"
          height={50}
          width={50}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-bold max-sm:hidden">WOOM</p>
      </Link>

      <div className="flex flex-between gap-5">
        <div className="flex items-center gap-4">
            <SignedOut>
              <div className="bg-blue-600 rounded-md text-white font-medium px-6 py-2 cursor-pointer">
                <SignInButton />
              </div>
            </SignedOut>

          <SignedIn >
            <div className="w-300px flex items-center">
              <UserButton 
                showName={true}
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10 border-2 border-blue-500",
                    
                  },
                }}
               />
            </div>
           </SignedIn>
        </div>
        
        <MobileNav />
      </div>
    </div>
  );
}
