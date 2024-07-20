import { DetailSectionProps } from "../../services/Interface";
import avatar from "../../assets/avatar.mp4";
import upcoming from "../../assets/upcoming.mp4";
import expired from "../../assets/expired.mp4";
import amountLeft from "../../assets/amountLeft.mp4";
import amountRaised from "../../assets/amountRaised.mp4";
import amountGoals from "../../assets/amountGoals.mp4";
import { unixTimestampConverter } from "../../services/Helper";

export const DetailSection: React.FC<DetailSectionProps> = ({ campaign }) => {
  return (
    <div id="detail">
      <div className="my-16">
        <h1 className="text-center font-bold text-4xl my-10">
          Get to Know the <span className="text-green-400">Campaign</span>{" "}
          Details
        </h1>
        <div className="flex items-center my-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 w-full">
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={avatar} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">Campaign Creator</h3>
              <p className="text-center font-normal inline-block text-sm">
                {"0x..81289"}
              </p>
            </div>
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={upcoming} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">Start Time</h3>
              <p className="text-center font-normal inline-block text-sm">
                {unixTimestampConverter(campaign.campaignStart)}
              </p>
            </div>
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={expired} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">End Time</h3>
              <p className="text-center font-normal inline-block text-sm">
                {unixTimestampConverter(campaign.campaignEnd)}
              </p>
            </div>
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={amountGoals} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">ETH Goals</h3>
              <p className="text-center font-normal inline-block text-sm">
                {"12 ETH"}
              </p>
            </div>
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={amountRaised} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">ETH Raised</h3>
              <p className="text-center font-normal inline-block text-sm">
                {"2 ETH"}
              </p>
            </div>
            <div className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center">
              <div className="rounded-full p-3 inline-block">
                <video src={amountLeft} autoPlay loop className="size-40" />
              </div>

              <h3 className="font-bold mt-2 mb-2">ETH Left</h3>
              <p className="text-center font-normal inline-block text-sm">
                {"10 ETH"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
