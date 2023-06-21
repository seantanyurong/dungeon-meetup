"use client";

import Image from "next/image";
import LeftGradient from "public/images/left-gradient.png";
import RightGradient from "public/images/right-gradient.png";
import Marquee from "react-fast-marquee";
import CompanyCard from "../ui/company-card";
import Company1 from "public/images/company-1.png";
import Company2 from "public/images/company-2.png";
import Company3 from "public/images/company-3.png";
import Company4 from "public/images/company-4.png";
import Company5 from "public/images/company-5.png";
import Company6 from "public/images/company-6.png";
import Company7 from "public/images/company-7.png";
import Company8 from "public/images/company-8.png";
import Company9 from "public/images/company-9.png";
import Company10 from "public/images/company-10.png";
import Company11 from "public/images/company-11.png";
import Company12 from "public/images/company-12.png";
import Company13 from "public/images/company-13.png";
import Company14 from "public/images/company-14.png";
import Company15 from "public/images/company-15.png";
import Company16 from "public/images/company-16.png";
import Company17 from "public/images/company-17.png";
import Company18 from "public/images/company-18.png";
import Company19 from "public/images/company-19.png";
import Company20 from "public/images/company-20.png";
import Company21 from "public/images/company-21.png";
import Company22 from "public/images/company-22.png";
import Company23 from "public/images/company-23.png";
import Company24 from "public/images/company-24.png";

export default function Companies() {
  const companyList1 = [
    {
      image: Company1,
    },
    {
      image: Company2,
    },
    {
      image: Company3,
    },
    {
      image: Company4,
    },
    {
      image: Company5,
    },
    {
      image: Company6,
    },
    {
      image: Company7,
    },
    {
      image: Company8,
    },
  ];

  const companyList2 = [
    {
      image: Company9,
    },
    {
      image: Company10,
    },
    {
      image: Company11,
    },
    {
      image: Company12,
    },
    {
      image: Company13,
    },
    {
      image: Company14,
    },
    {
      image: Company15,
    },
    {
      image: Company16,
    },
  ];

  const companyList3 = [
    {
      image: Company17,
    },
    {
      image: Company18,
    },
    {
      image: Company19,
    },
    {
      image: Company20,
    },
    {
      image: Company21,
    },
    {
      image: Company22,
    },
    {
      image: Company23,
    },
    {
      image: Company24,
    },
  ];

  return (
    <div className="relative">
      <Marquee className="mb-[0.1rem]">
        {companyList1.map((company, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <CompanyCard image={company.image} />
            </div>
          );
        })}
      </Marquee>
      <Marquee direction="right" className="mb-[0.1rem]">
        {companyList2.map((company, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <CompanyCard image={company.image} />
            </div>
          );
        })}
      </Marquee>
      <Marquee className="mb-[0.1rem]">
        {companyList3.map((company, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <CompanyCard image={company.image} />
            </div>
          );
        })}
      </Marquee>
      <div className="absolute bottom-0 left-0 right-auto top-0 z-10 block w-[10.31em]">
        <Image src={LeftGradient} className="h-[100%] w-[100%]" alt="temp" />
      </div>
      <div className="absolute bottom-0 left-auto right-0 top-0 z-10 block w-[10.31em]">
        <Image src={RightGradient} className="h-[100%] w-[100%]" alt="temp" />
      </div>
    </div>
  );
}
