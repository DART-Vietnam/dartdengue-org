const people = [
  {
    title: "Associate Professor",
    name: "Sophie Yacoub",
    role: "Principal Investigator - Dengue",
    imageUrl:
      "https://res.cloudinary.com/dwccfildc/c_limit,f_auto,w_1140/v1654693920/prod/4059fa310fb720fdb90cb46cf9cd8799.jpg",
    bio: "Sophie is the Dengue Research Group lead at OUCRU-Vietnam, appointed in 2018. She’s a Physician in Infectious Diseases and General Medicine and holds an honorary Consultant appointment at London North West University Healthcare NHS Trust in the UK. She holds a PhD from Imperial College London and an MSc from the London School of Hygiene and Tropical Medicine.",
  },
  {
    title: "Dr.",
    name: "Marc Choisy",
    role: "Principal Investigator - Math Modelling",
    imageUrl:
      "https://res.cloudinary.com/dwccfildc/c_limit,f_auto,w_1140/v1620730934/prod/c01cf0e12c2d16bfc1791226b79ae294.jpg",
    bio: "Marc Choisy is the head of Mathematical Modelling at OUCRU in Ho Chi Minh city, Vietnam. He holds a MSc in Biostatistics, a MSc in Ecology & Evolution, and a PhD in Integrative Biology from the University of Montpellier, France. He is an Associate Editor of the PLoS Neglected Tropical Diseases journal and an honorary Associate Professor at the Hong Kong University (School of Public Health).",
  },
  {
    title: "Dr.",
    name: "Sarah Sparrow",
    role: "Principal Investigator - Climatology",
    imageUrl:
      "https://eng.ox.ac.uk/media/10999/sarah-sparrow-profile-photo-2022.png?anchor=center&mode=crop&width=250&height=250&rnd=132884640400000000",
    bio: "Dr Sarah Sparrow is Deputy Course Director for the MSc in Energy Systems, and is climateprediction.net (CPDN) Programme Coordinator at Oxford e-Research Centre. She is experienced in data driven coupling of climate model output to impact models and lead research proposals in this area. Her responsibilities include application development, support and data management.",
  },
  {
    title: "Associate Professor",
    name: "Moritz Kraemer",
    role: "Principal Investigator - Genomic",
    imageUrl:
      "https://www.oxfordmartin.ox.ac.uk/portraits/_250x250_crop_center-center_none/5423-0220.jpg",
    bio: "Moritz finished his DPhil in 2017 and is now a Branco Weiss Research Fellow in the Department of Biology at the University of Oxford and a Lead Researcher on the Oxford Martin Programme on Pandemic Genomics. Moritz's research addresses questions related to the spatial spread of infectious diseases. Specifically he is concerned with the integration of epidemiological, spatial and genomic data and how novel insights can be best used to reduce the burden of infectious pathogens through effective intervention strategies.",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our team
          </h2>

          <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover rounded-lg shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-xl font-medium leading-6">
                        <h3>
                          {person.title} <b>{person.name}</b>
                        </h3>
                        <p className="text-base text-indigo-600">
                          {person.role}
                        </p>
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
    </div>
  );
}
