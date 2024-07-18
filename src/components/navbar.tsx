"use client";

import * as React from "react";
import { LINKS } from "@/lib/constants";
import { MobileDrawer } from "./mobile-drawer";
import { usePathname } from "next/navigation";
import star from "@/../public/star.svg";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6 sticky">
        <div className="sm:px-8 w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div className="flex items-center h-10 w-10">
                      <a href="/" className="pointer-events-auto">
                        {/* <img
                          src={star.src}
                          alt="star"
                          className="w-8 h-8 fill-current"
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="w-8 h-8 text-primary"
                        >
                          <polygon
                            fill="currentColor"
                            fillRule="evenodd"
                            points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-end md:justify-center">
                    <div className="pointer-events-auto md:hidden">
                      <MobileDrawer />
                    </div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                        {LINKS.map((link) => (
                          <li
                            key={link.href}
                            className={`${
                              pathname === link.href ? "text-primary" : ""
                            }`}
                          >
                            <a
                              className="relative block px-3 py-2 transition hover:text-primary"
                              href={link.href}
                            >
                              {pathname === link.href ? (
                                <img
                                  src={star.src}
                                  alt={link.label}
                                  className="w-2 h-2 absolute top-2 left-2 animate-bounce"
                                />
                              ) : null}
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
