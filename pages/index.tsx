import MyCarousel from "@/components/carousel";
import About from "@/components/about";
import People from "@/components/people";
import UnderDevelopmentPopup from "@/components/popup";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <About />
      <People />
      <Partners />


      <UnderDevelopmentPopup />
    </>
  );
}
