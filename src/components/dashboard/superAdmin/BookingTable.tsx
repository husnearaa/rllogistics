"use client"

import { Edit } from "lucide-react"

// Demo booking data matching the image
const bookingData = [
  {
    sl: 1,
    bookingId: "CN241100",
    containerId: "-",
    bookingDate: "10-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "House 1, Beijing, China",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 2,
    bookingId: "CN241101",
    containerId: "-",
    bookingDate: "11-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "28-11-2024",
    productLocation: "China Warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 3,
    bookingId: "CN241102",
    containerId: "-",
    bookingDate: "12-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "China Warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 4,
    bookingId: "CN241103",
    containerId: "-",
    bookingDate: "13-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 5,
    bookingId: "CN241104",
    containerId: "-",
    bookingDate: "14-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "28-11-2024",
    productLocation: "China Warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 6,
    bookingId: "CN241105",
    containerId: "-",
    bookingDate: "15-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "30-11-2024",
    productLocation: "China Warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 7,
    bookingId: "CN241106",
    containerId: "-",
    bookingDate: "16-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "India",
    deliveryDate: "28-11-2024",
    productLocation: "Bangladesh warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 8,
    bookingId: "CN241107",
    containerId: "-",
    bookingDate: "17-11-2024",
    senderCountry: "Bangladesh",
    receiverCountry: "China",
    deliveryDate: "30-11-2024",
    productLocation: "Bangladesh warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 9,
    bookingId: "CN241108",
    containerId: "-",
    bookingDate: "18-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "28-11-2024",
    productLocation: "China Warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
  {
    sl: 10,
    bookingId: "CN241109",
    containerId: "-",
    bookingDate: "19-11-2024",
    senderCountry: "China",
    receiverCountry: "India",
    deliveryDate: "25-11-2024",
    productLocation: "Bangladesh warehouse",
    status: "Pending",
    contactNumber: "+8801330000121",
  },
]

export default function BookingTable() {


  return (
    <div className="p-6">
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium">Sl.</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Booking Id</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Container Id</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Booking Date</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Sender Country</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Receiver Country</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Delivery Date</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Product Location</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Sender Contact Number</th>
                <th className="px-4 py-4 text-left text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-8">
                <td colSpan={12} className="border-b border-red-500"></td>
              </tr>
              {bookingData.map((booking, index) => (
                <tr key={booking.bookingId} className="hover:bg-gray-50 border-b border-red-500">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.sl}.</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{booking.bookingId}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.containerId}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.bookingDate}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.senderCountry}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.receiverCountry}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.deliveryDate}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.productLocation}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{booking.contactNumber}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button className="text-red-500 hover:text-red-700 p-1">
                      <Edit size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {/* <div className="px-4 py-3 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-full ${
                  currentPage === page ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-6 text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
