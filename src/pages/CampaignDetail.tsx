import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { campaignsData, participantsData } from "../services/ContentList";
import { CampaignInterface } from "../services/Interface";
import { DescriptionSection } from "../components/section/DescriptionSection";
import { DetailSection } from "../components/section/DetailSection";
import { ParticipantSection } from "../components/section/ParticipantSection";
import { setGlobalState } from "../services/Helper";

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

  const handleClickParticipate = async () => {
    if (!sessionStorage.getItem("connectedAccount")) {
      return setGlobalState("mustConnectWalletScale", "scale-100");
    }
  };

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
    <>
      <DescriptionSection
        campaign={campaign}
        actionClick={handleClickParticipate}
      />
      <DetailSection campaign={campaign} />
      <ParticipantSection participants={participantsData} />
    </>
  );
};
