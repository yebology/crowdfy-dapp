import React from "react";
import { ParticipantSectionProps } from "../../services/Interface";
import { ParticipantCard } from "../card/ParticipantCard";
import notFound from "../../assets/notFound.mp4";

export const ParticipantSection: React.FC<ParticipantSectionProps> = ({
  participants,
}) => {
  return (
    <div id="detail">
      <h1 className="text-center font-bold text-4xl my-10">
        Meet Our <span className="text-green-400">Participant</span>
      </h1>
      <div className="flex items-center my-4 bg-white">
        {participants.length == 0 ? (
          <div>
            <div className="flex justify-center items-center">
              <video src={notFound} autoPlay loop className="size-80" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-4xl text-center">
                Don't have any campaigns currently.
              </h1>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
            {participants.map((participant, index) => (
              <ParticipantCard key={index} participant={participant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
