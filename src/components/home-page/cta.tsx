export default function Cta() {
  return (
    <section className="relative bg-blue-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-32 md:pt-52">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-4 text-3xl font-extrabold text-white md:text-6xl"
              data-aos="zoom-y-out"
            >
              Find a playgroup today.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-montreal text-xl text-white"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Let&apos;s put the Gathering back in Magic.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn w-full border-[1px] border-brown-400 bg-[#071112] px-24 font-montreal text-xl text-brown-400 shadow-4xl transition duration-[0.4s] hover:bg-black hover:shadow-3xl sm:ml-4 sm:w-auto"
                    href="https://szuv34ek50v.typeform.com/to/VJtnptbh"
                  >
                    Get Started
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
