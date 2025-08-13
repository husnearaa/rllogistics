import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AirImg from "@/assets/image/air.png";
import ShipImg from "@/assets/image/ship.png";
import RoadImg from "@/assets/image/road.png";
import Link from "next/link";

const transportData = [
  {
    id: 1,
    title: "Air Transport",
    image: AirImg,
    location: "China",
  },
  {
    id: 2,
    title: "Ship Transport",
    image: ShipImg,
    location: "India",
  },
  {
    id: 3,
    title: "Road Transport",
    image: RoadImg,
    location: "Bangladesh",
  },
];

export default function BannerSection() {
  return (
    <div className="bg-gray-50 px-6 md:py-14 py-8">
      <div className="lg:container lg:mx-auto">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Section - Hero Content */}
          <div className="lg:w-2/5 py-8">
            <h1 className="md:text-[70px] lg:text-[50px] xl:text-[70px] text-4xl font-bold text-black md:leading-20 mb-4">
              Fast and Safe <br />
              <span className="font-bold text-red-500">Transport</span>
            </h1>

            <div className="space-y-8">
              <p className="text-gray-700 md:text-lg text-base leading-relaxed md:max-w-xl">
                Reliable logistics and transport solutions ensuring timely
                delivery, cost-efficiency, and seamless supply chain management.
              </p>

              <div className="flex gap-4 xl:max-w-xl flex-col md:flex-row md:mt-16 lg:mt-8 xl:mt-16 mt-8">
                <Input
                  type="text"
                  placeholder="Enter your booking number..."
                  className="flex-1 h-12 border border-gray-300 py-3 lg:py-0 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                />
                <Link href="/track-order">
                  <Button className="bg-red-500 hover:bg-transparent border border-primary hover:border hover:border-primary hover:text-primary text-white px-6 h-12">
                    Track Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Transport Cards */}
          <div className="lg:w-3/5 lg:pl-8">
            <div className="flex justify-end gap-6 flex-col md:flex-row">
              {transportData.map((transport) => (
                <div key={transport.id} className="relative overflow-hidden">
                  <Image
                    src={transport.image}
                    alt={transport.title}
                    priority
                    className="object-cover rounded-lg lg:w-[240px] lg:h-[360px] w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {transport.title}
                    </h3>
                    <div className="flex items-center text-white text-sm hover:scale-110 duration-300">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{transport.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
