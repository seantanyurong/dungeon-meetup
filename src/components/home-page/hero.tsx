import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="relative bg-blue-500">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-24 pt-44 md:pb-28 md:pt-52">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 block text-5xl font-bold leading-none text-white md:text-[4.5em]"
              data-aos="zoom-y-out"
            >
              <Balancer>
                Join the private network for restaurant owners.
              </Balancer>

              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              </span> */}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-montreal text-2xl text-white md:text-3xl"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Labryinth is a highly vetted membership community for
                restaurant, cafe and bar owners.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn w-full border-[1px] border-brown-400 bg-[#071112] px-24 font-montreal text-xl text-brown-400 shadow-4xl transition duration-[0.4s] hover:bg-black hover:shadow-3xl sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
