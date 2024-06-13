
import Cards from "./Cards";
import { meetingTypeList } from "../constants";

export default function MeetingTypeLists() {
  return (
    <section className='relative z-10'>
      <Cards items={meetingTypeList}/>
    </section>
  );
}
