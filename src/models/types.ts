import { ReactElement } from "react";

export type NavItem = {
    id: string;
    label: string;
    path: string;
    icon?: ReactElement;
    badge?: string;
};

export type NavSection = {
    id: string;
    label: string;
    path: string;
    icon?: ReactElement;
    badge?: string;
    navItems?: Array<NavItem>;
};

export type SortConfig = {
    key: string;
    direction: string;
};

export type Record = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    description: string;
};

export type TabItem = {
  label: string;
  value: string;
  count?: number;
};