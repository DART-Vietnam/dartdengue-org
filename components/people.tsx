import bios from "@/components/team-bios";
import { bio } from "@/util/interfaces";
import Image from "next/image";
import Link from "next/link";

const NameCard = function ({ person }: { person: bio }) {
  return (
    <li key={person.name}>
      <div className="flex items-center p-4 space-x-4 lg:space-x-6 sm:border sm:rounded-xl sm:shadow">
        <div className="relative w-16 h-16 lg:w-20 lg:h-20">
          <Image
            src={person.imageUrl}
            alt={person.alt}
            fill
            className="object-cover object-center rounded-full"
            sizes="20vw"
          />
        </div>
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>
            {person.title} <b>{person.name}</b>
          </h3>
          <p className="italic text-oxfordBlue">
            {person.copi ? "Co-" : ""}Principal Investigator
          </p>
        </div>
      </div>
    </li>
  );
};

export default function People() {
  return (
    <div className="px-4 py-12 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet the team
          </h2>
          <p className="text-lg text-gray-500">
            Meet the people that are driving this new effort. We are a
            international multidisciplinary team with people from the Oxford
            University Clinical Research Unit (OUCRU), The University of Oxford,
            National Institute Of Hygiene And Epidemiology (NIHE), Ho Chi Minh
            City Center for Disease Control (HCDC), and the University of
            Science and Technology of Hanoi (USTH).
            <br />
            <Link href="/team">
              <u>Learn more</u>
            </Link>
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul className="grid grid-cols-1 space-y-2 place-items-center">
            {bios
              .filter((person) => Object.hasOwn(person, "pi"))
              .map((person) => (
                <NameCard person={person} key={person.name} />
              ))}
            {bios
              .filter((person) => Object.hasOwn(person, "copi"))
              .map((person) => (
                <NameCard person={person} key={person.name} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
