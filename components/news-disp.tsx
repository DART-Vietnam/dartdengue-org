import { newsDispProps } from "@/util/interfaces";

export default function NewsDisplay(props: newsDispProps) {
  return (
    <div className="relative min-h-screen px-4 py-12 mx-auto bg-white sm:px-6 lg:px-8 max-w-7xl lg:py-16">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        {/* <div
          className="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        </div> */}
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          {/* <Breadcrumbs newsId={newsId} title={title} /> */}
          {/* <BackButton /> */}
          <h1>
            <span className="block text-3xl font-extrabold tracking-tight text-left sm:text-4xl">
              {props.title}
            </span>
          </h1>
          <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
            <div
              id="markdownStyling"
              dangerouslySetInnerHTML={{ __html: props.htmlContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
