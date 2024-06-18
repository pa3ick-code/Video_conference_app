import { BackgroundBeams, MeetingTypeLists} from "@/src/components";
import { Time, Today }from "../../../lib/utils";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user  = await currentUser();
  return (
    <section className='flex size-full flex-col gap-5'>
      <div className=" relative z-10">
        <div className="h-[300px] w-full rounded-md bg-hero bg-cover bg-center max-sm:px-6 ">
          <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11">
            <h1 className="glassmorphism p-4 rounded-md w-fit text-white font-medium text-center">
              Upcoming event at 02:30PM
            </h1>
            <div className="flex flex-col gap-2 text-white">
              <h1 className="text-6xl font-bold max-sm:text-4xl">
                <Time />
              </h1>
              <p className="text-3xl font-semibold max-sm:font-normal">
                <Today />
              </p>
            </div>
          </div>
        </div>
        <MeetingTypeLists />
      </div>
      <BackgroundBeams />
    </section>
  );
}
