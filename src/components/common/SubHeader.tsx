import { Phone, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";
import UserImg from "@/assets/user.png";

const SubHeader = () => {
  return (
    <div className="">
      <header className="w-full bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-12 text-sm text-gray-700">
            <div className="flex gap-6">
              {/* Left section - Phone */}
              <div className="flex items-center gap-2 text-base">
                <Phone className="w-6 h-6 text-red-500" />
                <span>+86 130 9375 6351</span>
              </div>

              {/* Center section - Location */}
              <div className="hidden sm:flex items-center gap-2 text-base">
                <MapPin className="w-6 h-6 text-red-500" />
                <span>Location: China</span>
              </div>

              {/* Right section - Email and User */}
              <div className="flex items-center gap-6">
                {/* Email */}
                <div className="hidden md:flex items-center gap-2 text-base">
                  <MessageSquare className="w-6 h-6 text-red-500" />
                  <span>Email: admin@rllogistics.com</span>
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <div className="">
                <Image src={UserImg} alt="user" width={500} height={500} className="w-[40px] h-[40px]" />
              </div>
              <span className="hidden sm:inline text-base">Martin Luther</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SubHeader;
