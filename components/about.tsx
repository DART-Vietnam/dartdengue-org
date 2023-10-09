import { CameraIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function About() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            About the project
          </h2>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative flex items-center lg:row-start-1 lg:col-start-2 ">
            <svg
              className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="shadow-lg h-96 aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    src="/dart_kom2.jpg"
                    alt=""
                    fill
                    className="object-cover object-center rounded-lg lg:!relative"
                  />
                </div>
                <figcaption className="flex mt-3 text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Principal Investigator, Associate Professor Sophie Yacoub at
                    the DART Kick-off meeting
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <p className="text-lg text-justify text-gray-500">
                DART - Dengue Advanced Readiness Tools, is a multifaceted dengue
                outbreak forecasting system. It is an ongoing project by Oxford
                University Clinical Research Unit (OUCRU), funded by the
                Wellcome Trust. The project is supported by an international
                multidisciplinary team.
              </p>
            </div>
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <h4 className="mt-10 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
                Background and aims
              </h4>
            </div>
            <div className="mx-auto mt-5 prose text-justify text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                There is a need for dengue outbreak forecasting systems that can
                accommodate variable time scales and at small spatial scales.
                Spatially targeted interventions for dengue control in Vietnam
                are usually performed at the local scale, and key decisions need
                to be made on different time scales. The ability to identify in
                advance the precise location, size and duration of a dengue
                outbreak is important for targeted mitigation efforts.
              </p>
              <p>
                DART aims to provide high-resolution dengue forecasting over
                different time scales, including real-time. This forecast
                information will be disseminated through a web application that
                is available both on desktop and mobile devices. Stakeholders
                include the general public, local policy makers, clinicians,
                health practitioners, and interested research scientists.
              </p>
              <p>
                The project will start out with 2 exemplar cities in Vietnam: Ho
                Chi Minh City and Hanoi. The spatial resolution for the
                forecasts will be districts (administrative level 2) and time
                scales will range from real-time to 4-week ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
