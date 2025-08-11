import Image from "next/image";

export default function WorkProcessSection() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              OUR WORK PROCESS
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            How we deliver
            <br />
            your parcel
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Dotted connecting lines - positioned to connect the circles */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0">
            <div className="flex justify-between items-center px-20">
              <div className="flex-1 flex justify-center">
                <svg
                  width="200"
                  height="2"
                  viewBox="0 0 200 2"
                  className="ml-16"
                >
                  <path
                    d="M0 1 L200 1"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex-1 flex justify-center">
                <svg width="200" height="2" viewBox="0 0 200 2">
                  <path
                    d="M0 1 L200 1"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex-1 flex justify-center">
                <svg
                  width="200"
                  height="2"
                  viewBox="0 0 200 2"
                  className="mr-16"
                >
                  <path
                    d="M0 1 L200 1"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 1: Parcel Register */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-white border-3 border-red-500 rounded-full flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/red-clipboard-checklist-icon.png"
                    alt="Parcel Register"
                    width={40}
                    height={40}
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    1
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parcel Register
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Said moved fruits are unto forth years the brought kind herbs
                for under forty with may creepeth delisa.
              </p>
            </div>

            {/* Step 2: Parcel Loading */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-white border-3 border-red-500 rounded-full flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/placeholder-ngsft.png"
                    alt="Parcel Loading"
                    width={40}
                    height={40}
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    2
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parcel Loading
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Said moved fruits are unto forth years the brought kind herbs
                for under
              </p>
            </div>

            {/* Step 3: Parcel In-Transit */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-white border-3 border-red-500 rounded-full flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/red-delivery-truck-icon.png"
                    alt="Parcel In-Transit"
                    width={40}
                    height={40}
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    3
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parcel In-Transit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Said moved fruits are unto forth years the brought kind herbs
                for under forty with may creepeth delisa.
              </p>
            </div>

            {/* Step 4: Parcel Delivery */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-white border-3 border-red-500 rounded-full flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/red-delivery-person-package-icon.png"
                    alt="Parcel Delivery"
                    width={40}
                    height={40}
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    4
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parcel Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Said moved fruits are unto forth years the brought kind herbs
                for under forty
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
