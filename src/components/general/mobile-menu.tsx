"use client";

import { useState, useRef, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const { isSignedIn } = useUser();

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? "active" : ""}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen w-full bg-purple-600 pb-16"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {isSignedIn ? (
            <ul className="flex flex-col items-center space-y-6 px-5 py-2">
              <li>
                <Link
                  href="/create-playgroup"
                  className="font-lg  rounded-lg bg-black px-20 py-4 text-white transition duration-[0.4s] ease-in-out hover:bg-indigo-950"
                >
                  CREATE
                </Link>
              </li>
              <li>
                <Link
                  href="/playgroups"
                  className="font-lg btn-sm  rounded-lg border-[1px] border-black bg-purple-600 px-20 py-4 text-black transition duration-[0.4s] hover:shadow-5xl"
                >
                  <span>JOIN</span>
                </Link>
              </li>
              <li className="ml-3">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonPopoverCard: "left-[50%] translate-x-[-50%]",
                    },
                  }}
                />
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col items-center space-y-6 px-5 py-2">
              <li>
                <Link
                  href="/sign-up"
                  className="font-lg  rounded-lg bg-black px-20 py-4 text-white transition duration-[0.4s] ease-in-out hover:bg-indigo-950"
                >
                  GET STARTED
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="font-lg btn-sm  rounded-lg border-[1px] border-black bg-purple-600 px-20 py-4 text-black transition duration-[0.4s] hover:shadow-5xl"
                >
                  <span>LOGIN</span>
                </Link>
              </li>
            </ul>
          )}
        </Transition>
      </div>
    </div>
  );
}
