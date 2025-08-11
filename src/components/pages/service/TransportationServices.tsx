import Image from "next/image"
import { ArrowRight } from "lucide-react"
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
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transportationServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
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
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Explore More Link */}
                <button className="flex items-center text-gray-900 font-medium text-sm hover:text-red-500 transition-colors duration-200 group">
                  <span>Explore More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
