import IntroductionImg from "public/images/introduction.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative">
      <div className="py-12 md:py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid w-full grid-cols-6 gap-y-16 sm:gap-16">
            {/* Left column - introduction */}
            <div className="col-span-6 font-financier lg:col-span-3">
              <h2 className="h3 mb-5 text-blue-500">
                Let&apos;s put the Gathering back in Magic.
              </h2>
              <p className="mb-3 font-montreal text-xl text-blue-500">
                You have to make difficult decisions every day with imperfect
                information on problems you’ve likely never faced before. It’s
                daunting.
              </p>
              <p className="mb-3 font-montreal text-xl text-blue-500">
                In our experience, the best way to overcome the challenges is to
                learn from the wins and mistakes of others, and to surround
                yourself with founders who’ve been there, done that.
              </p>
              <p className="mb-3 font-montreal text-xl text-blue-500">
                Whether you’re in the thick of it in Singapore or Thailand, or
                you’re a restaurant owner in Indonesia, finding your people is
                tough.
              </p>

              <p className="mb-3 font-montreal text-xl text-blue-500">
                But when you do find them, it’s life changing.
              </p>
              <p className="mb-3 font-montreal text-xl text-blue-500">
                And that’s what Labyrinth is for.
              </p>
              <p className="mb-3 font-montreal text-xl text-blue-500">
                Joining Labyrinth gives you immediate access to a tribe of
                founders and entrepreneurs who are going through the same things
                as you. Members consistently call it “life changing”.
              </p>
            </div>

            {/* Right column - submenu */}
            <div className="col-span-6 lg:col-span-3">
              <Image src={IntroductionImg} alt="temp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
