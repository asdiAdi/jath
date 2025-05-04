import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LinkProvider from "@/providers/LinkProvider";
import NavbarLayout from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Code from "@/components/ui/code";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jath Minecraft Server",
  description: "Minecraft server for Jath family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(inter.className, "p-4 h-full")}>
        <h1 className="text-3xl font-bold">
          Jath Minecraft Server: <Code>jath-world.carladi.com</Code>
        </h1>

        <NavbarLayout />
        <hr className="mb-4" />

        <LinkProvider>{children}</LinkProvider>
        <Toaster />
      </body>
    </html>
  );
}
