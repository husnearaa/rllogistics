import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CgArrowLongRight } from "react-icons/cg";

export default function TrackOrder() {
  return (
    <div className=" min-h-screen">
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
          <div className="flex items-center justify-center gap-4 flex-col md:flex-row max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Enter your tracking number..."
              className="flex-1 h-12 px-4 py-3 border border-gray-300 rounded-md text-gray-600 placeholder:text-gray-400"
            />
            <Button className="w-full md:w-auto h-12 px-6 bg-primary hover:bg-transparent border hover:border-primary hover:text-primary text-white font-medium rounded-md transition duration-300">
              Track Order
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
