import Partners from "@/components/partners";
import bios from "@/components/team-bios";
import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:py-16">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">
            Meet our team
          </h2>
          <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {bios.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <Image
                      src={person.imageUrl}
                      alt={person.alt}
                      fill
                      className="object-cover object-center rounded-lg shadow-lg"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-xl font-medium leading-6">
                        <h3>
                          {person.title} <b>{person.name}</b>
                        </h3>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Partners />
    </div>
  );
}
