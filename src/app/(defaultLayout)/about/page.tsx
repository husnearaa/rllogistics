import TransportCategorySection from "@/components/home/TransportCategorySection";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import PlaneImg from "@/assets/icons/plane.png";
import TrainImg from "@/assets/icons/train.png";
import TruckImg from "@/assets/icons/truck.png";

const features = [
  {
    id: 1,
    icon: PlaneImg,
    title: "Global Sustainability Market Leader",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
  {
    id: 2,
    icon: TrainImg,
    title: "Relentless Productivity Driver",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
  {
    id: 3,
    icon: TruckImg,
    title: "Proud To Deliver Excellence Every Time",
    description:
      "Transmax the world's driving more as worldwide coordinations supplier we exchange the any as more redy worldwide",
  },
];


const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <TransportCategorySection />

        <div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-red-50 rounded-lg p-6 text-left"
              >
                {/* Icon */}
                <div className="flex items-center gap-[19px]">
                  <div className="lg:w-[88px] lg:h-[88px] md:w-[60px] md:h-[50px] w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center mb-6">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={`${feature.title} icon`}
                      width={500}
                      height={500}
                      className="text-white lg:w-[47px] lg:h-[47px] md:w-[24px] md:h-[24px] w-[24px] h-[24px] hover:scale-110 duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="lg:text-2xl text-lg font-semibold text-gray-900 mb-4 leading-tight md:max-w-[260px]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
