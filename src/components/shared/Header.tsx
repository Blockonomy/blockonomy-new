"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import MaxWidthContainer from "./MaxWidthContainer";
import SiteLogo from "./SiteLogo";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";

const header_links = [
  {
    name: "Community",
    path: "/",
  },
  {
    name: "Ecosystem",
    path: "/ecosystem",
  },
  {
    name: "Developers",
    path: "/developers",
  },
  {
    name: "Trade",
    path: "/trade",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 inset-x-0 py-4 bg-background backdrop-blur-lg z-10">
      <MaxWidthContainer className="flex items-center justify-between">
        <SiteLogo />

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-6">
            {header_links.map((link, _uuid) => {
              const isActive = link.path === pathname;

              const props: NavLinkType = {
                isActive,
                name: link.name,
                path: link.path,
              };

              return <NavLink {...props} key={_uuid} />;
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              chainStatus={{
                smallScreen: "icon",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>

          <Button variant="outline" size="icon" className="flex lg:hidden">
            <AlignJustify className="w-5 h-5" />
          </Button>
        </div>
      </MaxWidthContainer>
    </header>
  );
}
