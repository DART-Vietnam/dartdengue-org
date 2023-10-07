import Image from "next/image";

const posts = [
  {
    title: "Dengue Advanced Readiness Tools (DART)",
    href: "https://www.oucru.org/project/dengue-advanced-readiness-tools-dart/",
    description:
      "This project explores if and how remote climatic drivers may affect dengue outbreaks in Viet Nam, leading to a greater understanding of weather and climate ...",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title:
      "New multidisciplinary project will help forecast where and when deadly disease outbreaks are likely to occur",
    href: "https://www.ox.ac.uk/news/2023-02-03-new-multidisciplinary-project-will-help-forecast-where-and-when-deadly-disease",
    description:
      "DART (Dengue Advanced Readiness Tools), a new project led by Oxford University, has received funding from Wellcome to use climate data to ...",
    date: "Feb 3, 2023",
    datetime: "2023-02-03",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: " Multidisciplinary dengue forecasting project launches in Vietnam ",
    href: "https://www.ndm.ox.ac.uk/news/multidisciplinary-dengue-forecasting-project-launches-in-vietnam",
    description:
      "DART (Dengue Advanced Readiness Tools), is a new project supported by Wellcome to use climate data to better predict and prepare for ...",
    date: "Feb 7, 2023",
    datetime: "2023-02-07",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

export default function NewsAndConf() {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            DART on the news
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            News related to DART
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0 w-full h-48 relative">
                <Image
                  fill
                  className="object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
