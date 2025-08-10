import { Phone, MapPin, MessageSquare, User, CircleUserRound } from "lucide-react";
// import Image from "next/image";
// import UserImg from "@/assets/user.png";

const SubHeader = () => {
  return (
    <div className="">
      <header className="w-full bg-white border-b-2 border-gray-200 py-3">
        <div className="container mx-auto lg:px-6 px-4">
          <div className="flex items-center justify-between h-12 text-sm text-gray-700">
            <div className="flex gap-6">
              {/* Left section - Phone */}
              <div className="flex items-center gap-2 text-base">
                <Phone className="lg:w-6 lg:h-6 w-5 h-5 text-red-500 hover:scale-110 duration-300" />
                <span className="text-base whitespace-nowrap">+86 130 9375 6351</span>
              </div>

              {/* Center section - Location */}
              <div className="hidden lg:flex items-center gap-2 text-base">
                <MapPin className="w-6 h-6 text-red-500 hover:scale-110 duration-300" />
                <span>Location: China</span>
              </div>

              {/* Right section - Email and User */}
              <div className="flex items-center gap-6">
                {/* Email */}
                <div className="hidden md:flex items-center gap-2 text-base">
                  <MessageSquare className="w-6 h-6 text-red-500 hover:scale-110 duration-300" />
                  <span>Email: admin@rllogistics.com</span>
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center gap-1 border border-primary text-primary hover:bg-primary hover:border hover:border-primary hover:text-white px-2 py-1 rounded-lg translation duration-300 cursor-pointer">
                  {/* <div className="">
                    <Image
                      src={UserImg}
                      alt="user"
                      width={500}
                      height={500}
                      className="w-[22px] h-[22px]"
                    />
                  </div> */}
                  <User />
                  <span className="hidden sm:inline text-base">User Login</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 bg-warning text-primary border border-warning hover:border hover:bg-primary hover:border-primary hover:text-white px-2 py-1 rounded-lg cursor-pointer">
                  {/* <div className="">
                    <Image
                      src={UserImg}
                      alt="user"
                      width={500}
                      height={500}
                      className="w-[22px] h-[22px]"
                    />
                  </div> */}
                  <CircleUserRound  />
                  <span className="hidden sm:inline text-base">
                    Admin Login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SubHeader;
