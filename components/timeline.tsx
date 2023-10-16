import classNames from "@/util/classNames";
import timelineSect from "@/util/timelineSect";
import milestone from "@/util/milestone";

const timelineContent: timelineSect[] = [
  {
    title: "Work Package 1",
    color: "text-red-600 bg-red-100",
    milestones: [
      {
        title: "Acme was founded in Milan, Italy",
        timeStr: "May, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        title: "Reached 5K customers",
        timeStr: "Jul, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      }
    ]
  },
  // ////////////////////////////
  {
    title: "Work Package 2",
    color: "text-blue-600 bg-blue-100",
    milestones: [
      {
        title: "Acme was founded in Milan, Italy",
        timeStr: "May, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        title: "Reached 5K customers",
        timeStr: "Jul, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      }
    ]
  },
  // ////////////////////////////
  {
    title: "Work Package 3",
    color: "text-green-600 bg-green-100",
    milestones: [
      {
        title: "Acme was founded in Milan, Italy",
        timeStr: "May, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        title: "Reached 5K customers",
        timeStr: "Jul, 2020",
        description: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      }
    ]
  },
]

const TimelineSection = ({ title, color, milestones }: any) => {
  return (
    <div>
      <h3 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">{title}</h3>
      {
        milestones.map((milestone: milestone) => (
          <div className="relative pl-8 sm:pl-32 py-6 group" key={milestone.title}>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-oxfordBlue after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className={classNames(color, "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full")}>{milestone.timeStr}</time>
              <div className="text-xl font-bold text-slate-900">{milestone.title}</div>
            </div>
            <div className="text-slate-500">{milestone.description}</div>
          </div>
        ))
      }
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="relative grid grid-cols-1 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-5 lg:gap-y-12">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Project timeline</h2>
      {
        timelineContent.map((section) => (
          <TimelineSection title={section.title} color={section.color} milestones={section.milestones} />
        ))
      }
    </div>
  )
}