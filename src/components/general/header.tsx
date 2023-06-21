"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-50 w-full bg-blue-500 pb-10 ${
        !top ? " backdrop-blurmd shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between pt-10 md:h-24">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/sign-up"
                  className="flex items-center rounded-lg bg-brown-400 px-8 py-2 font-montreal font-medium text-blue-500 transition duration-[0.4s] ease-in-out hover:bg-brown-300"
                >
                  GET STARTED
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="btn-sm ml-3 rounded-lg border-[1px] border-brown-400 bg-blue-500 px-8 font-montreal font-medium text-brown-400 transition duration-[0.4s] hover:shadow-5xl"
                >
                  <span>LOGIN</span>
                </Link>
              </li>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
