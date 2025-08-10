import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reviewer1 from '@/assets/image/review1.png';
import Reviewer2 from '@/assets/image/review2.png';

const testimonials = [
  {
    id: 1,
    name: "Martin Luther King",
    role: "Marketing Envato Pvt Ltd",
    quote:
      "Perfect grooming is one of the features of a successful man. The main signature of ae of the features of a successful man.",
    image: Reviewer2,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO at DesignCo",
    quote:
      "The service was exceptional and exceeded all my expectations. I'll definitely be coming back for more.",
    image: Reviewer1,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager at TechStart",
    quote:
      "Quality and attention to detail are unmatched. Highly recommend to anyone looking for top-notch service.",
    image: Reviewer2,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto py-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              Testimonials & Reviews
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            Client&apos;s Reviews
          </h2>
        </div>

      <Marquee pauseOnHover={true} speed={40} loop={100}>
        {/* Features Grid */}
        <div className="flex gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl border-[1.5px] border-red-200 p-8 flex items-center gap-8 w-[797px] h-[260px]"
            >
              {/* Left side - Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-56 relative rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1">
                {/* Quote icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       </Marquee> 
      </div>
    </section>
  );
}
