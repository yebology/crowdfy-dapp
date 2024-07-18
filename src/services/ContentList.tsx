import { Advantage, NavItem } from "./Interface";
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
