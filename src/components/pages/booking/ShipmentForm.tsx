"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { BookingConfirmationDialog } from "./BookingConfirmationDialog";
import { useState } from "react";

interface ShipmentFormData {
  origin: string;
  package: string;
  productLocation: string;
  destination: string;
  carrier: string;
  typeOfShipment: string;
  product: string;
  weight: string;
  width: string;
  medium: string;
  comments: string;
  height: string;
  qty: string;
  deliveryMethod: string;
  paymentMode: string;
  expectedDeliveryDate: string;
  departureTime: string;
  pickupDate: string;
  pickupTime: string;
  productLocationRight: string;
  totalFreight: string;
}

export default function ShipmentForm() {
     const [showConfirmation, setShowConfirmation] = useState(false)

  const handleBooking = () => {
    // Simulate booking process
    setTimeout(() => {
      setShowConfirmation(true)
    }, 500)
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ShipmentFormData>();

  const onSubmit = async (data: ShipmentFormData) => {
    try {
      // Log data to console as requested
      console.log("Shipment Form Data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Booking confirmed successfully!");

      // Reset form after successful submission
      setTimeout(() => {
        reset();
      }, 1000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to confirm booking. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-xl font-medium text-gray-900 mb-1">
          Shipment Information
        </h1>
        <div className="w-full h-[2px] bg-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <Label
                htmlFor="origin"
                className="text-sm font-medium text-gray-700"
              >
                Origin*
              </Label>
              <Input
                id="origin"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("origin", { required: "Origin is required" })}
              />
              {errors.origin && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.origin.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="package"
                className="text-sm font-medium text-gray-700"
              >
                Package
              </Label>
              <Input
                id="package"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("package")}
              />
            </div>

            <div>
              <Label
                htmlFor="productLocation"
                className="text-sm font-medium text-gray-700"
              >
                Product Location*
              </Label>
              <Input
                id="productLocation"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("productLocation", {
                  required: "Product Location is required",
                })}
              />
              {errors.productLocation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.productLocation.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="destination"
                className="text-sm font-medium text-gray-700"
              >
                Destination*
              </Label>
              <Input
                id="destination"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("destination", {
                  required: "Destination is required",
                })}
              />
              {errors.destination && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="carrier"
                className="text-sm font-medium text-gray-700"
              >
                Carrier
              </Label>
              <Input
                id="carrier"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("carrier")}
              />
            </div>

            <div>
              <Label
                htmlFor="typeOfShipment"
                className="text-sm font-medium text-gray-700"
              >
                Type of Shipment*
              </Label>
              <Select
                onValueChange={(value) => setValue("typeOfShipment", value)}
              >
                <SelectTrigger className="mt-1 border-b-2 border-gray-300 focus:border-primary focus:ring-0 w-full">
                  <SelectValue placeholder="Select here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="express">Express</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="economy">Economy</SelectItem>
                </SelectContent>
              </Select>
              {errors.typeOfShipment && (
                <p className="text-red-500 text-xs mt-1">
                  Type of Shipment is required
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="product"
                className="text-sm font-medium text-gray-700"
              >
                Product
              </Label>
              <Input
                id="product"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("product")}
              />
            </div>

            <div>
              <Label
                htmlFor="weight"
                className="text-sm font-medium text-gray-700"
              >
                Weight (kg)*
              </Label>
              <Input
                id="weight"
                placeholder="Type here.."
                type="number"
                step="0.01"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("weight", { required: "Weight is required" })}
              />
              {errors.weight && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="width"
                className="text-sm font-medium text-gray-700"
              >
                Width(cm)
              </Label>
              <Input
                id="width"
                placeholder="Type here.."
                type="number"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("width")}
              />
            </div>

            <div>
              <Label
                htmlFor="medium"
                className="text-sm font-medium text-gray-700"
              >
                Medium
              </Label>
              <Select onValueChange={(value) => setValue("medium", value)}>
                <SelectTrigger className="mt-1 border-b-2 border-gray-300 focus:border-primary focus:ring-0 w-full">
                  <SelectValue placeholder="Air Freight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air-freight">Air Freight</SelectItem>
                  <SelectItem value="sea-freight">Sea Freight</SelectItem>
                  <SelectItem value="road-freight">Road Freight</SelectItem>
                  <SelectItem value="rail-freight">Rail Freight</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <Label
                htmlFor="height"
                className="text-sm font-medium text-gray-700"
              >
                Height(cm)
              </Label>
              <Input
                id="height"
                placeholder="Type here.."
                type="number"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("height")}
              />
            </div>

            <div>
              <Label
                htmlFor="qty"
                className="text-sm font-medium text-gray-700"
              >
                Qty
              </Label>
              <Input
                id="qty"
                placeholder="Type here.."
                type="number"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("qty")}
              />
            </div>

            <div>
              <Label
                htmlFor="deliveryMethod"
                className="text-sm font-medium text-gray-700"
              >
                Delivery Method
              </Label>
              <Select
                onValueChange={(value) => setValue("deliveryMethod", value)}
              >
                <SelectTrigger className="mt-1 border-b-2 border-gray-300 focus:border-primary focus:ring-0 w-full">
                  <SelectValue placeholder="Select here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="door-to-door">Door to Door</SelectItem>
                  <SelectItem value="port-to-port">Port to Port</SelectItem>
                  <SelectItem value="door-to-port">Door to Port</SelectItem>
                  <SelectItem value="port-to-door">Port to Door</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="paymentMode"
                className="text-sm font-medium text-gray-700"
              >
                Payment Mode
              </Label>
              <Input
                id="paymentMode"
                placeholder="Type here.."
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("paymentMode")}
              />
            </div>

            <div>
              <Label
                htmlFor="expectedDeliveryDate"
                className="text-sm font-medium text-gray-700"
              >
                Expected Delivery Date
              </Label>
              <Input
                id="expectedDeliveryDate"
                placeholder="Type here.."
                type="date"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("expectedDeliveryDate")}
              />
            </div>

            <div>
              <Label
                htmlFor="departureTime"
                className="text-sm font-medium text-gray-700"
              >
                Departure Time
              </Label>
              <Input
                id="departureTime"
                placeholder="Type here.."
                type="time"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("departureTime")}
              />
            </div>

            <div>
              <Label
                htmlFor="pickupDate"
                className="text-sm font-medium text-gray-700"
              >
                Pick-up Date
              </Label>
              <Input
                id="pickupDate"
                placeholder="DD:MM:YY"
                type="date"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("pickupDate")}
              />
            </div>

            <div>
              <Label
                htmlFor="pickupTime"
                className="text-sm font-medium text-gray-700"
              >
                Pick-up Time
              </Label>
              <Input
                id="pickupTime"
                placeholder="HH:MM:SS"
                type="time"
                step="1"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("pickupTime")}
              />
            </div>

            <div>
              <Label
                htmlFor="productLocationRight"
                className="text-sm font-medium text-gray-700"
              >
                Product Location
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("productLocationRight", value)
                }
              >
                <SelectTrigger className="mt-1 border-b-2 border-gray-300 focus:border-primary focus:ring-0 w-full">
                  <SelectValue placeholder="Select here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                  <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                  <SelectItem value="warehouse-c">Warehouse C</SelectItem>
                  <SelectItem value="distribution-center">
                    Distribution Center
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="totalFreight"
                className="text-sm font-medium text-gray-700"
              >
                Total Freight
              </Label>
              <Input
                id="totalFreight"
                placeholder="Type here.."
                type="number"
                step="0.01"
                className="mt-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                {...register("totalFreight")}
              />
            </div>
          </div>
        </div>
        <div>
          <Label
            htmlFor="comments"
            className="text-sm font-medium text-gray-700"
          >
            Comments
          </Label>
          <Textarea
            id="comments"
            placeholder="Enter e-mail"
            className=" border-gray-300 focus:border-gray-400 focus:ring-0 resize-none min-h-10"
            rows={1}
            {...register("comments")}
          />
        </div>

        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            onClick={handleBooking}
            className="bg-primary hover:bg-transparent hover:text-primary border hover:border-primary text-white px-8 py-5 transition duration-300 rounded-lg font-medium"
          >
            Confirm Booking
          </Button>
        <BookingConfirmationDialog open={showConfirmation} onOpenChange={setShowConfirmation} />
        </div>
      </form>
    </div>
  );
}
