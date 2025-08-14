import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "WEI ZHANG",
    position: "Managing Director",
    image: "/construction-worker.png",
  },
  {
    id: 2,
    name: "MEI CHEN",
    position: "Warehouse Controller",
    image: "/warehouse-woman-tablet.png",
  },
  {
    id: 3,
    name: "MING LI",
    position: "Warehouse Manager",
    image: "/placeholder-l0jrz.png",
  },
  {
    id: 4,
    name: "LI WANG",
    position: "Product Manager",
    image: "/construction-woman.png",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-red-500 w-16"></div>
            <span className="mx-4 text-red-500 font-medium tracking-wider text-sm">OUR TEAM</span>
            <div className="h-px bg-red-500 w-16"></div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900">Meet our expert team</h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover"
                />

                {/* Social Media Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
