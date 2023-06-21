import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CompanyCardProps {
  image: StaticImageData;
}

export default function CompanyCard({ image }: CompanyCardProps) {
  return (
    <div className="flex justify-center border-2 border-gray-300 px-10 py-8 w-60 h-28">
      <Image src={image} alt="temp" style={{ objectFit: "contain" }} />
    </div>
  );
}
