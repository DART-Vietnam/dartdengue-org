import posts from "@/components/pub-list";
import classNames from "@/util/classNames";
import { getAllNewsIds, getNewsData } from "@/util/getNews";
import { newsMetadata } from "@/util/interfaces";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const newsIds = await getAllNewsIds();

  const allNewsMetaData = await Promise.all(
    newsIds.map(async (newsId) => {
      return (await getNewsData(newsId)).metadata;
    })
  );

  return { props: { allNewsMetaData } };
};

export default function NewsIndex(props: { allNewsMetaData: newsMetadata[] }) {
  return (
    <div className="relative min-h-screen px-4 py-12 mx-auto bg-white divide-y-2 divide-gray-200 sm:px-6 lg:px-8 max-w-7xl lg:py-16">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
          DART on the news
        </h2>
        <p className="mt-3 text-xl text-center text-gray-500 sm:mt-4">
          News, reports, publications, conferences related to DART.
        </p>
      </div>
      <div className="grid gap-8 pt-12 mt-12 lg:grid-cols-3 lg:gap-5">
        <div className="col-span-full">
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h3 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
              Meeting summaries and reports
            </h3>
          </div>
        </div>
        {props.allNewsMetaData.length > 0 ? (
          props.allNewsMetaData.map((news) => (
            <Link href={"news/" + news.id} className="block" key={news.title}>
              <div className="p-5 transition border rounded-lg hover:shadow-2xl hover:border-none">
                <p className="text-xl font-semibold text-gray-900">
                  {news.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {news.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="italic text-center text-gray-500 col-span-full">
            Nothing here at the moment... Check back later!
          </div>
        )}
      </div>

      <div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <div className="col-span-full">
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h3 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
              Publications and conferences
            </h3>
          </div>
        </div>
        {posts.map((post) => (
          <div
            key={post.title}
            className="p-5 transition border rounded-lg hover:shadow-2xl hover:border-none"
          >
            <div className="inline-block">
              <span
                className={classNames(
                  post.category.color,
                  "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                )}
              >
                {post.category.name}
              </span>
            </div>
            <Link href={post.href} className="block mt-4" target="_blank">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </Link>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <Link href="/team">
                  <span className="sr-only">{post.author.name}</span>
                  <div className="relative w-10 h-10">
                    <Image
                      fill
                      className="object-cover object-center rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <Link href="/team">{post.author.name}</Link>
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
  );
}
