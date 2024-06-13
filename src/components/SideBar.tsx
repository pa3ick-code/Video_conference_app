"use client"
import { sideBarLinks } from "@/src/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils/cn";

export default function SideBar() {
  const pathName = usePathname();
  return (
    <nav className="h-screen w-fit shadow-xl sticky z-10 left-0 top-0 p-1 flex flex-col justify-between  max-sm:hidden lg:w-[256px] lg:px-3">
      <div className="mt-20">
        {
        sideBarLinks.map(({label, route, imgUrl}) => {
          const isActive = pathName === route || pathName.startsWith(`${route}/`);
          return(
            <div key={label} className="my-5">
            <Link href={route} className={cn("flex items-center gap-6 p-3 rounded-lg", {'bg-blue-600 text-white ': isActive})} >
              <img 
                src={imgUrl} 
                alt={imgUrl} 
                width={30}
                height={30}
                className={cn("invert opacity-90",{"invert-0": isActive})}
                />
            
                <p>
                  {label}
                </p>
            </Link>
          </div>
          )
        })
      }
      </div>
    </nav>
  );
}

