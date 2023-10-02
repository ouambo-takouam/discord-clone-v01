import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { cn } from "@lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@components/providers/theme-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone version 01",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
          <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
