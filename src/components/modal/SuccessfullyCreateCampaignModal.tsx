import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import successCreate from "../../assets/sucessCreate.mp4";
import { useNavigate } from "react-router-dom";

export const SuccessfullyCreateCampaignModal = () => {
  const navigate = useNavigate();
  const [successfullyCreateCampaignScale] = useGlobalState(
    "successfullyCreateCampaignScale"
  );

  const onClose = () => {
    setGlobalState("successfullyCreateCampaignScale", "scale-0");
  };

  const handleClick = () => {
    onClose()
    navigate("/")
  }

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${successfullyCreateCampaignScale} popup-visible`}
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
            <video src={successCreate} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Yeaayy!</h1>
        </div>
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>Your new campaign is live and ready to go! </h1>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            onClick={handleClick}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-full py-4 bg-green-400 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};