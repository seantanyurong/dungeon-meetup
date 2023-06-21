import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="relative bg-blue-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-24 pt-44 md:pb-28 md:pt-52">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-16 block text-5xl font-bold leading-none text-white md:text-[4.5em]"
              data-aos="zoom-y-out"
            >
              <Balancer>
                Find or Create a Magic the Gathering playgroup today.
              </Balancer>
            </h1>
            <div className="mx-auto max-w-3xl">
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
                    Create a Playgroup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
