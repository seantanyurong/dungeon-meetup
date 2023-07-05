export default function Introduction() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-6">
            <h2 className="h3 mb-4">How to use Dungeon Meetup?</h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* 1st item */}
            {/* <div className="relative flex h-full flex-col items-center justify-center rounded bg-white p-10 shadow-lg">
              <Image src={Five} alt="temp" style={{ objectFit: "cover" }} />
            </div> */}
            {/* 2nd item */}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">Join a Playgroup</h4>
              <p className=" text-xl leading-snug">
                Find a physical playgroup or LGS in your city or a remote
                playgroup from anywhere around the world to play Magic on a
                regular basis.
              </p>
            </div>
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">Create a Playgroup</h4>
              <p className=" text-xl leading-snug">
                Looking for more players to join your EDH pod of 4 or your
                limited draft pod of 8? Take 2 mins to create a playgroup and
                start looking for players today.
              </p>
            </div>{" "}
            <div className="items-left relative flex h-full flex-col rounded bg-white p-8 text-left shadow-lg">
              <h4 className="mb-1 text-2xl font-bold">
                Be part of the Community
              </h4>
              <p className=" text-xl leading-snug">
                Gain access to a digital and global community of Magic the
                Gathering players who are looking to play both casual and
                competitive games.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
