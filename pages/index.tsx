import Head from "next/head";
import MyCarousel from "@/components/carousel";
import About from "@/components/about";
import People from "@/components/people";
import UnderDevelopmentPopup from "@/components/popup";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <About />
      <People />
      <UnderDevelopmentPopup />
    </>
  );
}
