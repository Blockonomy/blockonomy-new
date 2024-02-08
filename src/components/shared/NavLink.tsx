import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

import { Karma } from "next/font/google";
import { cn } from "@/lib/utils";

const karma = Karma({
  subsets: ["latin"],
  weight: "300",
});

export default function NavLink({ name, path, isActive }: NavLinkType) {
  return (
    <Link
      href={path}
      className={cn("flex items-center", { "text-primary": isActive })}>
      <p className={cn("text-base font-bold", karma.className)}>{name}</p>
      {isActive ? (
        <ChevronUp className="w-4 h-4 ml-1.5" />
      ) : (
        <ChevronDown className="w-4 h-4 ml-1.5" />
      )}
    </Link>
  );
}
