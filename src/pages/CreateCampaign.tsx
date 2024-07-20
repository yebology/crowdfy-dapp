import { useEffect, useState } from "react";
import { setGlobalState } from "../services/Helper";

export const CreateCampaign = () => {
  const [minDateTime, setMinDateTime] = useState("");
  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignPicture, setCampaignPicture] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignStart, setCampaignStart] = useState("");
  const [campaignEnd, setCampaignEnd] = useState("");
  const [fundsRequired, setFundsRequired] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!sessionStorage.getItem("connectedAccount")) {
      return setGlobalState("mustConnectWalletScale", "scale-100");
    } else if (
      campaignTitle == "" ||
      campaignPicture == "" ||
      campaignDescription == "" ||
      campaignStart == "" ||
      campaignEnd == "" ||
      fundsRequired == "" ||
      fundsRequired == "0" ||
      campaignStart == campaignEnd
    ) {
      return setGlobalState("errorCreateCampaignModalScale", "scale-100");
    }
  };

  useEffect(() => {
    const now = new Date();
    const formatedDateTime = now.toISOString().slice(0, 16);
    setMinDateTime(formatedDateTime);
  }, []);

  return (
    <div className="mt-8 mb-16 w-full">
      <h1 className="font-semibold text-lg mb-10">Create New Campaign</h1>
      <div className="flex justify-center items-center">
        <div className="rounded-xl overflow-hidden w-68 h-44">
          <img
            src={
              campaignPicture ||
              "https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
            }
            alt="title"
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="col-span-2">
          <label className="font-semibold">Campaign Title</label>
          <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-200">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              type="text"
              name="campaignTitle"
              onChange={(e) => setCampaignTitle(e.target.value)}
              value={campaignTitle}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="font-semibold">Campaign Picture (URL) </label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              type="url"
              name="campaignPicture"
              onChange={(e) => setCampaignPicture(e.target.value)}
              value={campaignPicture}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="font-semibold">
            Funds Required (Min : 0.001 SepoliaETH){" "}
          </label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              type="number"
              step={0.001}
              min={2}
              name="fundsRequired"
              onChange={(e) => setFundsRequired(e.target.value)}
              value={fundsRequired}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="font-semibold">Campaign Start </label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              type="datetime-local"
              name="campaignStart"
              onChange={(e) => setCampaignStart(e.target.value)}
              min={minDateTime}
              value={campaignStart}
              required
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className="font-semibold">Campaign End </label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <input
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              type="datetime-local"
              name="campaignEnd"
              min={campaignStart}
              onChange={(e) => setCampaignEnd(e.target.value)}
              value={campaignEnd}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">Campaign Description</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-primary focus:outline-none focus:ring-0"
              name="campaignDescription"
              onChange={(e) => setCampaignDescription(e.target.value)}
              value={campaignDescription}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => handleSubmit}
          className="mt-6 text-white font-semibold rounded-xl bg-green-400 py-3 px-8 transition-transform transform hover:shadow-lg hover:scale-105 transition:200"
        >
          Create Campaign
        </button>
      </div>
    </div>
  );
};
