import React from "react";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Error-free Transactions",
      description:
        "Helping Media & Entertainment companies grow their Customers.",
      icon: "/features/money.png",
    },
    {
        title: "Supports all UPI apps",
        description: "Easily collect payments with a dynamic QR code from all UPIs.",
        icon: "/features/bhim_upi.png",
      },
      {
        title: "Secure & seamless",
        description: "Generate unique QR codes for quick,easy & safe  payments.",
        icon: "/features/security.png",
      },
    {
      title: "Easy Integration",
      description: "Connect seamlessly using our no-code setup, developer-friendly APIs, and native SDK.",
      icon: "/features/setting.png",
    },
  ];

  return (
    <section className="text-light bg-slate-50 md:lg:pt-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center px-4 sm:px-8 md:px-4 xl:px-0 pb-10 sm:pb-20 md:pb-20 lg:pb-10 pt-10 sm:pt-24 md:pt-10 lg:pt-1 items-start md:items-center">

                  <div className="w-full md:max-w-screen-xl mx-auto px-0 sm:px-8 md:px-4 xl:px-0">
          <div className="flex flex-col justify-center  pt-0 sm:pt-10 md:pt-1 items-center">
            <h5 className="text-light mb-3 font-bold text-left text-base text-primary">
            UPIGateway&apos; Features
            </h5>
            <div className=" text-gray-800 mb-0 font-bold text-center text-2xl sm:text-4xl sm:leading-[3.2rem]">
            Advantages of integrating UPIGateway&apos;s
            </div>
            <div className="text-gray-800  mb-0 font-bold text-center text-2xl sm:text-4xl sm:leading-[3.2rem]">
            Dynamic QR code service
            </div>
          </div>
        </div>
          <div className="grid gap-10 pt-20 w-full sm:w-full md:w-3/4 lg:w-full grid-cols-1 lg:grid-cols-2">
            {features.map((features, index) => (
              <div
                key={index}
                className="flex flex-row bg-white py-2 sm:py-5 px-4 sm:px-7 lg:px-5 xl:px-7 rounded-xl shadow-md hover:shadow-xl transition duration-500"
              >
                <div className="mr-4 sm:mr-7 min-w-[98px] min-h-[98px]">
                  <div className="p-2 border rounded-xl min-w-[68px]:">
                    <img
                      src={features.icon}
                      alt={features.title}
                      className="h-20 sm:h-20 w-20 sm:w-20 object-cover"
                    />
                  </div>
                </div>
                <div className="font-semibold text-gray-700 text-xl sm:text-2xl ">
                  {features.title}
                  <div className="mt-2 text-light font-normal text-base sm:text-lg">
                    {features.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
