import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-3 px-8">
      <div>
        <Image src={logo} alt="logo" width={200} height={50} />
      </div>
      <div className="space-x-8">
        <Link href={"/3d-models"}>3D MODELS</Link>
        <Link href={"/about"}>ABOUT</Link>
      </div>
    </div>
  );
}
