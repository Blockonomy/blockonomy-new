import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import { ConnectWalletProvider } from "@/providers/ConnectWalletProvider";

import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockonomy",
  description:
    "Blockonomy is built by developers for developers. We understand the challenges and opportunites of startup development and we have designed our platform to meet your unique needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex-1 flex flex-col",
          inter.className
        )}>
        <ConnectWalletProvider>
          <Header />
          {children}
        </ConnectWalletProvider>
      </body>
    </html>
  );
}
