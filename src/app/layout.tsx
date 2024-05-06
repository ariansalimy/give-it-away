import type { Metadata } from "next";
import { Inter } from "next/font/google" 
import { Toaster } from "@/components/ui/toaster"

import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Give-It-Away",
  description: "A giveaway randomizer tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  
       
  
        {children}

        <Toaster />
        </body>
    </html>
  );
}
