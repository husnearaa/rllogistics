import Image from "next/image";
import LeftImg1 from "@/assets/image/L1.png";
import LeftImg2 from "@/assets/image/L2.png";
import RightImg1 from "@/assets/image/R1.png";
import RightImg2 from "@/assets/image/R2.png";
import RightImg3 from "@/assets/image/R3.png";
import RightImg4 from "@/assets/image/R4.png";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Image 1: Top-left (Truck driver) */}
          <Image
            src={LeftImg1}
            alt="Smiling truck driver"
            width={300}
            height={300}
            className="w-full object-cover rounded-lg aspect-square"
          />

          {/* Image 2: Top-middle (Delivery person with tablet) */}
          <Image
            src={RightImg1}
            alt="Delivery person using a tablet"
            width={400}
            height={300}
            className="w-full object-cover rounded-lg aspect-[4/3]"
          />

          {/* Image 3: Top-right, spans two rows (Delivery person handing boxes) */}
          <Image
            src={RightImg3}
            alt="Delivery person handing boxes"
            width={300}
            height={616}
            className="w-full h-full object-cover rounded-lg md:row-span-2 aspect-[300/616]"
          />

          {/* Image 4: Bottom-left (Man with package) */}
          <Image
            src={LeftImg2}
            alt="Smiling man holding a package"
            width={300}
            height={300}
            className="w-full object-cover rounded-lg aspect-square"
          />

          {/* Image 5: Bottom-middle (Two people packing) */}
          <Image
            src={RightImg2}
            alt="Two people packing boxes"
            width={400}
            height={300}
            className="w-full object-cover rounded-lg md:row-span-2 aspect-[4/3]"
          />

          {/* Image 6: Bottom-most, spans all columns (Warehouse) */}
          <Image
            src={RightImg4}
            alt="Warehouse interior"
            width={1200}
            height={300}
            className="w-full object-cover rounded-lg md:col-span-2 aspect-[4/1]"
          />
        </div>
      </div>
    </section>
  );
}
