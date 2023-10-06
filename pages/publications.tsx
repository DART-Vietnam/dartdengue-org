import classNames from "@/util/classNames";

const colorCode = {
  abstract: "bg-indigo-100 text-indigo-800",
  paper: "bg-pink-100 text-pink-800",
};

const posts = [
  {
    title: "A high-resolution dengue forecasting system in Vietnam",
    href: "https://www.asiadenguesummit.org/wp-content/uploads/6th-Asia-Dengue-Summit-Programme-Book.pdf#page=95",
    category: {
      name: "Abstract",
      href: "#",
      color: colorCode["abstract"],
    },
    description: "Asia Dengue Summit 2023",
    date: "June 15, 2023",
    datetime: "2023-06-15",
    author: {
      name: "Tuyen Huynh Ngoc",
      href: "/team",
      imageUrl: "/tuyen-huynh.jpg",
    },
  },
  {
    title:
      "Reemergence of Cosmopolitan Genotype Dengue Virus Serotype 2, Southern Vietnam",
    href: "https://doi.org/10.3201/eid2910.230529",
    category: { name: "Paper", href: "#", color: colorCode["paper"] },
    description: "Emerging Infectious Diseases",
    date: "Oct 2023",
    datetime: "2023-10-01",
    author: {
      name: "Vi Thuy Tran",
      href: "#",
      imageUrl: "",
    },
  },
  {
    title:
      "Quantifying the Value of Early Warning System on Dengue Control in Vietnam: A Hybrid ODE-ABM Triple-Diffusion Approach",
    href: "#",
    category: {
      name: "Abstract",
      href: "#",
      color: colorCode["abstract"],
    },
    description:
      "The 12th International Conference on Complex Networks and their Applications",
    date: "Oct 2023",
    datetime: "2020-02-12",
    author: {
      name: "Phong Hong",
      href: "#",
      imageUrl: "",
    },
  },
];

export default function Publications() {
  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            DART publications
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Papers, abstracts, posters, presentations or publications related to
            DART.
          </p>
        </div>
        <div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4" target="_blank">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
