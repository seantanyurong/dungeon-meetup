import Image from "next/image";
import Five from "public/images/five.png";

export default function Introduction() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-6">
            <h2 className="h3 mb-4">Member Benefits</h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* 1st item */}
            <div className="relative flex h-full flex-col items-center justify-center rounded bg-white p-10 shadow-lg">
              <Image src={Five} alt="temp" style={{ objectFit: "cover" }} />
            </div>
            {/* 2nd item */}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">
                Monthly Mastermind Groups
              </h4>
              <p className=" text-xl leading-snug">
                A group of 8 founders with an executive facilitator, who leads
                discussion where advice and critical feedback is shared to help
                accelerate your business growth.
              </p>
            </div>
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">Digital Community</h4>
              <p className=" text-xl leading-snug">
                Access to a digital and highly engaged community of founders who
                provide helpful advice, a dedicated digital concierge, and
                weekly newsletter.
              </p>
            </div>{" "}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">In-Person Community</h4>
              <p className=" text-xl leading-snug">
                Our in-person event strategy is focused around three pillars:
                monthly member dinners, annual retreats, and local adventures.
              </p>
            </div>{" "}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">
                Speaker Series & Education
              </h4>
              <p className=" text-xl leading-snug">
                We know how important it is to have access to the best and
                brightest. So, we host unique workshops and bring in experts
                across a variety of topics.
              </p>
            </div>{" "}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">Exclusive Perks</h4>
              <p className=" text-xl leading-snug">
                We’ve secured exclusive discounts with the most popular software
                companies, tools, and apps. We also have a robust preferred
                vendor database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
