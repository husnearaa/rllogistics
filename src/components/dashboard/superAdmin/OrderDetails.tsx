export default function OrderDetails() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Header with Order Information and Barcode */}
        <div className=" mb-6 p-6">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Order Information</h1>
            <div className="text-right">
              <div className="mb-2">
                <svg width="120" height="40" viewBox="0 0 120 40" className="mb-1">
                  {/* Barcode lines */}
                  {Array.from({ length: 30 }, (_, i) => (
                    <rect key={i} x={i * 4} y={0} width={Math.random() > 0.5 ? 2 : 1} height={40} fill="black" />
                  ))}
                </svg>
              </div>
              <p className="text-xs text-gray-600">SI No: 123456</p>
            </div>
          </div>

          {/* Shipper and Receiver Information */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Shipper Information</h3>
              <div className="space-y-1 text-sm">
                <p>Md. Erfan Ahmed</p>
                <p>SL Logistics</p>
                <p>Yusri 1 Avenue</p>
                <p>Dhaka</p>
                <p>Dhanmondi</p>
                <p>Dhanmondi</p>
                <p>1209</p>
                <p>+8801705-265987</p>
                <p>helloworld@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Receiver Information</h3>
              <div className="space-y-1 text-sm">
                <p>Nafisal Alam Jim</p>
                <p>Authorship IT</p>
                <p>Dhanmondi 27, Dhaka</p>
                <p>Bangladesh</p>
                <p>Dhaka</p>
                <p>Dhaka</p>
                <p>1209</p>
                <p>+8801705-265987</p>
                <p>helloworld@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Shipment Status */}
          <div className="bg-red-500 text-white text-center py-3 rounded">
            <p className="font-medium">Shipment Status</p>
          </div>
        </div>

        {/* Detailed Shipper Information Table */}
        <div className="mb-6 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Shipper Information</h3>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Origin</span>
                <span>Dhaka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Package</span>
                <span>Parcel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product Location</span>
                <span>China Warehouse</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Destination</span>
                <span>Rajshahi Traders, Ctg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carrier</span>
                <span>SL Logistics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type of Shipment</span>
                <span>Air Freight/Air</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Product</span>
                <span>Shoes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Weight (kg)</span>
                <span>10kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Height(cm)</span>
                <span>15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Width(cm)</span>
                <span>Height(cm)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Method</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Mode</span>
                <span>$</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expected Delivery Date</span>
                <span>2025-01-25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Departure Time</span>
                <span>8:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pick-up Date</span>
                <span>2025-01-22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Comments</span>
                <span>8:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Remarks</span>
                <span className="text-xs">If will receive soon, our rider will call on the way</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-6 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Additional Info</h3>
          <div className="grid grid-cols-4 gap-0 mb-4">
            <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Total Freight</div>
            <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Consignee Id</div>
            <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Booking Id</div>
            <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Payment Status</div>
          </div>
          <div className="grid grid-cols-4 gap-0 text-center text-sm">
            <div className="py-2 border-r">USD</div>
            <div className="py-2 border-r">USD</div>
            <div className="py-2 border-r">GZNZ100</div>
            <div className="py-2">Paid</div>
          </div>
        </div>

        {/* Tracking Info */}
        <div className="">
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Tracking Info</h3>
            <div className="grid grid-cols-6 gap-0 mb-2">
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Date</div>
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Time</div>
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Location</div>
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Status</div>
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Updated by</div>
              <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">Remark</div>
            </div>
            <div className="space-y-0">
              <div className="grid grid-cols-6 gap-0 text-center text-sm border-b">
                <div className="py-3 border-r">28-11-2024</div>
                <div className="py-3 border-r">11:30</div>
                <div className="py-3 border-r">China Warehouse</div>
                <div className="py-3 border-r">Arrived</div>
                <div className="py-3 border-r">Md Erfan Ahmed</div>
                <div className="py-3"></div>
              </div>
              <div className="grid grid-cols-6 gap-0 text-center text-sm">
                <div className="py-3 border-r">30-11-2024</div>
                <div className="py-3 border-r">09:30</div>
                <div className="py-3 border-r">China Airport</div>
                <div className="py-3 border-r">Shipping</div>
                <div className="py-3 border-r">Md Kabir Hossain</div>
                <div className="py-3"></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium ml-auto block">
              Print Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
