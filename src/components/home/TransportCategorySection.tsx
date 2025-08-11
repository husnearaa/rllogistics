import Image from "next/image";
import TransportImg1 from "@/assets/image/Transport1.png";
import TransportImg2 from "@/assets/image/Transport-2.png";

export default function TransportCategorySection() {
  return (
    <section className="container mx-auto px-16 py-8 md:py-12 lg:py-16">
      <div className="flex items-center flex-col lg:flex-row lg:gap-16 gap-6">
        {/* Left Column - Image */}
        <div className="md:w-1/3 order-2 lg:order-1  border border-amber-700">
          <Image
            src={TransportImg1}
            width={600}
            height={400}
            alt="People unloading boxes from a moving truck"
            className="rounded-lg object-cover w-full h-auto lg:w-[450px] lg:h-[250px]"
          />
        </div>
        {/* Right Column - Text Content */}
        <div className="md:w-2/3 order-1 lg:order-2 space-y-4  border border-amber-700 px-8">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            WE SPECIALISE IN THE TRANSPORTATION
            <span className="ml-2 inline-block w-8 h-0.5 bg-red-500 align-middle"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Manage your complex logistics as can focus
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Transmax is the world&apos;s driving worldwide coordinations
            supplier we uphold industry and exchange the worldwide trade of
            about dummy merchandise through land transport.
          </p>
        </div>
      </div>

      {/* Bottom Section - Lists and Image */}
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left/Middle - Lists */}
        <div className="md:w-3/5 flex justify-between items-center  border border-amber-700">
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
            <li>Aerospace & Defense</li>
            <li>Automotive</li>
            <li>Cloud Computing</li>
            <li>Fashion & Retail</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
            <li>Aerospace & Defense</li>
            <li>Automotive</li>
            <li>Cloud Computing</li>
            <li>Fashion & Retail</li>
          </ul>
        </div>
        {/* Right - Image */}
        <div className="lg:w-2/5 flex justify-center border border-amber-700">
          <div>
            <Image
              src={TransportImg2}
              width={500}
              height={500}
              alt="Person scanning a package"
              className="rounded-lg object-cover w-full h-auto lg:w-[427px] lg:h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
