import Image from "next/image";
import TransportImg1 from "@/assets/image/Transport1.png";
import TransportImg2 from "@/assets/image/Transport-2.png";

export default function TransportCategorySection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      {/* Top Section - Image and Text */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Column - Image (order changes on mobile) */}
        <div className="w-full lg:w-1/2 xl:w-5/12 order-2 lg:order-1">
          <div className="relative rounded-lg overflow-hidden aspect-video lg:aspect-[16/9]">
            <Image
              src={TransportImg1}
              fill
              alt="People unloading boxes from a moving truck"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 xl:w-7/12 order-1 lg:order-2 space-y-4 lg:space-y-6">
          {/* <div className="flex items-center">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              WE SPECIALISE IN THE TRANSPORTATION
            </p>
            <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
          </div> */}
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <span className="text-red-500 font-semibold text-[20px] tracking-wide uppercase">
              WE SPECIALISE IN THE TRANSPORTATION
            </span>
            <div className="w-10 h-[2px] bg-red-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Manage your complex logistics so you can focus
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Transmax is the world&apos;s leading worldwide logistics provider.
            We support industry and trade in the global exchange of goods
            through land transport.
          </p>
        </div>
      </div>

      {/* Bottom Section - Lists and Image */}
      <div className="mt-6 md:mt-12 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Left/Middle - Lists */}
        <div className="w-full lg:w-3/5 flex flex-col sm:flex-row justify-between gap-8 md:gap-12 pr-32">
          <ul className="space-y-3 text-gray-800 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Aerospace & Defense</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Automotive</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Cloud Computing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Fashion & Retail</span>
            </li>
          </ul>
          <ul className="space-y-3 text-gray-800 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Healthcare</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Industrial Manufacturing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Energy & Utilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Food & Beverage</span>
            </li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-2/5">
          <div className="relative rounded-lg overflow-hidden aspect-video lg:aspect-[16/9]">
            <Image
              src={TransportImg2}
              fill
              alt="Person scanning a package"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
