import Image from "next/image";
import type { StaticImageData } from "next/image";

interface MemberCardProps {
  image: StaticImageData;
  name: string;
  title: string;
  description: string;
}

export default function MemberCard({
  image,
  name,
  title,
  description,
}: MemberCardProps) {
  return (
    <div className="mx-2 flex h-full max-w-xl overflow-hidden rounded-2xl drop-shadow-sm">
      <Image
        loading="eager"
        src={image}
        alt="temp"
        width={175}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <div className="bg-white p-8 text-left">
        <h2 className="h3 mb-1">{name}</h2>
        <p className="mb-4 text-lg font-medium ">{title}</p>
        <p className=" font-medium">{description}</p>
      </div>
    </div>
  );
}
