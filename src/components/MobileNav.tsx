"use client"
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils/cn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet"
import { sideBarLinks } from "../constants";
import Link from "next/link";


export default function MobileNav() {
  const pathName = usePathname();
  return (
    <div className='w-full max-w-[264px] hidden max-sm:flex'>
      <Sheet>
            <SheetTrigger> <IoMenu size={40}/> </SheetTrigger>
            <SheetContent className="h-screen w-fit shadow-xl bg-white text-[#272727] sticky left-0 top-0 p-1 flex flex-col justify-between px-6 py-2 ">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={`/`} className="flex items-center gap-1">
                      <Image 
                        src={`./images/logo.svg`}
                        alt="logo"
                        height={70}
                        width={70}
                        className="max-sm:size-10"
                      />
                      <p className="text-[26px] font-bold text-black max-sm:hidden">WOOM</p>
                    </Link>
                  </SheetTitle>
                <SheetDescription className=" text-base font-normal text-[#272727]" >
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
                                className={cn({"invert": isActive})}
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
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    </div>
  );
}
