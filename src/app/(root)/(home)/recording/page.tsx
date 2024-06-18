import { BackgroundBeams } from "@/src/components";
import CallList from "@/src/components/CallList"

export default function Recording() {
  return (
    <div className="flex size-full flex-col gap-5">
      <h1 className='text-3xl font-bold'> Recording </h1>
      <CallList type="recordings" />
      <BackgroundBeams />
    </div>
  );
}
