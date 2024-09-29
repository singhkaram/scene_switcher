import {
  ConnectLogo,
  MemberLogo,
  ShareLogo,
} from "./components/svg/BenefitsIcons";

export const NavList = [
  { id: 1, name: "Home" },
  { id: 2, name: "Features" },
  { id: 3, name: "Benefits" },
  { id: 4, name: "Pricing" },
  { id: 5, name: "Contact" },
];

export const BenefitsData = [
  {
    id: 1,
    name: "Video Scenes",
    icon: <MemberLogo />,
    description: "Keep your audience engaged by updating the visual story.",
  },
  {
    id: 2,
    name: "Voice Over",
    icon: <ShareLogo />,
    description: "Give your message a new life with a different voice.",
  },
  {
    id: 3,
    name: "Background Music",
    icon: <ConnectLogo />,
    description: "Set a new tone by swapping out the music.",
  },
];
