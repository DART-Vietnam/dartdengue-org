export default function Modelling() {
  return (
    <div className="relative py-16 overflow-hidden bg-white">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
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
          <svg
            className="absolute transform translate-x-32 bottom-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Modelling
            </span>
          </h1>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <h3 className="mt-10 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
               Weather Forecasting
              </h3>
            </div>
          <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
            <p>
              ECMWF produces operational global numerical
              weather forecasts of highest quality that are based on an Earth
              system model which incorporates a vast number of observations of
              the atmosphere and oceans. These forecasts are probabilistic
              predictions based on an ensemble approach and thus include
              intrinsic estimates of their uncertainties. Forecasts are provided
              for a range of prediction timescales from days (medium range) to
              weeks (extended range) and months (seasonal range). Here, we will
              start exploring the shorter time ranges and expand these to
              multiple weeks later in the project. 
            </p>
            <p>
              Precipitation, temperature and humidity will be provided for the 
              target regions of Hanoi and Ho Chi Minh City. The skill of these 
              forecasts will be evaluated to establish whether they could be used directly as input for the
              integrated modelling framework. It is, however, most likely that
              downscaling and a combination with higher resolution regional
              forecast data from the National Met Service will improve the
              performance of the forecasts. Thus, suitable statistical
              downscaling techniques will be developed and applied to derive
              forecasts at the city level for Hanoi and Ho Chi Minh. 
            </p>
            <p>
              The focus
              will be on the rainy season (July-December). The weather forecast
              products will be developed and tested on freely available past
              forecast data from ECMWF. These retrospective forecasts (or
              hindcasts) cover the period of the last 20 years using the same
              forecast model and will be our main data base for the development
              phase of the dengue forecasting tool. 
            </p>
            <p>
              While the operational
              forecasts currently have ensembles sizes of 51 members, the
              hindcasts use smaller ensemble sizes (approx. 15 members).
              However, depending on the exact timing of the start of this
              project, larger hindcast ensembles may become available as well.
              In our testing we will be able to use both, the reduced hindcast
              ensemble size and the full 51 forecast ensemble members. The
              horizontal resolution of ECMWF&apos;s ensemble forecasts is
              currently 18km with the prospect of an update to 9km globally with
              the implementation of the next model cycle in early 2023. For the
              verification we will be using both the latest global reanalysis
              from ECMWF, ERA-5, and station data from Hanoi and Ho Chi Min
              directly.
            </p>
             </div>
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <h3 className="mt-10 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl">
              Epidemiological modelling
              </h3>
            </div>
           <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
            <p>
              The purpose of the epidemiological
              modelling is to provide not only a forecasting engine for public
              health officials, clinicians and the general public, but also a
              tool for the scientists to explore and test mechanistical
              relationships between the multiple components and interactions
              contributing to dengue transmission (entomology, human behavioural
              and virological). Furthermore, we extend classical forecasting
              models by testing the inclusion of mechanistic models (as opposed
              to for agnostic approaches as classically done in machine learning
              or statistics) into the framework and test whether it can improve
              the forecasting performance. This becomes increasingly relevant in
              situations where the model is trained on data collected in
              locations different from those where the forecasts need to be
              made. That will typically be the case for example for what regards
              the entomological compartment as good quality adult mosquito data
              are extremely difficult to collect in practice and are available
              so far only from local scale research projects (e.g. World
              Mosquito Programme) and certainly not from longitudinal
              surveillance system. 
              </p>
             <p>
               In order to address these multiple purposes
              in a flexible way based on the data available, we will develop a
              plug-and-play meta-model pipeline including 3 main components as
              outlined below: 
               </p>
             <p>
               • a mosquito population dynamics model that will
              translate meteorological conditions into transmission capacity of
              dengue virus. This model will account for local environmental
              conditions (some parts of the urban landscape being more suitable
              for mosquito breeding than others) and socio-economic status of
              the population (that also determines the mosquito breeding and
              biting success). The modelling will use the framework developed by
              Tran and collaborators (Ezanno et al 2015, Tran et al 2013, Cailly
              et al 2012). We will validate the model on adult mosquito data
              collected in the experimental sites of the World Mosquito
              Programme in Vietnam (see Table1). 
               </p>
               <p>
               • a human demographic and
              behavioural model that will include data such as birth rates (that
              determine the rate of susceptible replenishment in the
              population), socio- economic status (that determines the risk of
              exposure to mosquito bites), school and public holidays (Têt, 1st
              of May, 2nd of September, etc...), as well as connections between
              neighbourhoods in the city, and between the city and other
              locations (in particular between Hanoi and Ho Chi Minh city). The
              ideal type of data to document this spatial coupling are viral
              genomes which will be run through a phylogenetic pipeline
              developed in Oxford. High resolution mobility data are available
              via a collaboration with the Facebook Data for Good programme.
              These analyses will help understand the risk of emergence and
              start of the dengue season in places with low/no transmission
              during the winter months. 
                 </p>
             <p>
                 • a dengue transmission model built on
              top of the two previous components. This model will account for
              the immunological status of the local population reconstructed
              from past incidence and serotype data (from 15 years of studies
              from dengue group in OUCRU). The transmission model will also
              include interventions in the form of insecticide spreading and
              public information. These will be readily updated as new data is
              coming in and results feed directly back to policy makers.
              </p>
             <p>
               Inference and forecasting targets: The modelling components may
              vary significantly based on the forecast target (size, duration of
              dengue season, maximum incidence, timing of outbreaks, risk of
              exposure, and hospital and ICU bed forecasts). We therefore build
              a flexible epidemiological model that can be adapted for each of
              these targets. It will be trained on historical data using machine
              learning models such as boosted regression trees, support machine
              learning, XGBoost and random forests. Training will be performed
              by various cross- validation methods (k-fold, leave-p-out). Mean
              square error and Weighted Interval Score (WIS) will be used as a
              metrics of accuracy (Bracher et al 2021, Paireau et al 2021).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
