import { IconType } from "react-icons";

export interface NavProps {
    account: string;
    action: () => void
}

export interface NavItem {
    title: string;
    link: string;
}

export interface Button {
  content: string;
  action: () => void;
}

export interface Advantage {
  icon: IconType;
  content: string;
  description: string;
}

export interface CampaignCardProps {
  campaign: Campaign;
}

export interface Campaign {
  id: number;
  campaignTitle: string;
  campaignDescription: string;
  campaignPicture: string;
  campaignStart: number;
  campaignEnd: number;
  fundsRequired: number;
  currentRaised: number;
  status: number;
}
