import Image from "next/image";
import LeftImg1 from "@/assets/image/L1.png";
import LeftImg2 from "@/assets/image/L2.png";
import RightImg1 from "@/assets/image/R1.png";
import RightImg2 from "@/assets/image/R2.png";
import RightImg3 from "@/assets/image/R3.png";
import RightImg4 from "@/assets/image/R4.png";

const GridLayout = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
          <div className="w-10 h-[2px] bg-primary"></div>
          <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
            Our Project
          </span>
          <div className="w-10 h-[2px] bg-primary"></div>
        </div>
        <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
          Optimizing supply chains with data <br /> analytics
        </h2>
      </div>

      {/* Image Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left Column - Large Vertical Images */}
        <div className="md:col-span-5 space-y-3">
          <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
            <Image
              src={LeftImg1}
              alt="Supply chain optimization dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
            <Image
              src={LeftImg2}
              alt="Data analytics visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Smaller Images Grid */}
        <div className="md:col-span-7 grid grid-cols-2 gap-3">
          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
              <Image
                src={RightImg1}
                alt="Supply chain network diagram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
              <Image
                src={RightImg2}
                alt="Logistics optimization metrics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
            <Image
              src={RightImg3}
              alt="Data analysis charts"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-xl transition-transform hover:scale-[1.02] col-span-2">
            <Image
              src={RightImg4}
              alt="Supply chain workflow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
