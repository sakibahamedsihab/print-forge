"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center py-3 px-8">
      <div>
        <Image src={logo} alt="logo" width={200} height={50} />
      </div>
      <div className="space-x-8 flex list-none">
        <NavLink href={"/3d-models"} isActive={pathname.startsWith("/3d-models")}>
          3D MODELS
        </NavLink>
        <NavLink href={"/about"} isActive={pathname === "/about"}>
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}
