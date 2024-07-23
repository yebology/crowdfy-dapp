import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import participateConfirm from "../../assets/participateConfirm.mp4";
import { ParticipateConfirmationModalProps } from "../../services/Interface";

export const ParticipateConfirmationModal: React.FC<
  ParticipateConfirmationModalProps
> = ({ actionClick, onClose }) => {
  const [donationAmount, setDonationAmount] = useState("")

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-between items-center">
          <p></p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-full overflow-hidden w-48 h-48">
            <video src={participateConfirm} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex text-center justify-center items-center">
          <h1>Are you sure you want to participate?</h1>
        </div>
        <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
          <input
            className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
            type="number"
            step={0.000001}
            min={0.000001}
            name="donationAmount"
            placeholder="Enter donation amount for confirmation... (min 0.000001 ETH)"
            onChange={(e) => setDonationAmount(e.target.value)}
            value={donationAmount}
            required
          />
        </div>
        <div className="mt-4 flex flex-row items-center space-x-2">
          <button
            onClick={() => actionClick(parseFloat(donationAmount))}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 bg-green-400 flex items-center justify-center transition-all duration-200 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Participate</span>
          </button>
          <button
            onClick={onClose}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 border-2 border-green-400 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-black">Close Popup</span>
          </button>
        </div>
      </div>
    </div>
  );
};
