import { AiOutlineLoading } from "react-icons/ai";

export default function Loader() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <AiOutlineLoading size={30} className="animate-spin opacity-20 "/>
    </div>
  );
}
