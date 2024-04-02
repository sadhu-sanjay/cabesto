import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import DocTextIcon from "~/icons/doctext-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";

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
        icon: <DocTextIcon />,
        badge: "49",
      },
      {
        id: "2",
        label: "Integration",
        path: "integration",
        icon: <IconUsers />,
      },
      {
        id: "3",
        label: "Statistics",
        path: "personalization",
        icon: <IconSettings />,
        badge: "20",
      },
      {
        id: "4",
        label: "Moderation",
        path: "personalization",
        icon: <BoxIcon />,
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
        icon: <CartIcon />,
      },
      {
        id: "2",
        label: "Parameters",
        path: "dashboard",
        icon: <DocTextIcon />,
      }
    ],
  },
];
