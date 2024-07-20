import React from "react";
import { DescriptionSectionProps } from "../../services/Interface";

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  campaign,
  actionClick
}) => {
  const scrollToSection = () => {
    const element = document.getElementById("detail");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex justify-center text-white items-center mb-8 -mx-12">
      <div className="relative w-full h-full py-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${campaign.campaignPicture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>

        <div className="relative xl:max-w-[1280px] w-full">
          <section className="flex md:flex-row flex-col sm:py-8 py-6">
            <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-8 items-center text-center">
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <p className="font-normal text-[18px] leading-[30.8px] ml-2">
                  <span className="">Welcome</span> to{" "}
                </p>
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-center">
                  <h1 className="mr-2 font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px]">
                    {campaign.campaignTitle}
                  </h1>
                </div>
              </div>
              <p className="font-normal text-[18px] leading-[30.8px] max-w-[600px] mt-5">
                {campaign.campaignDescription}
              </p>
              <div className="flex flex-row space-x-2">
                <button
                  onClick={actionClick}
                  className="mt-6 text-white font-normal rounded-xl bg-green-400 py-3 px-8 transition-transform transform hover:shadow-lg hover:scale-105 transition:200"
                >
                  Participate
                </button>
                <button
                  onClick={scrollToSection}
                  className="mt-6 text-white font-normal rounded-xl border-2 border-green-400 py-3 px-8 transition-transform transform hover:shadow-lg hover:scale-105 transition:200"
                >
                  More Detail
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
