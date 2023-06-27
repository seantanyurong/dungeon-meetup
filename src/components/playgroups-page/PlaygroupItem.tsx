import React from "react";
// import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface PlaygroupItemProps {
  id: string;
  // createdAt: Date;
  currentSize: number;
  maxSize: number;
  format: string;
  // description: string;
  title: string;
  city: string;
  lgs: boolean;
  physical: boolean;
  sticky: boolean;
  image: string | null;
}

function PlaygroupItem({
  id,
  // createdAt,
  currentSize,
  maxSize,
  format,
  title,
  city,
  lgs,
  physical,
  sticky,
  image,
}: PlaygroupItemProps) {
  return (
    <div
      className={`group [&:nth-child(-n+12)]:-order-1 ${
        !sticky ? "border-b border-gray-200" : ""
      }`}
    >
      <div className={`px-4 py-6 ${sticky ? "rounded-xl bg-indigo-100" : ""}`}>
        <div className="items-center space-y-3 sm:flex sm:space-x-5 sm:space-y-0">
          <div className="shrink-0 ">
            <Image
              loading="eager"
              src={image || "/images/member-1.jpeg"}
              alt={title}
              width={56}
              height={56}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          <div className="grow items-center justify-between space-y-5 lg:flex lg:space-x-2 lg:space-y-0">
            <div>
              <div className="props-start flex space-x-2">
                <div className="mb-1 text-sm font-semibold ">{city}</div>
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
                <Link
                  className="text-lg font-bold"
                  href={`/playgroup-details/${id}`}
                >
                  {title}
                </Link>
              </div>
              <div className="-m-1">
                <a
                  className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600 ${
                    sticky ? "bg-indigo-200" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {format}
                </a>
                <a
                  className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600 ${
                    sticky ? "bg-indigo-200" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {physical ? "Physical" : "Online"}
                </a>
                <a
                  className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600 ${
                    sticky ? "bg-indigo-200" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {`${currentSize} / ${maxSize} Players`}
                </a>
                {lgs && (
                  <a
                    className={`m-1 inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600 ${
                      sticky ? "bg-indigo-100" : "bg-gray-100"
                    }`}
                    href="#0"
                  >
                    Local Game Store
                  </a>
                )}
              </div>
            </div>
            <div className="flex min-w-[120px] items-center space-x-3 lg:justify-end lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                <Link
                  className="btn-sm group bg-black px-3 py-1.5 text-white shadow-sm hover:bg-indigo-950"
                  href={`/playgroup-details/${id}`}
                >
                  Join Now
                  <span className="ml-1 tracking-normal text-indigo-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className="text-sm italic text-gray-800 group-hover:lg:hidden">
                {"22d"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroupItem;
