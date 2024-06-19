import classNames from "@/util/classNames";
import milestone from "@/util/milestone";
import timelineSect from "@/util/timelineSect";

const timelineContent: timelineSect[] = [
  {
    title: "Data Integration",
    color: "text-red-600 bg-red-100",
    milestones: [
      {
        title:
          "Project data platform for modelling, data integration and visualization",
        timeStr: "Feb, 2024",
      },
      {
        title:
          "Citable Github release version of all code used within the platform on Zenodo",
        timeStr: "Feb, 2025",
      },
      {
        title:
          "Full documentation of the developed DART system and ste-by-step guide to setup infrastructure",
        timeStr: "Feb, 2025",
      },
      {
        title: "Ongoing system monitoring, updating and snagging",
        timeStr: "Nov, 2025",
      },
    ],
  },
  // ////////////////////////////
  {
    title: "Modelling",
    color: "text-blue-600 bg-blue-100",
    milestones: [
      {
        title:
          "Weather forecast skill assessment for Ho Chi Minh and Hanoi with a forecast lead time of up to 7 days",
        timeStr: "Jul, 2023",
      },
      {
        title:
          "Downscaled weather forecast of precipitation, temperature and humidity based on ECMWF forecasts",
        timeStr: "Jan, 2024",
      },
      {
        title:
          "Expand weather forecast skill assessment for raw and calibrated data to 2 weeks forecast range",
        timeStr: "May, 2024",
      },
      {
        title:
          "A mosquito population dynamics model that predicts adult densities based on land cover and weather variables",
        timeStr: "Nov, 2023",
      },
      {
        title: "A flexible plug-and-play spatial dengue epidemiological model",
        timeStr: "Oct, 2024",
      },
      {
        title:
          "Forcasting engines for epidemiological dynamics and hospital occupancy",
        timeStr: "Feb, 2025",
      },
      {
        title: "Dengue forecast skill assessment for Ho Chi Minh and Hanoi",
        timeStr: "Nov, 2025",
      },
    ],
  },
  // ////////////////////////////
  {
    title: "Data Visualization",
    color: "text-green-600 bg-green-100",
    milestones: [
      {
        title:
          "A requirement analysis document for visualization based on a series of discussion with four categories of stakeholders",
        timeStr: "Feb, 2024",
      },
      {
        title:
          "A mobile application for disseminative visualization, forcussing on the stakeholder groups of general public and policy makers",
        timeStr: "Feb, 2025",
      },
      {
        title:
          "A web application with multiple visualization tools for observational, analytical model-developmental and disseminative visualization",
        timeStr: "Feb, 2025",
      },
      {
        title: "A citable Github version of all code for the web application",
        timeStr: "Feb, 2025",
      },
    ],
  },
];

const TimelineSection = ({ title, color, milestones }: any) => {
  return (
    <div>
      <h3 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
        {title}
      </h3>
      {milestones.map((milestone: milestone) => (
        <div
          className="relative py-6 pl-8 sm:pl-32 group"
          key={milestone.title}
        >
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-oxfordBlue after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time
              className={classNames(
                color,
                "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full"
              )}
            >
              {milestone.timeStr}
            </time>
            <div className="text-lg text-slate-900">{milestone.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="relative grid grid-cols-1 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-5 lg:gap-y-12">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Project timeline
      </h2>
      {timelineContent.map((section) => (
        <TimelineSection
          key={section.title}
          title={section.title}
          color={section.color}
          milestones={section.milestones}
        />
      ))}
    </div>
  );
}
