// HowItWork.tsx
"use client";

import { HowItWorkStep } from "@/src/data/howItWorksdata";
import React, { useState, useEffect } from "react";

interface HowItWorkProps {
  steps: HowItWorkStep[];
}

export const HowItWork: React.FC<HowItWorkProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    // Set an interval to change the step every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2500);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [steps.length]);

  return (
    <section className="w-full bg-[url('/bg-pattern.svg')] bg-no-repeat bg-opacity-40">
      <div className="text-gray-900 body-font">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-4 xl:px-0">
          <div className="flex flex-col justify-center pt-0 sm:pt-24 md:pt-20 items-center">
            <h5 className="mb-3 font-bold text-left text-base text-primary">
              How it works
            </h5>
            <div className="mb-0 font-bold text-center text-3xl sm:text-4xl sm:leading-[3.2rem]">
              How does UPIGateway Dynamic QR work?
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex items-center mx-auto w-full flex-col lg:flex-row pt-16 sm:pt-20 pb-24 px-10 sm:px-8 md:px-10 xl:px-0  ">
        <div className="flex pt-0 mb-16 w-full items-center text-left md:mb-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="image-container flex flex-start flex-col col-span-1 relative shadow-md">
            <div className="flex">
              <img
                className="z-50 "
                alt={`step-${steps[currentStep].stepNumber}`}
                src={steps[currentStep].imageUrl}
              />
            </div>
          </div>
          <div className="text-container flex flex-start flex-col col-span-1 grid grid-cols-1 gap-4 gap-y-8">
            {steps.map((step, index) => (
              <div
                key={step.stepNumber}
                className={`text grid grid-cols-6 gap-4 gap-y-2 `}
              >
                <div
                  className={`flex flex-col items-center justify-center w-16 h-16 rounded-full  col-span-2 sm:col-span-1    ${
                    index === currentStep ? "bg-blue-300" : "bg-blue-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 items-center justify-center w-1/2 flex rounded-full bg-blue-500`}
                  >
                    <h2 className="text-lg font-normal text-white">
                      {step.stepNumber}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col col-span-6 sm:col-span-5">
                  <h2 className={`mb-2 text-lg  text-black ${
                    index === currentStep ? "font-bold" : "font-normal"
                  }`}>
                    {step.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
