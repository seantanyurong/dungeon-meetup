"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

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
      className={`fixed pb-10 bg-blue-500 w-full z-50 ${
        !top ? " backdrop-blurmd shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between pt-10 h-16 md:h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://szuv34ek50v.typeform.com/to/VJtnptbh"
                  className="font-medium text-blue-500 bg-brown-400 hover:bg-brown-300 py-2 flex items-center transition duration-[0.4s] ease-in-out px-8 rounded-lg font-montreal"
                >
                  APPLY
                </Link>
              </li>
              <li>
                <Link
                  href="https://szuv34ek50v.typeform.com/to/VJtnptbh"
                  className="font-medium btn-sm text-brown-400 bg-blue-500 border-[1px] border-brown-400 hover:shadow-5xl ml-3 font-montreal transition duration-[0.4s] rounded-lg px-8"
                >
                  <span>LOGIN</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
