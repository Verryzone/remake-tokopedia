import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="max-w-[1440px] w-full px-0 lg:px-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <MobileNavbar />
            {children}
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
