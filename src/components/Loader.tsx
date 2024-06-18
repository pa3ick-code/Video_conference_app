import { AiOutlineLoading } from "react-icons/ai";

export default function Loader() {
  return (
    <div className='flex h-screen flex-col justify-center items-center'>
      <AiOutlineLoading size={40} color="#3b82f6" className="animate-spin" />
      <p className="font-bold text-2xl text-blue-500 mt-10">Woom</p>
    </div>
  );
}
