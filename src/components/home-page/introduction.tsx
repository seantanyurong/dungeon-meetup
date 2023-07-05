import IntroductionImg from "public/images/introduction.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative">
      <div className="py-12 md:py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid w-full grid-cols-6 gap-y-16 sm:gap-16">
            {/* Left column - introduction */}
            <div className="col-span-6 lg:col-span-3">
              <h2 className="h3 black mb-5">
                Let&apos;s put the Gathering back in Magic.
              </h2>
              <p className=" black mb-3 text-xl">
                Finding a regular playgroup that matches your schedule, power
                level and vibe is not the easiest thing to do, especially when
                you&apos;re in a new country or if you&apos;re just getting back
                into the game.
              </p>
              <p className=" black mb-3 text-xl">
                With established cliques at the local game stores, it&apos;s
                often difficult, and a little awkward to ask to join a game and
                to be looped into the group&apos;s regular meetups.
              </p>
              <p className=" black mb-3 text-xl">
                And that’s what Dungeon Meetup is for.
              </p>
              <p className=" black mb-3 text-xl">
                Dungeon Meetup provides you a platform to create playgroups or
                join existing ones located in your area. It&apos;s a way for you
                to get plugged into the community and start playing regularly
                immediately.
              </p>
              <p className=" black mb-3 text-xl">
                You don&apos;t have to worry about any awkward interactions
                because the people here are already looking for more players,
                and will be happy to induct new ones into their playgroups.
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
