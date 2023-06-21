import React from "react";

import JobItem from "./JobItem";
import Newsletter from "./Newsletter";
import type { StaticImageData } from "next/image";

import Image01 from "public/images/temp/author-01.jpg";
import Image02 from "public/images/temp/author-01.jpg";
import Image03 from "public/images/temp/author-01.jpg";
import Image04 from "public/images/temp/author-01.jpg";
import Image05 from "public/images/temp/author-01.jpg";
import Image06 from "public/images/temp/author-01.jpg";
import Image07 from "public/images/temp/author-01.jpg";
import Image08 from "public/images/temp/author-01.jpg";
import Image09 from "public/images/temp/author-01.jpg";
import Image10 from "public/images/temp/author-01.jpg";
import Image11 from "public/images/temp/author-01.jpg";

function JobList() {
  interface item {
    id: number;
    sticky: boolean;
    title: string;
    slug: string;
    name: string;
    image: StaticImageData;
    tag1: string;
    tag2: string;
    date: string;
  }

  const items: item[] = [
    {
      id: 0,
      sticky: true,
      title: "Engineering Manager Developer Experience",
      slug: "/job-post",
      name: "Qonto",
      image: Image01,
      tag1: "$75K - $100K",
      tag2: "🇬🇧 London, UK",
      date: "22d",
    },
    {
      id: 1,
      sticky: false,
      title: "Software Engineer Backend",
      slug: "/job-post",
      name: "Vimeo",
      image: Image02,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2h",
    },
    {
      id: 2,
      sticky: false,
      title: "Senior Site Reliability Engineer",
      slug: "/job-post",
      name: "Robinhood",
      image: Image03,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2h",
    },
    {
      id: 3,
      sticky: false,
      title: "Remote Shopify Website Tester",
      slug: "/job-post",
      name: "GitHub",
      image: Image03,
      tag1: "$100K - $170K",
      tag2: "🇺🇸 NYC",
      date: "4h",
    },
    {
      id: 4,
      sticky: false,
      title: "Remote Senior Software Engineer",
      slug: "/job-post",
      name: "GitHub",
      image: Image04,
      tag1: "$100K - $170K",
      tag2: "🇺🇸 NYC",
      date: "7h",
    },
    {
      id: 5,
      sticky: false,
      title: "Senior Web App Designer",
      slug: "/job-post",
      name: "Qonto",
      image: Image01,
      tag1: "Contract",
      tag2: "🇬🇧 London, UK",
      date: "12h",
    },
    {
      id: 6,
      sticky: false,
      title: "Ruby on Rails Engineer",
      slug: "/job-post",
      name: "Revolut",
      image: Image05,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "12h",
    },
    {
      id: 7,
      sticky: false,
      title: "Senior Software Engineer Backend",
      slug: "/job-post",
      name: "HSBC",
      image: Image06,
      tag1: "Full Time",
      tag2: "🇮🇹 Milan, IT",
      date: "20h",
    },
    {
      id: 8,
      sticky: false,
      title: "React.js Software Developer",
      slug: "/job-post",
      name: "Twitter",
      image: Image07,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "1d",
    },
    {
      id: 9,
      sticky: false,
      title: "Senior Client Engineer (React & React Native)",
      slug: "/job-post",
      name: "Medium",
      image: Image08,
      tag1: "$55K - $100K",
      tag2: "🌎 Remote",
      date: "1d",
    },
    {
      id: 10,
      sticky: false,
      title: "Contract React Native Engineer",
      slug: "/job-post",
      name: "Twitch",
      image: Image09,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2d",
    },
    {
      id: 11,
      sticky: false,
      title: "QA Automation Engineer",
      slug: "/job-post",
      name: "Figma",
      image: Image10,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2d",
    },
    {
      id: 12,
      sticky: false,
      title: "Senior Marketing Program Manager",
      slug: "/job-post",
      name: "Figma",
      image: Image10,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2d",
    },
    {
      id: 13,
      sticky: false,
      title: "Senior Product Designer",
      slug: "/job-post",
      name: "Figma",
      image: Image10,
      tag1: "Full Time",
      tag2: "🌎 Remote",
      date: "2d",
    },
    {
      id: 14,
      sticky: false,
      title: "Remote Cyber Security Analyst US",
      slug: "/job-post",
      name: "Facebook",
      image: Image11,
      tag1: "$55K - $100K",
      tag2: "🇺🇸 United States",
      date: "2d",
    },
  ];

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="mb-10 text-3xl font-bold">Playgroups</h2>
      {/* List container */}
      <div className="flex flex-col">
        {items.map((item) => {
          return (
            <JobItem
              key={item.id}
              id={item.id}
              sticky={item.sticky}
              title={item.title}
              slug={item.slug}
              name={item.name}
              image={item.image}
              tag1={item.tag1}
              tag2={item.tag2}
              date={item.date}
            />
          );
        })}

        {/* Newletter CTA */}
        <div className="-order-1 border-b border-gray-200 py-8">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default JobList;
