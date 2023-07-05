import LogoImg from "public/images/logo.png";
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
          <p className=" my-12 text-center text-xl font-medium">
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
                className="btn  w-full bg-purple-600 px-24  text-xl text-white shadow-7xl transition duration-[0.4s] hover:shadow-6xl sm:ml-4 sm:w-auto"
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
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-black"
                aria-label="Discord"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className=" mr-4 text-lg">
            &copy; 2023 Dungeon Meetup. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
