import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import successParticipate from "../../assets/successParticipate.mp4";

export const SuccessfullyParticipateModal = () => {
  const [successfullyParticipateModal] = useGlobalState(
    "successfullyParticipateModalScale"
  );

  const onClose = () => {
    setGlobalState("successfullyParticipateModalScale", "scale-0");
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${successfullyParticipateModal} popup-visible`}
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
            <video src={successParticipate} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Thank you for your support!</h1>
        </div>
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>Your contribution has made a real difference</h1>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            onClick={onClose}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-full py-4 bg-green-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Close Popup</span>
          </button>
        </div>
      </div>
    </div>
  );
};
