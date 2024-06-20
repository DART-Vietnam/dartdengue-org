import pressReleases from "@/components/press-list";
import Image from "next/image";
import Link from "next/link";

export default function NewsAndConf() {
  return (
    <div className="relative min-h-screen px-4 py-12 bg-white sm:px-6 lg:py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
            Press release
          </h2>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {pressReleases.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative flex-shrink-0 w-full h-48">
                <Image
                  fill
                  className="object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <Link href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
