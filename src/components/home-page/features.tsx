"use client";

import Image from "next/image";
import LeftGradient from "public/images/left-gradient.png";
import RightGradient from "public/images/right-gradient.png";
import Marquee from "react-fast-marquee";
import PlaygroupCard from "../ui/playgroup-card";
import { Balancer } from "react-wrap-balancer";
import card1 from "public/images/card-1.jpg";
import card2 from "public/images/card-2.jpg";
import card3 from "public/images/card-3.jpg";
import card4 from "public/images/card-4.jpg";
import card5 from "public/images/card-5.jpg";
import card6 from "public/images/card-6.jpg";
import card7 from "public/images/card-7.jpg";
import card8 from "public/images/card-8.jpg";
import card9 from "public/images/card-9.jpg";
import card10 from "public/images/card-10.jpg";
import card11 from "public/images/card-11.jpg";
import card12 from "public/images/card-12.jpg";

export default function Features() {
  const playgroupList1 = [
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Standard"],
      description:
        "We play EDH and occasionally standard every Saturday at my place at Bukit Panjang. In our 30s so looking for somebody within that age range as well.",
      name: "The Casual EDHers",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card1,
    },
    {
      currentSize: 5,
      maxSize: 10,
      formats: ["Modern"],
      description:
        "Grinding modern format with top tier decks. Looking for 5 more players. We have a group we discuss the latest updates and modifications in as well.",
      name: "World's Preparation",
      city: "San Francisco",
      lgs: false,
      physical: "Physical",
      image: card2,
    },
    {
      currentSize: 1,
      maxSize: 4,
      formats: ["EDH"],
      description:
        "Hi everybody! I'm looking to form a new playgroup to play with every Monday at Choa Chu Kang. Power level ranging from 6-7, but open to changes.",
      name: "Chill Commander",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card3,
    },
    {
      currentSize: 4,
      maxSize: 8,
      formats: ["cEDH", "Limited"],
      description:
        "Looking for players to play with on MTGO. We like to play cEDH and occasionally Limited if we're feeling it. We like to draft the dream cube.",
      name: "MTGO Playgroup",
      city: "Remote",
      lgs: false,
      physical: "Remote",
      image: card4,
    },
    {
      currentSize: 15,
      maxSize: 18,
      formats: ["Limited"],
      description:
        "Limited is life. Constructed is boring. We live for the thrill of the pick, and we are gamblers at heart. Join us if you want to become a better limited player.",
      name: "Limited FTW",
      city: "Kuala Lumpur",
      lgs: false,
      physical: "Physical",
      image: card5,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["Pioneer"],
      description:
        "Pioneer is great. It's affordable. It's accessible. We get all the benefits of a constructed format with limited downside. Looking for a few more players for variety.",
      name: "Keep Pioneer Alive",
      city: "Singapore",
      lgs: false,
      physical: "Physical & Remote",
      image: card6,
    },
  ];

  const playgroupList2 = [
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card7,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card8,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card9,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card10,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card11,
    },
    {
      currentSize: 2,
      maxSize: 5,
      formats: ["EDH", "Cube"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur magna velit, in laoreet tellus maximus sit amet. Sed viverra, ligula in porttitor ultricies, leo.",
      name: "Singapore EDH",
      city: "Singapore",
      lgs: false,
      physical: "Physical",
      image: card12,
    },
  ];

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 pb-2 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h3 mb-4 text-blue-500">
              <Balancer>
                Dungeon Meetup houses a range of Magic the Gathering playgroups
                from countries all across the globe.
              </Balancer>
            </h1>
            <p className=" text-xl text-blue-500">
              Some play EDH, others competitive or limited formats. But all our
              playgroups seek fun, belonging, and connection with other Magic
              the Gathering players.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Marquee className="pb-4">
          {playgroupList1?.map((playgroup, index) => {
            return (
              <div className="col-span-9 lg:col-span-3" key={index}>
                <PlaygroupCard
                  currentSize={playgroup.currentSize}
                  maxSize={playgroup.maxSize}
                  formats={playgroup.formats}
                  description={playgroup.description}
                  name={playgroup.name}
                  city={playgroup.city}
                  lgs={playgroup.lgs}
                  physical={playgroup.physical}
                  image={playgroup.image}
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="right" className="pb-4">
          {playgroupList2?.map((playgroup, index) => {
            return (
              <div className="col-span-9 lg:col-span-3" key={index}>
                <PlaygroupCard
                  currentSize={playgroup.currentSize}
                  maxSize={playgroup.maxSize}
                  formats={playgroup.formats}
                  description={playgroup.description}
                  name={playgroup.name}
                  city={playgroup.city}
                  lgs={playgroup.lgs}
                  physical={playgroup.physical}
                  image={playgroup.image}
                />
              </div>
            );
          })}
        </Marquee>

        <div className="absolute bottom-0 left-0 right-auto top-0 z-10 hidden w-[10.31em] sm:block">
          <Image src={LeftGradient} className="h-[100%] w-[100%]" alt="temp" />
        </div>
        <div className="absolute bottom-0 left-auto right-0 top-0 z-10 hidden w-[10.31em] sm:block">
          <Image src={RightGradient} className="h-[100%] w-[100%]" alt="temp" />
        </div>
      </div>
    </section>
  );
}
