import React from 'react'

export const Hero = () => {
  return (


    <section className="overflow-hidden" id="home">
    <div className=" w-full lg:max-w-screen-xl flex items-center mx-auto flex-col lg:flex-row pt-20 lg:pt-20 md:pt-20 pb-2 px-4  sm:px-8 md:px-6 xl:px-0 grid grid-cols-12 gap-4">
      <div className="flex flex-col px-3  lg:flex-grow w-full items-start text-left md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 sm:w-[40rem] xl:w-[100rem]  md:mr-20">
        <div className="text-black text-[2rem] sm:text-[2.7rem] sm:leading-[3.4rem] text-left font-bold  ">
          Accept payments{" "}
        </div>
        <div className="text-black text-[2rem] sm:text-[2.7rem] sm:leading-[3.4rem] text-left font-bold ">
          Directly to your{" "}
        </div>
        <div className="text-black text-[2rem] sm:text-[2.7rem] sm:leading-[3.4rem] text-left font-bold ">
          Account at{" "}
        </div>
        <div className="text-[2rem] sm:text-[2.7rem] sm:leading-[3.4rem] text-left font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-blue-600">
            0% Transaction Fee
          </span>
        </div>
        <p className="leading-relaxed text-gray-700 mt-4 mb-0 text-base sm:text-xl text-left text-balance">
          Revolutionize Your Payment Process with Dynamic QR Codes Service.
        </p>
        <p className="leading-relaxed text-gray-700 mt-2 mb-5 text-xs sm:text-xs text-left text-balance">
          *UPIGateway provides Dynamic QR Generating service. UPIGateway does not
          provide payment gateway service.
        </p>
        <a
          className="items-center mb-4 sm:mb-6 md:mb-8 font-bold text-center rounded text-base text-primary hover:text-primary_dark focus:outline-none "
          href="https://merchant.upigateway.com/auth/login"
        >
          <u>Start Accepting Payments &gt;</u>
        </a>
      </div>
      <div className="flex col-span-12 sm:col-span-6 lg:col-span-8 ">
        <div className="flex w-full justify-center md:justify-end -mt-20 md:mt-0" id="main_hero_added ">
          <img src="/hero-1.svg" alt="hero" className="max-w-[1050px] max-h-[600px] " />
          </div>
      </div>
    </div>
  </section>
  
  )
}
