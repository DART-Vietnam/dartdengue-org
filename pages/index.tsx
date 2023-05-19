import Head from "next/head";
import MyCarousel from "@/components/carousel";
import About from "@/components/about";
import People from "@/components/people";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <About />
      <People />
    </>
  );
}
