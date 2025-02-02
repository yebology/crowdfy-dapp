import { useEffect, useState } from "react";
import {
  convertToETH,
  convertToPercentage,
  countRemainingTime,
} from "../../services/Helper";
import { CampaignCardProps } from "../../services/Interface";
import { MdOutlinePersonOutline } from "react-icons/md";
import { getParticipants } from "../../services/Blockchain";

export const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  actionClick,
}) => {
  const [participantTotal, setParticipantTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getParticipants(campaign.id);
      const dataTotal = data.length;
      setParticipantTotal(dataTotal);
    };
    fetchData();
  }, []);

  const remainingTime = countRemainingTime(campaign.campaignStart, campaign.campaignEnd);

  return (
    <div>
      <div
        className={`font-poppins border border-gray-200 rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient mr-4 mb-4 mt-4 lg:w-78 lg:h-70`}
      >
        <div className="relative">
          <img
            src={campaign.campaignPicture}
            alt={campaign.campaignTitle}
            className="rounded-xl h-48 w-full object-cover md:h-48 lg:h-48"
          />
          <div className="absolute top-0 p-2 left-0 flex space-x-1">
            <div className="text-xs text-center font-semibold py-1 px-2 bg-gray-100 rounded-md mx-auto uppercase">
              {remainingTime == "CLOSED" && (
                <div>
                  <div>CLOSED</div>
                </div>
              )}
              {remainingTime == "NOT STARTED" && (
                <div>
                  <div>NOT STARTED</div>
                </div>
              )}
              {remainingTime != "CLOSED" && remainingTime != "NOT STARTED" && (
                <div>
                  <div>{remainingTime}</div>
                </div>
              )}
            </div>
            <div className="text-xs font-semibold py-1 px-1.5 bg-gray-100 rounded-md mx-auto">
              <div className="flex items-center space-x-1">
                <MdOutlinePersonOutline size={16} />
                <span>{participantTotal}</span>
              </div>
            </div>
          </div>
          <div className="p-2 absolute left-0 bottom-0">
            <div
              className="size-12 rounded-full flex items-center justify-center"
              style={{
                border: "2px dotted #4ade80",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <h5 className="text-xs text-center font-bold text-green-400">
                  {convertToPercentage(
                    campaign.currentRaised,
                    campaign.fundsRequired
                  )}
                  {"%"}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4">
            <h5 className="font-semibold line-clamp-1 mb-2">
              {campaign.campaignTitle}
            </h5>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{
                    width: `${convertToPercentage(
                      campaign.currentRaised,
                      campaign.fundsRequired
                    )}%`,
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => actionClick(campaign.id)}
                type="button"
                className="text-sm text-center w-full border-2 p-2 border-green-400 rounded-lg"
              >
                <span className="text-green-400 font-semibold">
                  Campaign Detail
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap bg-gray-100 text-gray-500 font-semibold">
            <div className="grid grid-cols-2 w-full my-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-xs">Raised</h1>
                <h1 className="text-sm text-black font-bold">
                  {convertToETH(campaign.currentRaised)} ETH
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center border-l-2 -my-4">
                <div>
                  <h1 className="text-xs">Goals</h1>
                  <h1 className="text-sm text-black font-bold">
                    {convertToETH(campaign.fundsRequired)} ETH
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
