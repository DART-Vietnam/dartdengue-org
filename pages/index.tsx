import MyCarousel from "@/components/carousel";
import About from "@/components/about";
import People from "@/components/people";
import UnderDevelopmentPopup from "@/components/popup";
import Partners from "@/components/partners";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <About />
      <Timeline />
      <People />
      <Partners />

      <UnderDevelopmentPopup />
    </>
  );
}
