import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import { CertIcon } from "~/icons/cert-icon";
import DocTextIcon from "~/icons/doctext-icon";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import { NoteIcon } from "~/icons/note-icon";
import { ShareIcon } from "~/icons/share-icon";
import { ShieldIcon } from "~/icons/shield-icon";
import { StatIcon } from "~/icons/stat-icon";

import { NavItem, NavSection } from "~/models/types";

export const navData: NavSection[] = [
  {
    id: "1",
    label: "Section1",
    path: "personalization",
    icon: <DocTextIcon />,
    navItems: [
      {
        id: "1",
        label: "Personalization",
        path: "personalization",
        icon: <NoteIcon />,
        badge: "49",
      },
      {
        id: "2",
        label: "Integration",
        path: "integration",
        icon: <ShareIcon />,
      },
      {
        id: "3",
        label: "Statistics",
        path: "personalization",
        icon: <StatIcon />,
        badge: "20",
      },
      {
        id: "4",
        label: "Moderation",
        path: "personalization",
        icon: <ShieldIcon />,
      },
    ],
  },
  {
    id: "2",
    label: "Section2",
    path: "personalization",
    icon: <IconUsers />,
    navItems: [
      {
        id: "1",
        label: "Abonnement",
        path: "personalization",
        icon: <CertIcon />,
      },
      {
        id: "2",
        label: "Parameters",
        path: "dashboard",
        icon: <IconSettings />,
      }
    ],
  },
];
