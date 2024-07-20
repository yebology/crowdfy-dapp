import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import signoutConfirm from "../../assets/signoutConfirm.mp4";
import { disconnectWallet } from "../../services/Blockchain";

export const SignOutConfirmationModal = () => {
  const [signOutConfirmationScale] = useGlobalState("signOutConfirmationScale");

  const handleClick = () => {
    disconnectWallet();
    onClose();
  };

  const onClose = () => {
    setGlobalState("signOutConfirmationScale", "scale-0");
  };

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
        <div className="mt-4 flex justify-center items-center">
          <button
            onClick={handleClick}
            type="button"
            className="mr-6 duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-full py-4 bg-primary text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Yes</span>
          </button>
          <button
            onClick={onClose}
            type="button"
            className="confirm-gradient duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-full py-4 bg-white text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-primary">No, keep me in</span>
          </button>
        </div>
      </div>
    </div>
  );
};
