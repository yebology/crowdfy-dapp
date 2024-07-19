import { Advantage, CampaignInterface, NavItem } from "./Interface";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { LiaNetworkWiredSolid } from "react-icons/lia";

export const navList: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Campaign",
    link: "/campaign",
  },
  {
    title: "Create Campaign",
    link: "/create_campaign",
  },
];

export const advantageList: Advantage[] = [
  {
    icon: LiaNetworkWiredSolid,
    content: "Decentralization",
    description:
      "Utilizes blockchain to eliminate intermediaries, ensuring transparency and reducing fees.",
  },
  {
    icon: HiOutlineCubeTransparent,
    content: "Transparency",
    description:
      "Records every transaction on the blockchain, providing an immutable and transparent ledger.",
  },
  {
    icon: AiOutlineGlobal,
    content: "Global Reach",
    description:
      "Enables global participation, breaking geographical barriers for a diverse pool of contributors.",
  },
  {
    icon: IoShieldCheckmarkOutline,
    content: "Enhanced Security",
    description:
      "Ensures high security for transactions and data, reducing the risk of fraud and hacking.",
  },
];

export const campaignsData: CampaignInterface[] = [
  {
    id: 1,
    campaignTitle: "Clean Water Initiative",
    campaignDescription:
      "Providing clean drinking water to communities in need.",
    campaignPicture:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    campaignStart: 1657891200000, // Example timestamp
    campaignEnd: 1660483200000, // Example timestamp
    fundsRequired: 50000,
    currentRaised: 25000,
    status: 0,
  },
  {
    id: 2,
    campaignTitle: "Education for All",
    campaignDescription:
      "Ensuring access to education for underprivileged children.",
    campaignPicture:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    campaignStart: 1657987600000, // Example timestamp
    campaignEnd: 1660589600000, // Example timestamp
    fundsRequired: 75000,
    currentRaised: 30000,
    status: 0,
  },
  {
    id: 3,
    campaignTitle: "Healthcare Support",
    campaignDescription: "Supporting healthcare initiatives in rural areas.",
    campaignPicture:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    campaignStart: 1658084000000, // Example timestamp
    campaignEnd: 1660686000000, // Example timestamp
    fundsRequired: 100000,
    currentRaised: 50000,
    status: 1,
  },
  {
    id: 4,
    campaignTitle: "Renewable Energy Project",
    campaignDescription:
      "Developing renewable energy sources to combat climate change.",
    campaignPicture:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    campaignStart: 1658180400000, // Example timestamp
    campaignEnd: 1660782400000, // Example timestamp
    fundsRequired: 120000,
    currentRaised: 60000,
    status: 1,
  },
  {
    id: 5,
    campaignTitle: "Wildlife Conservation",
    campaignDescription:
      "Protecting endangered wildlife through conservation efforts.",
    campaignPicture:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    campaignStart: 1658276800000, // Example timestamp
    campaignEnd: 1660878800000, // Example timestamp
    fundsRequired: 80000,
    currentRaised: 40000,
    status: 1,
  },
];
