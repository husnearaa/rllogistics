import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import Blog1 from "@/assets/image/blog-bg.png";
import BlogImg1 from "@/assets/image/blog-1.png";
import BlogImg2 from "@/assets/image/blog-2.png";
import BlogImg3 from "@/assets/image/blog-3.png";

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Blog Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
      />
      <main className="container mx-auto py-8 px-4">
        {/* Hero Image */}
        <div className="mb-8">
          <div className="">
            <Image
              src={Blog1}
              alt="Container shipping port with colorful containers and yellow cranes"
              className="object-cover w-full h-[340px] rounded-lg"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div className="pb-16">
          {/* Meta Information */}
          <div className="flex items-center gap-6 lg:gap-52 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>10 May 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>No Comment</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Global shipping industry drives international trade and economic
            growth
          </h2>

          {/* Content Paragraphs */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Global shipping industry drives international trade and economic
              growth. Container shipping has been the industry&apos;s backbone
              since the 1950s, when standardized containers revolutionized cargo
              transport. Today, over 90% of global trade moves by sea,
              connecting continents and enabling the flow of goods that power
              modern economies. The efficiency of containerization has
              transformed ports into electronic logistics hubs, remaining
              essentially unchanged in concept but continuously evolving with
              technology.
            </p>

            {/* First embedded image with text wrap */}
            <div>
              <div className="float-left mr-6 mb-4">
                <Image
                  src={BlogImg1}
                  alt="Shipping port operations at sunset"
                  width={320}
                  height={200}
                  className="rounded-lg lg:w-[427px] lg:h-[340px] w-full"
                />
              </div>

              <p className="mb-6">
                Container shipping drives international commerce through
                standardized cargo handling systems. Modern ports utilize
                advanced crane technology and automated systems to process
                thousands of containers daily. These facilities operate around
                the clock, managing the complex logistics of global supply
                chains. The integration of digital tracking systems and
                automated equipment has revolutionized port operations, enabling
                faster turnaround times and improved efficiency in cargo
                handling processes.
              </p>
              <p className="mb-6">
                Container shipping drives international commerce through
                standardized cargo handling systems. Modern ports utilize
                advanced crane technology and automated systems to process
                thousands of containers daily. These facilities operate around
                the clock, managing the complex logistics of global supply
                chains. The integration of digital tracking systems and
                automated equipment has revolutionized port operations, enabling
                faster turnaround times and improved efficiency in cargo
                handling processes.
              </p>

              <p className="mb-6">
                Container shipping drives international commerce through
                standardized cargo handling systems. Modern ports have been the
                industry&apos;s foundation since the 1950s, when
                containerization took hold and transformed global trade. The
                system has survived not only five centuries of maritime
                evolution, but also the leap into electronic logistics
                management, remaining essentially unchanged in its core
                principles. It was revolutionized in the 1960s with the
                introduction of standardized container sizes, and more recently
                with digital port management systems and automated crane
                operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              <p className="mb-6">
                Global shipping drives the backbone of international trade and
                commerce. Container ports have been the industry&apos;s standard
                infrastructure since the 1950s, when containerization
                revolutionized cargo handling. An efficient port can process
                thousands of containers daily, managing the complex flow of
                goods between ships, trucks, and rail systems. The leap into
                electronic tracking and automated systems has transformed these
                facilities into sophisticated logistics hubs, essentially
                unchanged in their fundamental purpose but continuously enhanced
                with modern technology.
              </p>
              {/* Second embedded image */}
              <div className="float-right lg:ml-6 ml-0 mb-4">
                <Image
                  src={BlogImg2}
                  alt="Aerial view of colorful stacked shipping containers"
                  width={500}
                  height={500}
                  className="rounded-lg lg:w-[427px] lg:h-[340px] w-full"
                />
              </div>
              {/* third embedded image */}
              <div className="float-right lg:ml-6 ml-0 mb-4">
                <Image
                  src={BlogImg3}
                  alt="Aerial view of colorful stacked shipping containers"
                  width={500}
                  height={500}
                  className="rounded-lg lg:w-[427px] lg:h-[340px] w-full"
                />
              </div>
            </div>

            <div className="clear-both"></div>
          </div>
          <p className="mt-6">
            Container shipping drives international commerce through
            standardized cargo handling systems. Modern ports have been the
            industry&aposs foundation since the 1950s, when containerization
            took hold and transformed global trade. The system has survived not
            only five centuries of maritime evolution, but also the leap into
            electronic logistics management, remaining essentially unchanged in
            its core principles. It was revolutionized in the 1960s with the
            introduction of standardized container sizes, and more recently with
            digital port management systems and automated crane operations.
          </p>
        </div>
      </main>
    </div>
  );
}
