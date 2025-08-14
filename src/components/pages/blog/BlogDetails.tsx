import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Blog Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
      />
      <main className="container mx-auto py-8 px-4">
        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-8">
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IqKaLJfkyxJ0TMayPLntff6BTGiK0g.png"
              alt="Container shipping port with colorful containers and yellow cranes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          {/* Meta Information */}
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
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
              growth. Container shipping has been the industry&apos;s backbone since
              the 1950s, when standardized containers revolutionized cargo
              transport. Today, over 90% of global trade moves by sea,
              connecting continents and enabling the flow of goods that power
              modern economies. The efficiency of containerization has
              transformed ports into electronic logistics hubs, remaining
              essentially unchanged in concept but continuously evolving with
              technology.
            </p>

            {/* First embedded image with text wrap */}
            <div className="float-right ml-6 mb-4 w-80">
              <Image
                src="/sunset-shipping-port.png"
                alt="Shipping port operations at sunset"
                width={320}
                height={200}
                className="rounded-lg"
              />
            </div>

            <p className="mb-6">
              Container shipping drives international commerce through
              standardized cargo handling systems. Modern ports utilize advanced
              crane technology and automated systems to process thousands of
              containers daily. These facilities operate around the clock,
              managing the complex logistics of global supply chains. The
              integration of digital tracking systems and automated equipment
              has revolutionized port operations, enabling faster turnaround
              times and improved efficiency in cargo handling processes.
            </p>

            <p className="mb-6">
              Container shipping drives international commerce through
              standardized cargo handling systems. Modern ports have been the
              industry&apos;s foundation since the 1950s, when containerization took
              hold and transformed global trade. The system has survived not
              only five centuries of maritime evolution, but also the leap into
              electronic logistics management, remaining essentially unchanged
              in its core principles. It was revolutionized in the 1960s with
              the introduction of standardized container sizes, and more
              recently with digital port management systems and automated crane
              operations.
            </p>

            {/* Second embedded image */}
            <div className="float-left mr-6 mb-4 w-64">
              <Image
                src="/placeholder-nboew.png"
                alt="Aerial view of colorful stacked shipping containers"
                width={256}
                height={180}
                className="rounded-lg"
              />
            </div>

            <p className="mb-6">
              Global shipping drives the backbone of international trade and
              commerce. Container ports have been the industry&apos;s standard
              infrastructure since the 1950s, when containerization
              revolutionized cargo handling. An efficient port can process
              thousands of containers daily, managing the complex flow of goods
              between ships, trucks, and rail systems. The leap into electronic
              tracking and automated systems has transformed these facilities
              into sophisticated logistics hubs, essentially unchanged in their
              fundamental purpose but continuously enhanced with modern
              technology.
            </p>

            <div className="clear-both"></div>

            <p className="mb-6">
              Container shipping drives international commerce through
              standardized cargo handling systems. Modern ports have been the
              industry&aposs foundation since the 1950s, when containerization took
              hold and transformed global trade. The system has survived not
              only five centuries of maritime evolution, but also the leap into
              electronic logistics management, remaining essentially unchanged
              in its core principles. It was revolutionized in the 1960s with
              the introduction of standardized container sizes, and more
              recently with digital port management systems and automated crane
              operations.
            </p>
          </div>
        </div>
      </main>
      {/* Header Section */}
      <div className="text-center py-12 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>Home</span>
          <span>{">"}</span>
          <span>Our Blog</span>
        </div>
      </div>
    </div>
  );
}
