import { Carousel } from "flowbite-react";

export default function MyCarousel() {
  return (
    <div className="p-6 h-[calc(100vh-10rem)]">
      <Carousel>
        <div className="w-full h-full bg-center bg-no-repeat bg-cover bg-dart-kom1"></div>
        <div className="w-full h-full bg-blue-500"></div>
        <div className="w-full h-full bg-green-500"></div>
      </Carousel>
    </div>
  );
}
