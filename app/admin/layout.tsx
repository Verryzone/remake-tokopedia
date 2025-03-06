import Sidebar from "@/app/admin/components/Sidebar/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsTravio",
  description: "Great Online Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center overflow-hidden h-full">
      <div className="max-w-[1440px] min-w-[1440px] w-full px-0 lg:px-6 block">
        <div className="bg-gray-100 rounded-r-md flex justify-start items-center">
          <h1 className="text-3xl font-bold text-gray-700 p-6">
            As<span className="text-green-700">Travio.</span>
          </h1>
        </div>
        <div className="w-full flex h-full">
          <div className="w-[20%] h-full">
            <Sidebar />
          </div>
          <div className="w-[80%] h-full m-8">
            <main className="relative">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
