import { IconType } from "react-icons";

export interface NavProps {
  account: string;
  action: () => void;
}

export interface NavItem {
  title: string;
  link: string;
}

export interface Advantage {
  icon: IconType;
  content: string;
  description: string;
}

export interface CampaignCardProps {
  campaign: CampaignInterface;
  actionClick: (id: number) => void;
}

export interface SearchBarProps {
  query: string;
  actionSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DescriptionSectionProps {
  actionClick: () => void;
  campaign: CampaignInterface;
}

export interface DetailSectionProps {
  campaign: CampaignInterface;
}

export interface CampaignDetailProps {
  campaign: CampaignInterface;
  actionClick: () => void;
  onClose: () => void;
}

export interface ParticipantSectionProps {
  participants: ParticipantInterface[];
}

export interface ParticipantCardProps {
  participant: ParticipantInterface;
}

export interface MustConnectWalletModalProps {
  actionClick: () => void;
}

export interface ParticipateConfirmationModalProps {
  actionClick: (amount: number) => void;
  onClose: () => void;
}

export interface ErrorParticipateCampaignModalProps {
  onClose: () => void;
}

export interface CampaignInterface {
  id: number;
  campaignTitle: string;
  campaignDescription: string;
  campaignPicture: string;
  campaignStart: number;
  campaignEnd: number;
  campaignCreator: string;
  fundsRequired: number;
  currentRaised: number;
  status: number;
}

export interface ParticipantInterface {
  id: number;
  user: string;
  donationAmount: number;
  timestamp: number;
}
