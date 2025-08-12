// import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Img1 from "@/assets/image/b1.png";
import Img2 from "@/assets/image/b2.png";
import Img3 from "@/assets/image/b3.png";
import Img4 from "@/assets/image/b4.png";
import Img5 from "@/assets/image/b5.png";
import { CgArrowLongRight } from "react-icons/cg";

const blogPosts = [
  {
    id: 1,
    date: "11 July 2024",
    title:
      "lorem ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: Img1,
    size: "large",
  },
  {
    id: 2,
    date: "23 June 2024",
    title:
      "lorem ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: Img2,
    size: "medium",
  },
  {
    id: 3,
    date: "10 May 2024",
    title:
      "lorem ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: Img3,
    size: "small",
  },
  {
    id: 4,
    date: "10 December 2024",
    title:
      "lorem ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: Img4,
    size: "medium",
  },
  {
    id: 5,
    date: "10 May 2024",
    title:
      "lorem ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: Img5,
    size: "small",
  },
];

export default function BlogContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              } ${index === 1 ? "lg:row-span-1" : ""}`}
            >
              <div className="">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full object-cover  lg:h-[340px] rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>No Comment</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-gray-900 font-medium text-sm hover:text-primary transition-colors duration-200 group">
                  Explore More
                  <CgArrowLongRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6">
          <button className="w-8 h-8 rounded-full text-gray-700 transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-red-100 border-red-300 border text-black">
            2
          </button>
          <button className="w-8 h-8 rounded-full text-gray-700 transition-colors">
            3
          </button>
        </div>
      </div>
    </div>
  );
}
