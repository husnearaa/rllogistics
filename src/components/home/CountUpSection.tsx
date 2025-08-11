"use client";

import CountUp from "react-countup";
import Image from "next/image";
import CountImg from "@/assets/image/countup.png";

const CountUpSection = () => {
  // Demo data matching the image
  const counts = {
    runningProjects: 12,
    honorableAwards: 123,
    projectsCompleted: 796,
    satisfiedClients: 2000,
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-red-500 w-16"></div>
            <span className="mx-4 text-red-500 font-semibold text-sm tracking-wider">WHY CHOOSE US</span>
            <div className="h-px bg-red-500 w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About our company</h2>
        </div> */}
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              WHY CHOOSE US
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            About our company
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={CountImg}
            alt="Airplane"
            width={500}
            height={500}
            className="w-[1064px] h-[471px] object-cover mx-auto"
          />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {/* Running Projects */}
          <div className="text-center py-8 border-r border-b md:border-b-0 border-gray-400 last:border-r-0">
            <div className="md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              <CountUp
                end={counts.runningProjects}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <p className="text-gray-800 font-medium">Running Project</p>
          </div>

          {/* Honorable Awards */}
          <div className="text-center py-8 md:border-r border-b md:border-b-0 border-gray-400 last:border-r-0">
            <div className="md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              <CountUp
                end={counts.honorableAwards}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <p className="text-gray-800 font-medium">Honorable award</p>
          </div>

          {/* Projects Completed */}
          <div className="text-center py-8 border-r border-gray-400 last:border-r-0">
            <div className="md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              <CountUp
                end={counts.projectsCompleted}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <p className="text-gray-800 font-medium">Project completed</p>
          </div>

          {/* Satisfied Clients */}
          <div className="text-center py-8">
            <div className="md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              <CountUp
                end={counts.satisfiedClients}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="k+"
              />
            </div>
            <p className="text-gray-800 font-medium">Satisfied clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountUpSection;
