"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function ModelSidebar({
  cat,
}: {
  cat: { displayName: string; slug: string };
}) {
  const pathname = usePathname();
  const href = `/3d-models/categories/${cat.slug}`;
  return (
    <div>
      <NavLink key={cat.slug} href={href} isActive={pathname === href}>
        {cat.displayName}
      </NavLink>
    </div>
  );
}
