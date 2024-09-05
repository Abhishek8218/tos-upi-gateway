// Testimonials.tsx

import { testimonials } from "@/src/data/testimonialData";
import React from "react";
// Importing the testimonials data

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className=" py-20 sm:py-2 max-w-screen-2xl mx-auto" 
    >
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-screen-xl mx-auto px-0 sm:px-8 md:px-4 xl:px-0">
          <div className="flex flex-col justify-center pt-0 sm:pt-24 md:pt-20 items-center">
            <h5 className="text-dark mb-3 font-bold text-left text-base text-primary">
              TOSGateway&apos; Testimonial
            </h5>
            <div className="text-gray-800  mb-0 font-bold text-center text-3xl sm:text-4xl sm:leading-[3.2rem]">
              What people are saying about TOSGateway
            </div>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-8  lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index:number) => (
            <li key={index}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8 ">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 pb-2 shadow-xl shadow-slate-900/10  lg:min-h-[18.5rem] max-h-[18.5rem] ">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821..."></path>
                    </svg>
                    <blockquote className="relative lg:min-h-36">
                      <p className="text-lg tracking-tight text-light">
                        &quot; {testimonial.feedback} &quot; 
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-4 ">
                      <div>
                        <div className="font-display text-base text-gray-800">
                          {testimonial.name}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt={testimonial.name}
                          className="h-14 w-14 object-cover"
                          src={testimonial.image}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
