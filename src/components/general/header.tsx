"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const { isSignedIn } = useUser();

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
      className={`fixed z-50 w-full bg-purple-600 pb-10 ${
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

            {isSignedIn ? (
              <ul className="flex grow flex-wrap items-center justify-end">
                <li>
                  <Link
                    href="/playgroups"
                    className="font-montreal flex items-center rounded-lg bg-black px-8 py-2 font-medium text-white transition duration-[0.4s] ease-in-out hover:bg-indigo-950"
                  >
                    CREATE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/playgroups"
                    className="btn-sm font-montreal ml-3 rounded-lg border-[1px] border-black bg-purple-600 px-8 font-medium text-black transition duration-[0.4s] hover:shadow-5xl"
                  >
                    <span>JOIN</span>
                  </Link>
                </li>
                <li className="ml-3">
                  <UserButton afterSignOutUrl="/" />
                </li>
              </ul>
            ) : (
              <ul className="flex grow flex-wrap items-center justify-end">
                {" "}
                <li>
                  <Link
                    href="/sign-up"
                    className="font-montreal flex items-center rounded-lg bg-black px-8 py-2 font-medium text-white transition duration-[0.4s] ease-in-out hover:bg-indigo-950"
                  >
                    GET STARTED
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-in"
                    className="btn-sm font-montreal ml-3 rounded-lg border-[1px] border-black bg-purple-600 px-8 font-medium text-black transition duration-[0.4s] hover:shadow-5xl"
                  >
                    <span>LOGIN</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
