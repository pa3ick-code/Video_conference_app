import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center  absolute z-50">
        <SignIn />
    </div>
  );
}