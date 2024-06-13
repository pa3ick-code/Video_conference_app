"use client"
import Image from "next/image"
import { cn } from "@/src/lib/utils/cn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker' ;
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";

interface CardsProps{
    items:{
        link: string,
        icon: string,
        title: string,
        description: string,
        style: string,
        handleClick?:string
    }[]
}
export default function Cards({items}: CardsProps) {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState< string | undefined>();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: ''
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const{ toast } = useToast()
  
  const createMeeting = async()=>{
    if(!user || !client) return;

    try {
      if(!values.dateTime){
        toast({
          title: "Select date and time"
        });
        return
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if(!call) throw new Error("Failed to create call.");
      const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString() ;
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startAt,
          custom: {
            description
          }
        }
      });

      setCallDetails(call);
      if(!values.description){
        router.push(`/meeting/${call.id}`)
      } 
      toast({title: "Meeting created",
        description: `Meeting ID: ${call.id}`
      })

    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      })
    }
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

  return (
    <div  className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10 select-none'>
      {
        items.map(({title, style, icon, description, handleClick})=>(
            <div 
              key={title} 
              className={cn("rounded-2xl flex flex-col justify-between p-5 cursor-pointer min-h-[200px] xl:max-w-[270-x]", style)} 
              onClick={()=> {
                if(title === "Recordings") router.push(`/recording`);
                setMeetingState(handleClick);
              }}
            >
                <div className="glassmorphism p-2 rounded-md w-fit">
                    <Image src={icon} height={15} width={15} alt="icon"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-xl font-bold">{title}</h1>
                    <p className="text-white text-sm">{description}</p>
                </div>
            </div>
        ))
      }

      {!callDetails? (
        <MeetingModal 
        isOpen={meetingState === "isSchedule"}
        onClose={()=> setMeetingState(undefined)}
        title="Create Meeting"
        // btnText="Start a meeting"
        handleClick={createMeeting}
      >
        <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
      </MeetingModal>
      ):(
        <MeetingModal 
        isOpen={meetingState === "isSchedule"}
        onClose={()=> setMeetingState(undefined)}
        title="Meeting Created"
        btnText="Copy meeting link"
        btnIcon="/images/copy.svg"
        image="/images/checked.svg"
        handleClick={() => {
          navigator.clipboard.writeText(meetingLink);
          toast({title: "Link Copied"})
        }}
      />
      )}

      <MeetingModal 
        isOpen={meetingState === "isInstant"}
        onClose={()=> setMeetingState(undefined)}
        title="Start an Instant meeting"
        btnText="Start a meeting"
        handleClick={createMeeting}
      />

      <MeetingModal 
        isOpen={meetingState === "isJoining"}
        onClose={()=> setMeetingState(undefined)}
        title="Enter meeting link"
        btnText="Join meeting"
        handleClick={() => { router.push(values.link)}}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

    </div>
  );
}
