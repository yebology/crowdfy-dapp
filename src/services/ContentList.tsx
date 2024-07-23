import { Advantage, NavItem, ParticipantInterface } from "./Interface";
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

export const participantsData: ParticipantInterface[] = [
  {
    id: 1,
    user: "Alice",
    donationAmount: 100,
    timestamp: 1625140800, // Example timestamp
  },
  {
    id: 2,
    user: "Bob",
    donationAmount: 150,
    timestamp: 1625227200, // Example timestamp
  },
  {
    id: 3,
    user: "Charlie",
    donationAmount: 200,
    timestamp: 1625313600, // Example timestamp
  },
  {
    id: 4,
    user: "Diana",
    donationAmount: 250,
    timestamp: 1625400000, // Example timestamp
  },
  {
    id: 5,
    user: "Eve",
    donationAmount: 300,
    timestamp: 1625486400, // Example timestamp
  },
  {
    id: 6,
    user: "Frank",
    donationAmount: 350,
    timestamp: 1625572800, // Example timestamp
  },
];
