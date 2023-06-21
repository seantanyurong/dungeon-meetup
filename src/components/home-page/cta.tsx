export default function Cta() {
  return (
    <section className="relative bg-blue-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-52 md:pb-32">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-6xl font-extrabold mb-4 text-white"
              data-aos="zoom-y-out"
            >
              Think you're a fit?
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-white mb-8 font-montreal"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Let's find out.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn shadow-4xl text-brown-400 font-montreal bg-[#071112] hover:bg-black hover:shadow-3xl w-full sm:w-auto sm:ml-4 px-24 border-[1px] transition duration-[0.4s] border-brown-400 text-xl"
                    href="https://szuv34ek50v.typeform.com/to/VJtnptbh"
                  >
                    Apply Now
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
