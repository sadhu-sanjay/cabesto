'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavItem } from "~/models/types";

type NavBarProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  items: NavItem[];
};

export const Navbar: React.FC<NavBarProps> = ({
  className,
  title,
  children,
  items,
}) => {
  const [selected, setSelected] = useState<string>("6");

  return (
    <div
      className={`hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 p-4
    ${className}`}
    >
      {/* Side Conatiner */}
      <div className="flex flex-col gap-2">
        {/* Logo */}
        <div className="flex h-[60px] items-center justify-center py-12">
          <a className="flex items-center gap-2 font-semibold" href="#">
            {/* <Image alt="..." src="" width={30} height={30} /> */}
            <span className=" font-extrabold text-4xl">contestio</span>
          </a>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {/* Nav Items */}
            {items.map((item: NavItem) => {
              return (
                <Link
                  key={item.id}
                  className={` flex items-center gap-3 rounded-lg p-3 text-gray-500 transition-all 
                  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                    selected === item.id
                      ? " bg-yellow-200 dark:bg-gray-800 dark:text-gray-50 text-gray-900 scale-105"
                      : ""
                  }`}
                  href={`/${item.path}`}
                  onClick={() => {
                    setSelected(item.id);
                  }}
                >
                  {item.icon}
                  {item.label}
                  {item.badge && (
                    <div
                      className=" bg-gray-600 dark:bg-gray-50
                     text-gray-100 dark:text-gray-600
                    border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full "
                    >
                      {item.badge}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

