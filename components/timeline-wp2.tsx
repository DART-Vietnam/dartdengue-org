import timelineObj from "@/util/timelineObj"

const timelineContent: timelineObj[] = [
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

export default function TimelineWP2() {
  return (
    <div>
      <h3 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">Work Package 2</h3>
      {
        timelineContent.map((milestone) => (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">{milestone.timeStr}</time>
              <div className="text-xl font-bold text-slate-900">{milestone.title}</div>
            </div>
            <div className="text-slate-500">{milestone.description}</div>
          </div>
        ))
      }
    </div>
  )
}