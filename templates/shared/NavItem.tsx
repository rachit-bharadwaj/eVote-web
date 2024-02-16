"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";

const NavItem = ({ label, url, Icon, className }: NavItem) => {
  const path = usePathname();

  const activeClass = path === url && "text-primary-200 font-extrabold";

  return (
    <Link
      href={url}
      className={cn(
        className,
        activeClass,
        "flex gap-3 items-center hover:text-primary-200 hover:font-bold"
      )}
    >
      {Icon && <Icon className="text-2xl" />}
      <p className="uppercase text-xl md:text-base lg:text-lg">{label}</p>
    </Link>
  );
};

export default NavItem;
