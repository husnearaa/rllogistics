import Image from "next/image";
import PlaneImg from "@/assets/icons/plane.png";
import TrainImg from "@/assets/icons/train.png";
import TruckImg from "@/assets/icons/truck.png";

const features = [
  {
    id: 1,
    icon: PlaneImg,
    title: "Get Compensation",
    description: "Several thousands of dollars",
  },
  {
    id: 2,
    icon: TrainImg,
    title: "No Spend Your Time",
    description: "Several thousands of dollars",
  },
  {
    id: 3,
    icon: TruckImg,
    title: "Perfect Results",
    description: "Several thousands of dollars",
  },
];

export default function ChooseUsSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              Why Choose Us
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            Why choosing the right partner for
            <br />
            your need is crucial
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-red-50 rounded-lg p-6 text-left"
            >
              {/* Icon */}
              <div className="flex justify-center items-center flex-col gap-4">
                <div className="w-[88px] h-[88px]  bg-primary rounded-full flex items-center justify-center mb-6">
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={`${feature.title} icon`}
                    width={500}
                    height={500}
                    className="text-white w-[47px] h-[47px] hover:scale-110 duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="lg:text-2xl text-xl font-semibold text-gray-900  leading-tight md:max-w-[260px]">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-[16px] leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
