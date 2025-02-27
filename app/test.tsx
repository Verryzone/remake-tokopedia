import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import OtherFeatures from "@/components/OtherFeatures";

export default function Home() {
  return (
    <> 
      <Navbar/>
      <MobileNavbar/>
      <OtherFeatures/>
      <Hero/>
      <Highlight/>
      <Footer/>
    </>
  );
}
