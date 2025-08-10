import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/white-airplane-red-bg.png",
    title: "Global Sustainability Market Leader",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
  {
    id: 2,
    icon: "/computer-monitor-icon.png",
    title: "Relentless Productivity Driver",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
  {
    id: 3,
    icon: "/delivery-truck-icon.png",
    title: "Proud To Deliver Excellence Every Time",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
];

export default function DeliverySystemSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <span className="text-red-500 font-semibold text-sm tracking-wide uppercase">
              How it works
            </span>
            <div className="w-16 h-[2px] bg-red-500"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            How we deliver your
            <br />
            parcel
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-red-50 rounded-2xl p-8 text-left"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
