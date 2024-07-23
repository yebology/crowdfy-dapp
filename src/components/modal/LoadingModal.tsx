import { useGlobalState } from "../../services/Helper";
import loading from "../../assets/loading.mp4";

export const LoadingModal = () => {
  const [loadingModalScale] = useGlobalState("loadingModalScale");

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${loadingModalScale}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-between items-center">
          <p></p>
          <p></p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-full overflow-hidden w-48 h-48">
            <video src={loading} autoPlay loop muted />
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );
};
