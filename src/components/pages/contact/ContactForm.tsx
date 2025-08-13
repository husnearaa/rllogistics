import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Log form data to console
      console.log("Form Data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success("Message sent successfully!");

      // Reset form
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-0">
              <span className="text-red-500 font-semibold text-[20px] tracking-wide uppercase">
                GET A QUOTE
              </span>
              <div className="w-10 h-[2px] bg-red-500"></div>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-900 mt-2">
              Get in touch and we&apos;ll help your business
            </h2>
            <p className="text-gray-600 leading-relaxed mt-3">
              Transmax is the world&apos;s driving worldwide coordinations
              supplier we uphold industry and exchange the worldwide trade of
              cloud dummy merchandise through land transport.
            </p>
          </div>

          <div className="space-y-4">
            {/* Call Us Card */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white hover:scale-110 duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Call Us 24/7
                </h3>
                <p className="text-gray-600 text-sm">+86 130 9375 6351</p>
                <p className="text-gray-600 text-sm">+8801000000000</p>
              </div>
            </div>

            {/* Make A Quote Card */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white hover:scale-110 duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Make A Quote
                </h3>
                <p className="text-gray-600 text-sm">admin@logistics.com</p>
                <p className="text-gray-600 text-sm">admin@logistics.com</p>
              </div>
            </div>

            {/* Service Station Card */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white hover:scale-110 duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Service Station
                </h3>
                <p className="text-gray-600 text-sm">
                  66 Broklyn Golden Street 600 New York, China
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-0">
              <span className="text-red-500 font-semibold text-[20px] tracking-wide uppercase">
                CONTACT FOR SERVICES
              </span>
              <div className="w-10 h-[2px] bg-red-500"></div>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-900 mt-2">
              Feel free to write our logistics services experts
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name*"
                  className="h-12 border-gray-300 focus:border-b-primary"
                />
                {errors.name && (
                  <p className="text-primary text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email*"
                  className="h-12 border-gray-300 focus:border-b-primary"
                />
                {errors.email && (
                  <p className="text-primary text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Phone*"
                  className="h-12 border-gray-300 focus:border-b-primary"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  placeholder="Subject*"
                  className="h-12 border-gray-300 focus:border-primary focus:ring-primary"
                />
                {errors.subject && (
                  <p className="text-primary text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message*"
                rows={6}
                className="border-gray-300 focus:border-b-primary resize-none"
              />
              {errors.message && (
                <p className="text-primary text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-transparent border border-primary hover:text-primary text-white px-8 py-3 h-auto font-medium cursor-pointer transition-colors duration-300 ease-in-out"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
