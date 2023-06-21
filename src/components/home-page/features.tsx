"use client";

import Image from "next/image";
import LeftGradient from "public/images/left-gradient.png";
import RightGradient from "public/images/right-gradient.png";
import Marquee from "react-fast-marquee";
import MemberCard from "../ui/member-card";
import { Balancer } from "react-wrap-balancer";
import Member1 from "public/images/member-1.jpeg";
import Member2 from "public/images/member-2.jpeg";
import Member3 from "public/images/member-3.jpeg";
import Member4 from "public/images/member-4.jpeg";
import Member5 from "public/images/member-5.jpeg";
import Member6 from "public/images/member-6.jpeg";
import Member7 from "public/images/member-7.jpeg";
import Member8 from "public/images/member-8.jpeg";
import Member9 from "public/images/member-9.jpeg";
import Member10 from "public/images/member-10.jpeg";
import Member11 from "public/images/member-11.jpeg";
import Member12 from "public/images/member-12.jpeg";

export default function Features() {
  const memberList1 = [
    {
      image: Member1,
      name: "Stuart Little",
      title: "Founder of Fork & Knife",
      description:
        "Fork & Knife offers a refined dining experience with its sophisticated ambiance, impeccable service, and an innovative menu that appeals to discerning customers, contributing to annual revenues exceeding $3m.",
    },
    {
      image: Member2,
      name: "Richard Brawn",
      title: "Founder of Flavor Fusion",
      description:
        "Situated in Singapore, Flavor Fusion is a dynamic restaurant that blends global culinary influences, creating an exciting fusion of flavors that appeals to a diverse clientele, resulting in annual revenues exceeding $2.5m.",
    },
    {
      image: Member3,
      name: "Bob Saigon",
      title: "Founder of The Savory Spoon",
      description:
        "A cozy neighborhood eatery nestled in the heart of Ho Chi Minh, The Savory Spoon offers a diverse menu of comforting dishes inspired by local flavors, attracting a loyal customer base and generating $5m a year with multiple outlets.",
    },
    {
      image: Member4,
      name: "Howard Nate",
      title: "Founder of Taste Buds",
      description:
        "Taste Buds is a popular restaurant known for its adventurous and creative menu in Bangkok, showcasing a range of international cuisines that entice and delight customers, contributing to an impressive annual revenue of over $1m.",
    },
    {
      image: Member5,
      name: "Lily Tang",
      title: "Founder of The Hungry Hearth",
      description:
        "A beloved establishment in a Cambodia, The Hungry Hearth captures the essence of home-cooked meals with its comforting dishes, fostering a strong customer following and revnue of $800k with two outlets.",
    },
    {
      image: Member6,
      name: "Mary Rose",
      title: "Founder of Spice Avenue",
      description:
        "Spice Avenue is a destination restaurant celebrated for its bold and aromatic dishes inspired by the vibrant street food scene, attracting a steady flow of customers and generating annual revenue of $1.5m.",
    },
  ];

  const memberList2 = [
    {
      image: Member7,
      name: "Michelle Toh",
      title: "Founder of The Gastronomy Grill",
      description:
        "Situated in Nepal, The Gastronomy Grill is a renowned restaurant that elevates grilling to an art form, enticing customers with its skillfully prepared dishes, with annual revenue surpassing $1.5m.",
    },
    {
      image: Member8,
      name: "Mark Stone",
      title: "Founder of Palate Pleasers",
      description:
        "A hidden gem in a Jakarta, Palate Pleasers captivates customers, featuring a diverse range of flavors that cater to various palates and lifestyles, generating an impressive annual revenue of $1.5m.",
    },
    {
      image: Member9,
      name: "Jewel Ringard",
      title: "Founder of The Culinary Canvas",
      description:
        "Located in India, The Culinary Canvas is a culinary hotspot that embraces creativity, presenting visually stunning dishes and generating annual revenue of over $1.5m with 3 outlets across the country of India.",
    },
    {
      image: Member10,
      name: "Bob Ross",
      title: "Founder of Foodie's Delight",
      description:
        "Foodie's Delight is a culinary haven that satisfies the cravings of discerning food enthusiasts, offering a menu of delectable dishes that consistently generate annual revenue exceeding $1.5m.",
    },
    {
      image: Member11,
      name: "Elinda Lim",
      title: "Founder of The Epicurean's Table",
      description:
        "Nestled in an Indonesia, The Epicurean's Table is a luxurious dining destination that caters to the sophisticated palates of discerning diners, resulting in a thriving business with annual revenues surpassing $2m.",
    },
    {
      image: Member12,
      name: "Barbie Ross",
      title: "Founder of Bistro Bliss",
      description:
        "Situated in a charming downtonw Korea, Bistro Bliss offers an intimate and inviting atmosphere where guests can savor a delightful menu of carefully crafted dishes, contributing to an annual revenue of $1.5m.",
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
                Labyrinth members run the most successful food & beverage
                establishments, across a wide array of niches.
              </Balancer>
            </h1>
            <p className="font-montreal text-xl text-blue-500">
              Some run michelin star restaurants, others humble cafes. But all
              our members seek belonging, support, and connection with a
              selective group of their peers.
            </p>
          </div>
        </div>
        {/* <div className="mx-auto grid gap-6 sm:hidden items-start">
          {memberList1.map((member, index) => {
            return (
              <div className="" key={index}>
                <MemberCard
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                />
              </div>
            );
          })}
        </div> */}
      </div>

      <div className="relative">
        <Marquee className="pb-4">
          {memberList1.map((member, index) => {
            return (
              <div className="col-span-9 lg:col-span-3" key={index}>
                <MemberCard
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="right" className="pb-4">
          {memberList2.map((member, index) => {
            return (
              <div className="col-span-9 lg:col-span-3" key={index}>
                <MemberCard
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  description={member.description}
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
