"use client";

import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Khand } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Trade() {
  const router = useRouter();
  const { isConnected } = useAccount();

  // check if user had connected their wallet
  if (!isConnected) {
    router.push("/");
  }

  return (
    <div className="w-full">
      <MaxWidthContainer className="py-20">
        <div className="mx-auto max-w-3xl w-full">
          <h1 className={cn("font-bold text-6xl", khand.className)}>Trade</h1>
          <p className={cn("font-medium text-2xl mt-3", khand.className)}>
            1 WAT ($7.72)
          </p>

          <div className="flex justify-end w-full mt-6 mb-20">
            <Button className="bg-[#E2BEBE] font-bold">
              Transaction History
            </Button>
          </div>

          <div className="w-full rounded-lg mb-12 pt-2 p-6 bg-[#E2BEBE]">
            <div className="flex items-center">
              <div className="w-[28] h-[28]">
                <Image
                  src="/assets/vivum.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <p
                className={cn(
                  "font-semibold text-secondary text-xl",
                  khand.className
                )}>
                Waveswap
              </p>
            </div>

            <div className="flex justify-between px-2 text-secondary">
              <div className="flex flex-col gap-2">
                <h1 className={cn("font-semibold text-5xl", khand.className)}>
                  0.0
                </h1>
                <p className={cn("text-2xl font-normal", khand.className)}>
                  $0.00
                </p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <h1 className={cn("font-semibold text-5xl", khand.className)}>
                  WAT
                </h1>
                <p
                  className={cn(
                    "text-2xl font-semibold flex items-center",
                    khand.className
                  )}>
                  <Image
                    src="/assets/wallet.svg"
                    alt=""
                    width={60}
                    height={33}
                    priority
                    className="mb-2 -mx-2"
                  />
                  0.00
                </p>
              </div>
            </div>
          </div>

          <Button
            className={cn(
              "w-full h-16 text-xl text-secondary font-bold",
              khand.className
            )}>
            Trade
          </Button>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
