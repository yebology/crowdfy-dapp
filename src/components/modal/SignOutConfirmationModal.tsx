import React from "react";
import { useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import signoutConfirm from "../../assets/signoutConfirm.mp4";
import { SignOutConfirmationModalProps } from "../../services/Interface";

export const SignOutConfirmationModal : React.FC<SignOutConfirmationModalProps> = ({
  actionClick,
  onClose 
}) => {
  const [signOutConfirmationScale] = useGlobalState("signOutConfirmationScale");

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${signOutConfirmationScale} popup-visible`}
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
            <video src={signoutConfirm} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Hmmm...</h1>
        </div>
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>Are you sure want to sign out ? </h1>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-2">
          <button
            onClick={actionClick}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 bg-green-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Yes</span>
          </button>
          <button
            onClick={onClose}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 border-2 border-green-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-primary">No, keep me in</span>
          </button>
        </div>
      </div>
    </div>
  );
};
