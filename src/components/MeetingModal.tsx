"use client"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
} from "@/src/components/ui/dialog"
import { cn } from "../lib/utils/cn";


interface MeetingModalProps{
    isOpen: boolean;
    onClose: ()=>void;
    title?: string;
    btnText?: string;
    btnIcon?: string;
    className?: string;
    image?: string;
    children?: React.ReactNode;
    handleClick: ()=>void;
}

export default function MeetingModal({
    isOpen,
    onClose,
    title,
    btnText,
    btnIcon,
    className,
    image,
    children,
    handleClick
}: MeetingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
        <DialogContent className="flex flex-col gap-6 max-w-[520px] border-none px-6 py-9">
            <div className="flex flex-col gap-6">
                {image && (
                    <div className="w-fit">
                        <Image src={image} alt="image" height={72} width={72} />
                    </div>
                )}
                <h1 className={cn("text-3xl font-bold text-center leading[42px]", className)}>{title}</h1>
                {children}
                <button 
                    className="bg-blue-500 py-2 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 text-white flex justify-center items-center" 
                    onClick={handleClick}
                >
                    {btnIcon && (
                        <Image src={btnIcon} alt="icon" height={20} width={20}  className="invert"/>
                    )} &nbsp;
                    {btnText || "Schedule Meeting"}
                </button>
            </div>
            {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader> */}
        </DialogContent>
    </Dialog>

  );
}
