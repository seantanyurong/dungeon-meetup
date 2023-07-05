import Image from "next/image";
// import type { StaticImageData } from "next/image";
import type { Format } from "@prisma/client";
import type { ScryfallCard } from "~/utils/types";
import { useEffect, useState } from "react";

// interface MemberCardProps {
//   image: StaticImageData;
//   name: string;
//   title: string;
//   description: string;
// }

interface PlaygroupItemProps {
  currentSize: number;
  maxSize: number;
  formats: Format[];
  description: string;
  name: string;
  city: string;
  lgs: boolean;
  physical: string;
  cardId: string;
}

export default function MemberCard({
  // image,
  // name,
  // title,
  // description,
  currentSize,
  maxSize,
  formats,
  description,
  name,
  city,
  lgs,
  physical,
  cardId,
}: PlaygroupItemProps) {
  const [card, setCard] = useState<ScryfallCard>();

  function getCardById(id: string): Promise<ScryfallCard> {
    return fetch(`https://api.scryfall.com/cards/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        return res as ScryfallCard;
      });
  }

  useEffect(() => {
    getCardById(cardId)
      .then((randomCard) => {
        setCard(randomCard);
      })
      .catch(() => console.log("Failed to get random card"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-2 flex h-full max-w-xl overflow-hidden rounded-2xl drop-shadow-sm">
      {card && (
        <Image
          loading="eager"
          src={card?.image_uris?.art_crop || ""}
          alt="temp"
          width={175}
          height={500}
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="bg-white p-8 text-left">
        <h2 className="h3 mb-1">{name}</h2>
        <p className="mb-4 text-lg font-medium ">{city}</p>
        <p className=" font-medium">{description}</p>
      </div>
    </div>
  );
}
