"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";
import { toast } from "sonner";

type TrackOrderFormData = {
  trackingNumber: string;
};

// Mock function to simulate API call
const trackOrderApi = async (trackingNumber: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Mock success for specific tracking numbers
  return trackingNumber.startsWith("ABC");
};

export default function TrackOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TrackOrderFormData>();

  const onSubmit = async (data: TrackOrderFormData) => {
    try {
      toast.info('Tracking your order...', {
        description: 'Please wait while we fetch your order details',
      });

      const success = await trackOrderApi(data.trackingNumber);

      if (success) {
        toast.success('Order found!', {
          description: `Tracking number: ${data.trackingNumber}`,
          duration: 5000,
        });
        console.log("Order details for:", data.trackingNumber);
      } else {
        toast.error('Order not found', {
          description: 'Please check your tracking number and try again',
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error('Tracking failed', {
        description: 'An error occurred while tracking your order',
        duration: 5000,
      });
      console.error("Tracking error:", error);
    } finally {
      reset();
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Track Order"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Track Order" }]}
      />
      <main className="container mx-auto py-8 px-4">
        {/* Main Content */}
        <div className="text-center">
          {/* Section Title with Red Underline */}
          <div className="mb-8 flex items-center justify-center">
            <h2 className="text-primary lg:text-[20px] text-[14px] font-medium mb-1">
              Your order information
            </h2>
            <CgArrowLongRight className="ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Main Heading */}
          <h3 className="lg:text-4xl text-2xl font-bold text-black mb-8">
            Enter the Consignment No.
          </h3>

          {/* Input and Button */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 flex-col md:flex-row max-w-2xl mx-auto w-full">
              <Input
                type="text"
                placeholder="Enter your tracking number..."
                className="flex-1 h-12 px-4 py-3 border border-gray-300 rounded-md text-gray-600 placeholder:text-gray-400"
                {...register("trackingNumber", {
                  required: "Tracking number is required",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Only letters and numbers are allowed"
                  },
                  minLength: {
                    value: 8,
                    message: "Tracking number must be at least 8 characters"
                  }
                })}
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto h-12 px-6 bg-primary hover:bg-transparent border hover:border-primary hover:text-primary text-white font-medium rounded-md transition duration-300"
              >
                {isSubmitting ? "Tracking..." : "Track Order"}
              </Button>
            </div>
            {errors.trackingNumber && (
              <p className="mt-2 text-sm text-red-600">
                {errors.trackingNumber.message}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}