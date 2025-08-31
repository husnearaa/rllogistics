"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomPagination2 from "@/components/shared/CustomPagination2";

// Sample data matching the image structure
const containerData = [
  {
    sl: 1,
    bookingId: "CN241100",
    containerId: "L0001",
    bookingDate: "10-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 2,
    bookingId: "CN241101",
    containerId: "L0001",
    bookingDate: "11-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "28-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 3,
    bookingId: "CN241102",
    containerId: "L0001",
    bookingDate: "12-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 4,
    bookingId: "CN241103",
    containerId: "L0002",
    bookingDate: "13-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Md Irfan Ahmad",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 5,
    bookingId: "CN241104",
    containerId: "L0002",
    bookingDate: "14-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "20-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Solaiman",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 6,
    bookingId: "CN241105",
    containerId: "L0002",
    bookingDate: "15-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "30-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Solaiman",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 7,
    bookingId: "CN241106",
    containerId: "L0003",
    bookingDate: "16-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "28-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Md Solaiman",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 8,
    bookingId: "CN241107",
    containerId: "L0003",
    bookingDate: "17-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Mr. Washim",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 9,
    bookingId: "CN241108",
    containerId: "L0003",
    bookingDate: "18-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Mr. Washim",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 10,
    bookingId: "CN241109",
    containerId: "L0003",
    bookingDate: "19-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Mr. Washim",
    receiverContactNumber: "+8801330000121",
  },
  {
    sl: 11,
    bookingId: "CN241110",
    containerId: "L0003",
    bookingDate: "20-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    updatedBy: "Mr. Washim",
    receiverContactNumber: "+8801330000121",
  },
];

export default function AllOrders() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [containerSearch, setContainerSearch] = useState("");
  const [bookingSearch, setBookingSearch] = useState("");

  // Filter data based on search inputs
  const filteredData = useMemo(() => {
    return containerData.filter((item) => {
      const containerMatch =
        containerSearch === "" ||
        item.containerId
          .toLowerCase()
          .includes(containerSearch.toLowerCase()) ||
        item.productLocation
          .toLowerCase()
          .includes(containerSearch.toLowerCase()) ||
        item.updatedBy.toLowerCase().includes(containerSearch.toLowerCase());

      const bookingMatch =
        bookingSearch === "" ||
        item.bookingId.toLowerCase().includes(bookingSearch.toLowerCase()) ||
        item.senderCountry
          .toLowerCase()
          .includes(bookingSearch.toLowerCase()) ||
        item.receiverCountry
          .toLowerCase()
          .includes(bookingSearch.toLowerCase());

      return containerMatch && bookingMatch;
    });
  }, [containerSearch, bookingSearch]);

  // Calculate total pages based on filtered data length
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current page data from filtered results
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData, itemsPerPage]);

  const handleContainerSearch = () => {
    // Reset to first page when searching
    setCurrentPage(1);
    console.log("Container search:", containerSearch);
  };

  const handleBookingSearch = () => {
    // Reset to first page when searching
    setCurrentPage(1);
    console.log("Booking search:", bookingSearch);
  };

  return (
    <div className="p-6 min-h-screen">
      <div className=" border border-gray-400 mb-5 max-w-6xl"></div>
      {/* Search Section */}
      <div className="mb-6 flex flex-col lg:flex-row gap-4 items-center justify-end">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter container Id"
            value={containerSearch}
            onChange={(e) => setContainerSearch(e.target.value)}
            className="lg:w-64 border-gray-300 focus:border-primary focus:ring-primary"
          />
          <Button
            onClick={handleContainerSearch}
            className="bg-primary border hover:border border-primary hover:bg-transparent hover:text-primary text-white px-6"
          >
            Find Now
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter booking Id"
            value={bookingSearch}
            onChange={(e) => setBookingSearch(e.target.value)}
            className="lg:w-64 border-gray-300 focus:border-red-500 focus:ring-red-500"
          />
          <Button
            onClick={handleBookingSearch}
            className="bg-primary border hover:border border-primary hover:bg-transparent hover:text-primary text-white px-6"
          >
            Find Now
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Sl.
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Booking Id
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Container Id
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Booking Date
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Sender Country
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Receiver Country
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Delivery Date
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Product Location
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Updated By
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium whitespace-nowrap">
                Receiver Contact Number
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
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <tr
                  key={`${item.bookingId}-${item.sl}`}
                 className="hover:bg-gray-50 border-b border-red-500"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.sl}.
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.bookingId}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.containerId}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.bookingDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.senderCountry}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.receiverCountry}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.deliveryDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.productLocation}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.updatedBy}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.receiverContactNumber}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Button
                      className="bg-primary border hover:border border-primary hover:bg-transparent hover:text-primary text-white text-xs px-5 py-1"
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={11}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <CustomPagination2
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
