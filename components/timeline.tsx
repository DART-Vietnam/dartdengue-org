
import TimelineWP1 from "@/components/timeline-wp1";
import TimelineWP3 from "@/components/timeline-wp3";
import TimelineWP2 from "@/components/timeline-wp2";

export default function Timeline() {
  return (
    <div className="relative grid grid-cols-1 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-5 lg:gap-y-12">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Project timeline</h2>
      <TimelineWP1 />
      <TimelineWP2 />
      <TimelineWP3 />
    </div>
  )
}