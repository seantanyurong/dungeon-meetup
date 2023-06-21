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
    <div className="drop-shadow-sm flex rounded-2xl max-w-xl overflow-hidden mx-2 h-full">
      <Image
        loading="eager"
        src={image}
        alt="temp"
        width={175}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <div className="p-8 text-left bg-white">
        <h2 className="h3 mb-1">{name}</h2>
        <p className="text-lg font-medium mb-4 font-montreal">{title}</p>
        <p className="font-montreal font-medium">{description}</p>
      </div>
    </div>
  );
}
