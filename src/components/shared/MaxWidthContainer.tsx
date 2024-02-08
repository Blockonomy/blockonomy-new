import { cn } from "@/lib/utils";
import React from "react";

type MaxWidthContainerTypes = {
  className?: string;
  children: React.ReactNode;
};

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerTypes) {
  return (
    <div className={cn("mx-auto w-full px-4 max-w-[1400px]", className)}>
      {children}
    </div>
  );
}
