import CallList from "@/src/components/CallList"

export default function Upcoming() {
  return (
    <section className="flex size-full flex-col gap-5">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>

      <CallList type="upcoming" />
    </section>
  );
}
