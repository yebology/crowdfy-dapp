import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { campaignsData, participantsData } from "../services/ContentList";
import { CampaignInterface } from "../services/Interface";
import { DescriptionSection } from "../components/section/DescriptionSection";
import { DetailSection } from "../components/section/DetailSection";
import { ParticipantSection } from "../components/section/ParticipantSection";
import { ParticipateConfirmationModal } from "../components/modal/ParticipateConfirmationModal";

const defaultCampaign: CampaignInterface = {
  id: 0,
  campaignTitle: "",
  campaignDescription: "",
  campaignPicture: "",
  campaignStart: 0,
  campaignEnd: 0,
  fundsRequired: 0,
  currentRaised: 0,
  status: 0,
};

export const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<CampaignInterface>(defaultCampaign);
  const [donationAmount, setDonationAmount] = useState("")
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false)

  const handleClickParticipate = () => {
    // if (!sessionStorage.getItem("connectedAccount")) {
    //   return setGlobalState("mustConnectWalletScale", "scale-100");
    // } else {
    //   setShowModal(true);
    // }
    setShowConfirmationModal(true);
  };

  const onClose = () => {
    setShowConfirmationModal(false)
  }

  const handleProcessSendETH = async (amount: number) => {};

  useEffect(() => {
    if (id) {
      const campaignId = parseInt(id, 10);
      const foundCampaign =
        campaignsData.find((c) => c.id === campaignId) || defaultCampaign;
      setCampaign(foundCampaign);
    }
  }, [id]);

  if (!id) {
    return <div>Error: Campaign ID is missing</div>;
  }

  if (!campaign) {
    <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showConfirmationModal || showFailedModal ? "opacity-90" : "opacity-100"
        }`}
      >
        <DescriptionSection
          campaign={campaign}
          actionClick={handleClickParticipate}
        />
        <DetailSection campaign={campaign} />
        <ParticipantSection participants={participantsData} />
        {showConfirmationModal && (
          <div>
            <ParticipateConfirmationModal
              campaign={campaign}
              actionClick={handleProcessSendETH}
              onClose={onClose}
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
            />
          </div>
        )}
      </div>
    </div>
  );
};
