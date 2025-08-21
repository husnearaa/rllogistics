"use client";

import CustomPagination2 from "@/components/shared/CustomPagination2";
import { Edit, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";

// Demo booking data matching the image
const containerData = [
  {
    sl: 1,
    containerId: "L0001",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 2,
    containerId: "L0002",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 3,
    containerId: "L0003",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 4,
    containerId: "L0004",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 5,
    containerId: "L0005",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 6,
    containerId: "L0006",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 7,
    containerId: "L0007",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 8,
    containerId: "L0008",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 9,
    containerId: "L0009",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 10,
    containerId: "L0010",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 11,
    containerId: "L0011",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
  {
    sl: 12,
    containerId: "L0012",
    location: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    contactNumber: "++325100121",
  },
];

export default function AllContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages based on data length
  const totalPages = Math.ceil(containerData.length / itemsPerPage);

  // Get current page data
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return containerData.slice(startIndex, endIndex);
  }, [currentPage]);

  return (
    <div className="p-6">
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className=" border border-gray-400 mb-5 max-w-6xl"></div>
          <table className="min-w-full">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Sl.
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Container Id
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Current Product Location
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Updated By
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Emp Contact Number
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-8">
                <td colSpan={12} className="border-b border-red-500"></td>
              </tr>
              {currentData.map((container) => (
                <tr
                  key={`${container.containerId}-${container.sl}`}
                  className="hover:bg-gray-50 border-b border-red-500"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {container.sl}.
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {container.containerId}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {container.location}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {container.updatedBy}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {container.contactNumber}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button className="text-red-500 hover:text-red-700 p-1">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination  */}
        <div className="mt-6">
          <CustomPagination2
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
