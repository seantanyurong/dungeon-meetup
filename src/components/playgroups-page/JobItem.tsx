import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface JobItemProps {
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

function JobItem({
  id,
  sticky,
  title,
  slug,
  name,
  image,
  tag1,
  tag2,
  date,
}: JobItemProps) {
  return (
    <div
      className={`group [&:nth-child(-n+12)]:-order-1 ${
        !sticky ? "border-b border-gray-200" : ""
      }`}
    >
      <div className={`px-4 py-6 ${sticky ? "rounded-xl bg-indigo-100" : ""}`}>
        <div className="items-center space-y-3 sm:flex sm:space-x-5 sm:space-y-0">
          <div className="shrink-0">
            <Image
              loading="eager"
              src={image}
              alt={name}
              width={56}
              height={56}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grow items-center justify-between space-y-5 lg:flex lg:space-x-2 lg:space-y-0">
            <div>
              <div className="propss-start flex space-x-2">
                <div className="mb-1 text-sm font-semibold text-gray-800">
                  {name}
                </div>
                {sticky && (
                  <svg
                    className="h-3 w-3 shrink-0 fill-amber-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.143 5.143A4.29 4.29 0 0 1 6.857.857a.857.857 0 0 0-1.714 0A4.29 4.29 0 0 1 .857 5.143a.857.857 0 0 0 0 1.714 4.29 4.29 0 0 1 4.286 4.286.857.857 0 0 0 1.714 0 4.29 4.29 0 0 1 4.286-4.286.857.857 0 0 0 0-1.714Z" />
                  </svg>
                )}
              </div>
              <div className="mb-2">
                <Link className="text-lg font-bold text-gray-800" href={slug}>
                  {title}
                </Link>
              </div>
              <div className="-m-1">
                <a
                  className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-600 ${
                    sticky ? "bg-indigo-50" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {tag1}
                </a>
                <a
                  className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-600 ${
                    sticky ? "bg-indigo-50" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {tag2}
                </a>
              </div>
            </div>
            <div className="flex min-w-[120px] items-center space-x-3 lg:justify-end lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                <Link
                  className="btn-sm group bg-indigo-500 px-3 py-1.5 text-white shadow-sm hover:bg-indigo-600"
                  href={slug}
                >
                  Apply Now{" "}
                  <span className="ml-1 tracking-normal text-indigo-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className="text-sm italic text-gray-500 group-hover:lg:hidden">
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
