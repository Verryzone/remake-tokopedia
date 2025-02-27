import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsTravio",
  description: "Great Online Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center overflow-hidden">
          <div className="max-w-[1440px] w-full px-0 lg:px-6">
            <Suspense fallback={<Loading />}>
              <main className="relative">{children}</main>
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
