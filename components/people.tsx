import Link from "next/link";
import Image from "next/image";
import bios from "@/components/team-bios";

export default function People() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet the team
            </h2>
            <p className="text-xl text-gray-500">
              Meet the people that are driving this new effort. <br />
              <Link href="/team">
                <u>Learn more</u>
              </Link>
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {bios.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                      <Image
                        src={person.imageUrl}
                        alt={person.alt}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>
                        {person.title} <b>{person.name}</b>
                      </h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
