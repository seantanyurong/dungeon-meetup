import Image from "next/image";
import type { StaticImageData } from "next/image";
// import type { Format } from "@prisma/client";
// import type { ScryfallCard } from "~/utils/types";
// import { useEffect, useState } from "react";

interface PlaygroupItemProps {
  currentSize: number;
  maxSize: number;
  formats: string[];
  description: string;
  name: string;
  city: string;
  lgs: boolean;
  physical: string;
  image: StaticImageData;
}

export default function PlaygroupCard({
  currentSize,
  maxSize,
  formats,
  description,
  name,
  city,
  lgs,
  physical,
  image,
}: PlaygroupItemProps) {
  // const [card, setCard] = useState<ScryfallCard>();

  // function getCardById(id: string): Promise<ScryfallCard> {
  //   return fetch(`https://api.scryfall.com/cards/${id}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       return res as ScryfallCard;
  //     });
  // }

  // useEffect(() => {
  //   getCardById(cardId)
  //     .then((randomCard) => {
  //       setCard(randomCard);
  //     })
  //     .catch(() => console.log("Failed to get random card"));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="mx-2 flex h-full max-w-xl overflow-hidden rounded-2xl  drop-shadow-sm">
      <Image
        loading="eager"
        src={image}
        alt="temp"
        width={175}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <div className="bg-[#ffffff] p-8 text-left">
        <h2 className="h3 mb-1">{name}</h2>
        <p className="mb-4 text-lg font-medium ">{city}</p>
        <p className="mb-3 font-medium">{description}</p>
        <div className="">
          {formats?.map((format, index) => {
            return (
              <a
                className={`mr-2 inline-flex whitespace-nowrap rounded-md bg-indigo-200 px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600`}
                href=""
                key={index}
              >
                {format}
              </a>
            );
          })}
          <a
            className={`mr-2 inline-flex whitespace-nowrap rounded-md bg-indigo-200 px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out  hover:text-gray-600`}
            href=""
          >
            {physical}
          </a>
          <a
            className={`mr-2 inline-flex whitespace-nowrap rounded-md bg-indigo-200 px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600`}
            href=""
          >
            {`${currentSize} / ${maxSize} Players`}
          </a>
          {lgs && (
            <a
              className={`mr-2 inline-flex whitespace-nowrap rounded-md bg-indigo-200 px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-150 ease-in-out hover:text-gray-600`}
              href=""
            >
              Local Game Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
