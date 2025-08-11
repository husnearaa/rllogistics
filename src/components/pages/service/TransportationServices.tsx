import Image from "next/image"
import { CgArrowLongRight } from "react-icons/cg";
import PlaneT from "@/assets/image/airT.png";
import ShipImg from "@/assets/image/shipT.png";
import TruckImg from "@/assets/image/truckT.png";

const transportationServices = [
  {
    id: 1,
    title: "Air Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: PlaneT,
    icon: "✈️",
  },
  {
    id: 2,
    title: "Ship Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: ShipImg,
    icon: "🚢",
  },
  {
    id: 3,
    title: "Road Transportation",
    description:
      "Transform the world's driving more as worldwide coordinations supplier we exchange the any as more rady worldwide",
    image: TruckImg,
    icon: "🚛",
  },
]

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
                <div className="absolute -bottom-3 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

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
  )
}
