'use client'

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { NavItem, NavSection } from "~/models/types";

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
  const [selected, setSelected] = useState<Array<number>>([0, 0]);

  return (
    <div
      className={`h-full w-full shadow-2xl hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 p-8 min-w-[300px] ${className}`}
    >
      {/* Side Conatiner */}
      <div className="flex flex-col gap-8 justify-between h-full ">
        {/* Logo */}
        <div className="flex items-center justify-center py-4">
          <a className="flex items-center gap-2 font-semibold" href="#">
            {/* <Image alt="..." src="" width={30} height={30} /> */}
            <p className="text-4xl font-extrabold">
              contestio
              <span className=" font-extrabold text-4xl text-yellow-300">
                .
              </span>
            </p>
          </a>
        </div>

        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium p-2 ">
            {items.map((section: NavSection, sectionIndex: number) => {
              return (
                <Fragment key={section.id}>
                  <div className="grid gap-1 items-start text-sm font-medium ">
                    {section.navItems?.map(
                      (item: NavItem, itemIndex: number) => {
                        return (
                          <Link
                            key={item.id}
                            className={` flex items-center gap-3 rounded-md p-3 text-gray-700 transition-all 
                  font-bold hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                    sectionIndex === selected[0] && itemIndex === selected[1]
                      ? "bg-yellow-200 dark:bg-gray-800 dark:text-gray-50 text-gray-900 scale-105"
                      : ""
                  }`}
                            href={`/${item.path}`}
                            onClick={() => {
                              setSelected([sectionIndex, itemIndex]);
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
                      }
                    )}
                  </div>
                  <div className="my-4 border border-zinc-300 " />
                  </Fragment>
              );
            })}
          </nav>
        </div>
        <div>
          <h1>Log Out</h1>
        </div>
      </div>
    </div>
  );
};

