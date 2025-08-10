"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";
import ExploreImg from "@/assets/image/explore.png";
import { Button } from "../ui/button";

export default function TutorialSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleBookNow = () => {
    // Add your booking logic here
    alert("Redirecting to booking page...");
  };

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="container mx-auto py-16">
      <div className="">
        <div className="flex items-center gap-3 mb-4 lg:mb-0">
          <span className="text-red-500 font-semibold text-[20px] tracking-wide uppercase">
            EXPLORE TUTORIAL
          </span>
          <div className="w-10 h-[2px] bg-red-500"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight max-w-[660px]">
              Check out our tutorial to book our services
            </h1>

            <p className="text-gray-600 md:text-lg text-base leading-relaxed">
              Reliable logistics and transport solutions ensuring timely
              delivery, cost-efficiency, and seamless supply chain management.
            </p>

            <Button
              onClick={handleBookNow}
              className="w-full lg:w-auto bg-red-500 hover:bg-transparent border border-primary hover:border hover:border-primary hover:text-primary text-white cursor-pointer px-8 h-12 rounded transition-colors duration-200"
            >
              Book Now
            </Button>
          </div>

          {/* Right Image/Video */}
          <div className="relative">
            <div
              className="relative cursor-pointer group rounded-lg overflow-hidden"
              onClick={openVideo}
            >
              <Image
                src={ExploreImg}
                alt="Shipping port with containers and cranes"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-500 hover:bg-red-600 rounded-full p-4 transition-colors duration-200 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0  hover:bg-black/45 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-black rounded-lg overflow-hidden">
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                className="w-full"
              >
                <source src="/placeholder-video.mp4" type="video/mp4" />
                <track
                  src="/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
