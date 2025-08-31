"use client";

import { useState } from "react";
import { CalendarIcon} from "lucide-react";
import { toast } from "sonner";

interface ContainerData {
 totalDelivered: string;
  totalPending: string;
  totalRejected: string;
  revenue: string;
}

const mockData: ContainerData[] = [
  {
    totalDelivered: "CNT001",
    totalPending: "Warehouse A - Section 1",
    totalRejected: "John Doe",
    revenue: "+1234567890",
  },
  {
    totalDelivered: "CNT002",
    totalPending: "Warehouse B - Section 2", 
    totalRejected: "Jane Smith",
    revenue: "+0987654321",
  },
  {
    totalDelivered: "CNT003",
    totalPending: "Warehouse C - Section 3",
    totalRejected: "Bob Johnson",
    revenue: "+1122334455",
  },

];

export default function ReportPage() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [containerData, setContainerData] = useState<ContainerData[]>(mockData); // Initialize with mockData
  const [isLoading, setIsLoading] = useState(false);

  const fetchReportData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate random success/failure
      const shouldSucceed = Math.random() > 0.3;

      if (shouldSucceed) {
        setContainerData(mockData);
        console.log("Container data fetched:", mockData);
        toast.success("Container data loaded successfully!");
      } else {
        throw new Error("Failed to fetch container data");
      }
    } catch (error) {
      console.error("Error fetching container data:", error);
      toast.error("Failed to load container data. Please try again.");
      setContainerData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="border border-gray-400 mb-5 max-w-6xl"></div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-6">Report</h1>
          <hr className="border-gray-300" />
        </div>

        {/* Date Range Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD/MM/YY"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none text-gray-600 placeholder-gray-400"
              />
              <CalendarIcon className="absolute right-0 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD/MM/YY"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none text-gray-600 placeholder-gray-400"
              />
              <CalendarIcon className="absolute right-0 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Container Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Total Deliverd
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                 Total Pending
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                 Total Rejected
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Revenue
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-8">
                <td colSpan={4} className="border-b border-red-500"></td>
              </tr>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    Loading container data...
                  </td>
                </tr>
              ) : containerData.length > 0 ? (
                containerData.map((container, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border-b border-red-500"
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {container.totalDelivered}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {container.totalPending}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {container.totalRejected}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {container.revenue}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No container data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Debug Button */}
        <div className="mt-8 text-center">
          <button
            onClick={fetchReportData}
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Refresh Data"}
          </button>
        </div>
      </div>
    </div>
  );
}