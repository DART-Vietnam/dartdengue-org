import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div className="p-6 h-[calc(100vh-10rem)]">
      <Carousel>
        <div className="w-full h-full">
          <Image
            src="/dart_kom1.jpg"
            alt="DART team at the DART kick-off meeting"
            fill
            className="object-cover object-center"
            priority={true}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/annual_meeting_2024.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority={true}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/dart_kom3.png"
            alt=""
            fill
            className="object-cover object-center"
            priority={true}
          />
        </div>
      </Carousel>
    </div>
  );
}
