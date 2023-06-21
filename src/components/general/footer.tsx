import LogoImg from "public/images/logo-dark.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="py-8 md:py-32 ">
          <div className="flex items-center">
            <span className="block h-[1px] w-[39%] rounded-full bg-[#d1d3cd]"></span>
            <div className="mx-6">
              <Image
                src={LogoImg}
                alt="temp"
                width={175}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className="block h-[1px] w-[39%] rounded-full bg-[#d1d3cd]"></span>
          </div>
          <p className="my-12 text-center font-montreal text-xl font-medium">
            Dungeon Meetup is a community for Magic the Gathering players to
            find physical playgroups.
          </p>
          <div
            className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div>
              <a
                className="btn w-full bg-blue-500 px-24 font-montreal  text-xl text-white shadow-4xl transition duration-[0.4s] hover:shadow-3xl sm:ml-4 sm:w-auto"
                href="https://szuv34ek50v.typeform.com/to/VJtnptbh"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="flex flex-col  items-center py-4 md:flex-row md:justify-between md:py-8">
          {/* Social as */}
          <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
            <li>
              <a
                href="https://twitter.com/seantanyurong"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Twitter"
                target="_blank"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 font-montreal text-lg">
            &copy; 2023 Labyrinth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
