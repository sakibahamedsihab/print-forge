"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: ReactNode;
  isActive: boolean;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <li>
      <Link
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-[#F77D36] 
        ${isActive ? "text-[#F77D36]" : "text-gray-700"} `}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
