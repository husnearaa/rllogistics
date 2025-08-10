import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AirImg from '@/assets/image/air.png';
import ShipImg from '@/assets/image/ship.png';
import RoadImg from '@/assets/image/road.png';

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

export default function Banner() {
  return (
    <div className="bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-center item-center">
          {/* Left Section - Hero Content */}
          <div className="space-y-8 w-2/5 border border-green-500">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-black">Fast and Safe</h1>
              <h1 className="text-6xl font-bold text-red-500">Transport</h1>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Reliable logistics and transport solutions ensuring timely
              delivery, cost-efficiency, and seamless supply chain management.
            </p>

            <div className="flex gap-4 max-w-md">
              <Input
                placeholder="Enter your booking number..."
                className="flex-1 h-12 border-gray-300"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 h-12">
                Track Order
              </Button>
            </div>
          </div>

          {/* Right Section - Transport Cards */}
          <div className="w-3/5 border border-red-500">
            <div className="flex justify-end gap-3">
              {transportData.map((transport) => (
                <div
                  key={transport.id}
                  className="relative overflow-hidden rounded-lg aspect-square"
                >
                  <Image
                    src={transport.image.src}
                    alt="Air Transport"
                    width={500}
                    height={500}
                    className="w-[240px] h-[360px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                     {transport.title}
                    </h3>
                    <div className="flex items-center text-white text-sm">
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
