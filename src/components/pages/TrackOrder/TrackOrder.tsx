import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

export default function TrackOrder() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Track Order</h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-12">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Track order</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          {/* Section Title with Red Underline */}
          <div className="mb-8">
            <h2 className="text-red-500 text-sm font-medium mb-1">Your order information</h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto"></div>
          </div>

          {/* Main Heading */}
          <h3 className="text-4xl font-bold text-black mb-8">Enter the Consignment No.</h3>

          {/* Input and Button */}
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter your tracking number..."
              className="flex-1 h-12 px-4 border border-gray-300 rounded-md text-gray-600 placeholder:text-gray-400"
            />
            <Button className="h-12 px-6 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md">
              Track Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
