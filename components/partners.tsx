import Image from "next/image";


const partners = [
  {
    src: "/wellcome_logo.jpg",
    alt: "Wellcome",
  },
  {
    src: "/oucru-logo.jpg",
    alt: "Oxford University Clinical Research Unit",
  },
  {
    src: "/oxweb-logo-square.svg",
    alt: "University of Oxford",
    class: "bg-oxfordBlue",
  },
  {
    src: "/nihe-logo.jpg",
    alt: "National Institute Of Hygiene And Epidemiology",
  },
  {
    src: "/hcdc-logo.jpg",
    alt: "HCMC Center for Disease Control",
  },
  {
    src: "/usth-logo.jpg",
    alt: "University of Science and Technology of Hanoi",
  },
  {
    src: "/ecmwf-logo.jpg",
    alt: "European Centre for Medium-Range Weather Forecasts",
  },
];


export default function Partners() {
  return (
    <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
      <div className="mt-12">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our partners and collaborators
        </h2>
      </div>
      <div className="mt-12">
        <ul className="grid items-center grid-cols-2 gap-5 lg:grid lg:grid-cols-5 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          {partners.map((partner) => (
            <li key={partner.alt}>
              <div
                className={
                  "h-0 aspect-w-2 aspect-h-2 " +
                  (partner.class ? partner.class : "")
                }
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-cover object-center shadow-lg"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
