import Image from "next/image";
import Link from "next/link";
import Member1 from "@/assets/image/m1.png";
import Member2 from "@/assets/image/m2.png";
import Member3 from "@/assets/image/m3.png";
import Member4 from "@/assets/image/m4.png";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "Project Manager",
    image: Member1,
    sortOrder: 1,
    socialMedia: {
      linkedin: "https://linkedin.com",
      wechat: "https://facebook.com",
      twitter: "01818245791",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Architect",
    image: Member2,
    sortOrder: 2,
    socialMedia: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "01818245792",
    },
  },
  {
    id: 3,
    name: "Robert Johnson",
    designation: "Civil Engineer",
    image: Member3,
    sortOrder: 3,
    socialMedia: {
      linkedin: "https://linkedin.com",
      wechat: "https://facebook.com",
      twitter: "01818245793",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Interior Designer",
    image: Member4,
    sortOrder: 4,
    socialMedia: {
      linkedin: "https://linkedin.com",
      wechat: "https://facebook.com",
      twitter: "01818245794",
    },
  },
  {
    id: 5,
    name: "Michael Wilson",
    designation: "Site Supervisor",
    image: Member1,
    sortOrder: 5,
    socialMedia: {
      linkedin: "https://linkedin.com",
      wechat: "https://facebook.com",
      twitter: "01818245795",
    },
  },
  {
    id: 6,
    name: "Sarah Brown",
    designation: "Quantity Surveyor",
    image: Member2,
    sortOrder: 6,
    socialMedia: {
      linkedin: "https://linkedin.com",
      wechat: "https://facebook.com",
      twitter: "01818245796",
    },
  },
];

export default function MeetOutTeam() {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              OUR TEAM
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            Meet our expert team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {teamMembers.map((teamMember, teamIdx) => (
            <div
              key={teamIdx}
              className="lg:w-full text-base font-medium text-[#5f5f5f] text-justify"
            >
              <div className="relative text-justify p-2">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  width={500}
                  height={300}
                  // loader={customLoader}
                  className="w-[296px] h-[377px] rounded-none shadow-md object-cover"
                />

                {/* Social Media Icons */}
                <div className="absolute top-8 right-10 flex flex-col gap-2">
                  {teamMember.socialMedia.wechat && (
                    <Link
                      href={teamMember.socialMedia.wechat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 hover:bg-primary translate-y-2 duration-500 shadow-sm shadow-white text-primary hover:text-white rounded-full"
                    >
                      <IoLogoWechat className="text-lg" />
                    </Link>
                  )}
                  {teamMember.socialMedia.twitter && (
                    <Link
                      href={`https://wa.me/${teamMember.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-primary translate-y-1 duration-700 text-primary hover:text-white p-2 shadow-sm shadow-white rounded-full"
                    >
                      <FaXTwitter className="text-l" />
                    </Link>
                  )}
                  {teamMember.socialMedia.linkedin && (
                    <Link
                      href={teamMember.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-primary translate-y-3 duration-300 shadow-sm shadow-white text-primary hover:text-white p-2 rounded-full"
                    >
                      <FaLinkedin className="text-lg" />
                    </Link>
                  )}
                </div>

                <div className="relative z-10 mx-auto -mt-8 w-[80%] bg-white text-black px-3 py-2 rounded-lg shadow-md shadow-red-100">
                  <h1 className="text-center font-medium text-base">
                    {teamMember.name}
                  </h1>
                  <h2 className="text-xs text-center font-medium">
                    {teamMember.designation}
                  </h2>
                  {/* 
                    <div className="flex justify-center items-center gap-2">
                      <IoCall />
                      <h2 className="text-sm text-center font-medium">
                        {teamMember.socialMedia.whatsapp}
                      </h2>
                    </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
