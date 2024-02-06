import Image from "next/image";
import Link from "next/link";

import { Kavoon } from "next/font/google";
import { cn } from "@/lib/utils";

const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
});

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 w-max">
      <div className="rounded-lg w-12 h-12 bg-primary">
        <Image
          src="/assets/logo.svg"
          alt="Blockonomy"
          height={48}
          width={48}
          priority
        />
      </div>

      <h2 className={cn("text-xl", kavoon.className)}>BLOCKONOMY</h2>
    </Link>
  );
}
