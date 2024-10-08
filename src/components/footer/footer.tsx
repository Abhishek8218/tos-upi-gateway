import { navbarData } from "@/src/data/navbarData";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="px-4  pt-10 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-2xl md:px-4 lg:px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center md:px-50 pb-10">
        <div className="w-full  md:max-w-72 lg:max-w-sm md:pl-4 ">
        <Link href="/">
            <img
              src="/LogoNav.png"
              alt="YourLogo"
              className="h-8 md:h-14 w-auto cursor-pointer  -ml-2"
            />
          </Link>
          <div className="mt-4 md:max-w-72 lg:max-w-sm ">
            <p className="text-sm text-gray-800">
            Accept payments from your customers through our easy-to-use Dynamic QR code service, with 0% transaction fees.
            </p>
            
          </div>
        </div>
        <div className="w-full md:max-w-52  lg:max-w-fit mt-10  md:mt-0">
          <div className="w-full">
            <h1 className="mb-3 text-base font-medium text-black">Contact Us</h1>
            <ul className="space-y-1 list-none">
              <li>
                <p className="text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2 mr- max-w-80">
                  Feelfree to get in touch with us via send us a message
                </p>
              </li>
              <li id="contact">
                <a
                  className=" font-medium text-left text-md text-primary hover:text-light hover:underline"
                  href="mailto:support@TOSGateway.com"
                >
                  support@TOSGateway.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pr-20  w-full md:w-auto ">
          <div>
            <ul className="mt-2 space-y-2 w-full">
                {navbarData.map((item,index) => (
                
              <li
              key={index}
              >
                
                <a
                  href={item.href}
                  className="text-left text-gray-600 transition-colors duration-300 hover:text-light"
                >
                  {item.label}
                </a>
              </li>
                ))}
       </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row bg-gray-50">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
