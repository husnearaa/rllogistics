import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import PlaneT from "@/assets/image/airT.png";
import ShipImg from "@/assets/image/shipT.png";
import TruckTImg from "@/assets/image/truckT.png";
import PlaneImg from "@/assets/icons/plane.png";
import TrainImg from "@/assets/icons/train.png";
import TruckImg from "@/assets/icons/truck.png";

const transportationServices = [
  {
    id: 1,
    title: "Air Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: PlaneT,
    icon: PlaneImg,
  },
  {
    id: 2,
    title: "Ship Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: ShipImg,
    icon: TrainImg,
  },
  {
    id: 3,
    title: "Road Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: TruckTImg,
    icon: TruckImg,
  },
];

export default function TransportationServices() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transportationServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-red-200"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Red Icon Overlay */}
                <div className="absolute -bottom-8 right-4 lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[50px] w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={500}
                    height={500}
                    className="text-white lg:w-[40px] lg:h-[40px] md:w-[24px] md:h-[24px] w-[24px] h-[24px] hover:scale-110 duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Explore More Link */}
                <button className="flex items-center text-gray-900 font-medium text-sm hover:text-primary transition-colors duration-200 group">
                  <span>Explore More</span>
                  <CgArrowLongRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
