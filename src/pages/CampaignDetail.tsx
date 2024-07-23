import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { participantsData } from "../services/ContentList";
import { CampaignInterface } from "../services/Interface";
import { DescriptionSection } from "../components/section/DescriptionSection";
import { DetailSection } from "../components/section/DetailSection";
import { ParticipantSection } from "../components/section/ParticipantSection";
import { ParticipateConfirmationModal } from "../components/modal/ParticipateConfirmationModal";
import { ErrorParticipateCampaignModal } from "../components/modal/ErrorParticipateCampaignModal";
import { getCampaigns } from "../services/Blockchain";

const defaultCampaign: CampaignInterface = {
  id: 0,
  campaignTitle: "",
  campaignDescription: "",
  campaignPicture: "",
  campaignCreator: "",
  campaignStart: 0,
  campaignEnd: 0,
  fundsRequired: 0,
  currentRaised: 0,
  status: 0,
};

export const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<CampaignInterface>(defaultCampaign);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const handleClickParticipate = () => {
    // if (!sessionStorage.getItem("connectedAccount")) {
    //   return setGlobalState("mustConnectWalletScale", "scale-100");
    // } else {
    //   setShowModal(true);
    // }
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const closeFailedModal = () => {
    setShowConfirmationModal(false);
  };

  const handleProcessSendETH = async (amount: number) => {
    if (amount < 0.0001) {
      setShowFailedModal(true);
    } else {
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCampaigns()
      if (id) {
        const campaignId = parseInt(id, 10)
        const foundCampaign = data.find((campaign : CampaignInterface) => campaign.id === campaignId);
        setCampaign(foundCampaign)
      }
    }
    fetchData()
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
          showConfirmationModal || showFailedModal
            ? "opacity-90"
            : "opacity-100"
        }`}
      >
        <DescriptionSection
          campaign={campaign}
          actionClick={handleClickParticipate}
        />
        <DetailSection campaign={campaign} />
        {participantsData.length === 0 ? (
          <div></div>
        ) : (
          <ParticipantSection participants={participantsData} />
        )}
        {showConfirmationModal && (
          <ParticipateConfirmationModal
            actionClick={handleProcessSendETH}
            onClose={closeConfirmationModal}
          />
        )}
        {showFailedModal && (
          <ErrorParticipateCampaignModal onClose={closeFailedModal} />
        )}
      </div>
    </div>
  );
};
