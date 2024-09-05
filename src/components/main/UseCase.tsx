import { scenarios } from "@/src/data/scenariosData";
import React from "react";
// Import the scenarios data

export const Scenarios = () => {
  return (
    <section id="works" className="relative bg-slate-50 md:bg-white  max-w-screen-2xl mx-auto  sm:py-16 lg:pt-0 lg:pb-20">
      <div className="px-4 mx-auto  max-w-full sm:px-6 lg:px-8">
        <section className="text-gray-900 body-font" id="services">
          <div
            className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-4 xl:px-0"
            id=""
          >
            <div className="flex flex-col justify-center pt-10 sm:pt-24 md:pt-20 items-center">
              <h5 className="mb-3 font-bold text-left text-base text-dark">
                UPIGateway&apos;s Use Cases
              </h5>
              <div className=" text-gray-800 mb-0 font-bold text-center text-3xl sm:text-4xl sm:leading-[3.2rem]">
                Unlock the potential of UPIGateway&apos;s Dynamic QR in different
                scenarios
              </div>
            </div>
          </div>
        </section>
        <div className="relative  md:mt-24 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12 ">
            {scenarios.map((scenario) => (
              <div key={scenario.id} className={scenario.extraStyles}>
                {scenario.imageSrc && (
                  <div className=" flex justify-center items-center mx-auto h-[13rem] w-[13rem]  md:w-[9rem] md:h-[9rem] lg:w-[13rem] lg:w-[13rem] rounded-md object-contain object-center">
                    <img
                      src={scenario.imageSrc}
                      alt={scenario.title}
                      className="w-48 h-48 md:w-32 md:h-32 lg:w-48 lg:w-48 p-1 object-contain "
                    />
                  </div>
                )}
                <h3 className="text-lg md:text-base text-black font-medium leaumnding-tight">
                  {scenario.title}
                </h3>
                <p className="mt-4 text-sm text-light md:text-md">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
    </section>
  );
};
