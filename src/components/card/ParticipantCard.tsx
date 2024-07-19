import React from "react";
import { ParticipantCardProps } from "../../services/Interface";
import { formatParticipantTimestamp } from "../../services/Helper";

export const ParticipantCard: React.FC<ParticipantCardProps> = ({
  participant,
}) => {
  return (
    <div>
      <div className="font-normal hover:scale-105 duration-500 font-poppins border-2 border-green-400 rounded-2xl m-4">
        <a href="#feedbacks" className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none rounded-lg">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${participant.user}`}
                  className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                  alt="avatar"
                />
                <div>
                  <h3 className="text-sm font-medium lg:text-lg md:text-md">
                    {participant.user}
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-xs">
                  {formatParticipantTimestamp(participant.timestamp)}
                </p>
              </div>
            </div>

            <p className={`leading-normal text-sm`}>
              Recently contributed{" "}
              <span className="font-bold">{participant.donationAmount} SepoliaETH</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
