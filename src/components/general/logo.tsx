import Link from "next/link";
import Image from "next/image";
import LogoImg from "public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        src={LogoImg}
        alt="temp"
        width={80}
        style={{ objectFit: "cover" }}
      />
    </Link>
  );
}
