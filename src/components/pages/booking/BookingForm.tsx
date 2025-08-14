"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/PageHeader";
import ShipmentInfo from "./ShipmentInfo";


const formSchema = z.object({
  senderName: z.string().min(1, "Sender's name is required"),
  senderCompany: z.string().min(1, "Company is required"),
  senderAddress: z.string().min(1, "Address is required"),
  senderCountry: z.string().min(1, "Country is required"),
  senderCity: z.string().min(1, "City is required"),
  senderState: z.string().min(1, "State/Province is required"),
  senderPostalCode: z.string().min(1, "Postal code is required"),
  senderPhone: z.string().min(1, "Mobile/Phone is required"),
  senderEmail: z.string().email("Invalid email").min(1, "E-Mail is required"),

  receiverName: z.string().min(1, "Receiver's name is required"),
  receiverCompany: z.string().min(1, "Company is required"),
  receiverAddress: z.string().min(1, "Address is required"),
  receiverCountry: z.string().min(1, "Country is required"),
  receiverCity: z.string().min(1, "City is required"),
  receiverState: z.string().min(1, "State/Province is required"),
  receiverPostalCode: z.string().min(1, "Postal code is required"),
  receiverPhone: z.string().min(1, "Mobile/Phone is required"),
  receiverEmail: z.string().email("Invalid email").min(1, "E-Mail is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      console.log("Form Data:", data);
      toast.success("Booking information submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit booking information. Please try again.");
    }
  };

  return (
    <div>
      <PageHeader
        title="Book Now"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book Now" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sender Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Sender Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="senderName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Sender&apos;s Name*
                  </Label>
                  <Input
                    id="senderName"
                    placeholder="Enter name"
                    {...register("senderName")}
                    className="mt-1"
                  />
                  {errors.senderName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderCompany"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company*
                  </Label>
                  <Input
                    id="senderCompany"
                    placeholder="Enter company"
                    {...register("senderCompany")}
                    className="mt-1"
                  />
                  {errors.senderCompany && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderCompany.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderAddress"
                    className="text-sm font-medium text-gray-700"
                  >
                    Address*
                  </Label>
                  <Input
                    id="senderAddress"
                    placeholder="Enter address"
                    {...register("senderAddress")}
                    className="mt-1"
                  />
                  {errors.senderAddress && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderCountry"
                    className="text-sm font-medium text-gray-700"
                  >
                    Country*
                  </Label>
                  <Input
                    id="senderCountry"
                    placeholder="Enter country"
                    {...register("senderCountry")}
                    className="mt-1"
                  />
                  {errors.senderCountry && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderCountry.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderCity"
                    className="text-sm font-medium text-gray-700"
                  >
                    City*
                  </Label>
                  <Input
                    id="senderCity"
                    placeholder="Enter city"
                    {...register("senderCity")}
                    className="mt-1"
                  />
                  {errors.senderCity && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderCity.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderState"
                    className="text-sm font-medium text-gray-700"
                  >
                    State/Province*
                  </Label>
                  <Input
                    id="senderState"
                    placeholder="Enter state/province"
                    {...register("senderState")}
                    className="mt-1"
                  />
                  {errors.senderState && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderState.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderPostalCode"
                    className="text-sm font-medium text-gray-700"
                  >
                    Postal Code*
                  </Label>
                  <Input
                    id="senderPostalCode"
                    placeholder="Enter postal code"
                    {...register("senderPostalCode")}
                    className="mt-1"
                  />
                  {errors.senderPostalCode && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderPostalCode.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderPhone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mobile/Phone*
                  </Label>
                  <Input
                    id="senderPhone"
                    placeholder="Enter mobile/phone"
                    {...register("senderPhone")}
                    className="mt-1"
                  />
                  {errors.senderPhone && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderPhone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="senderEmail"
                    className="text-sm font-medium text-gray-700"
                  >
                    E-Mail*
                  </Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    placeholder="Enter e-mail"
                    {...register("senderEmail")}
                    className="mt-1"
                  />
                  {errors.senderEmail && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.senderEmail.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Receiver Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Receiver Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="receiverName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Receiver&apos;s Name*
                  </Label>
                  <Input
                    id="receiverName"
                    placeholder="Enter name"
                    {...register("receiverName")}
                    className="mt-1"
                  />
                  {errors.receiverName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverCompany"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company*
                  </Label>
                  <Input
                    id="receiverCompany"
                    placeholder="Enter company"
                    {...register("receiverCompany")}
                    className="mt-1"
                  />
                  {errors.receiverCompany && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverCompany.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverAddress"
                    className="text-sm font-medium text-gray-700"
                  >
                    Address*
                  </Label>
                  <Input
                    id="receiverAddress"
                    placeholder="Enter address"
                    {...register("receiverAddress")}
                    className="mt-1"
                  />
                  {errors.receiverAddress && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverCountry"
                    className="text-sm font-medium text-gray-700"
                  >
                    Country*
                  </Label>
                  <Input
                    id="receiverCountry"
                    placeholder="Enter country"
                    {...register("receiverCountry")}
                    className="mt-1"
                  />
                  {errors.receiverCountry && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverCountry.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverCity"
                    className="text-sm font-medium text-gray-700"
                  >
                    City*
                  </Label>
                  <Input
                    id="receiverCity"
                    placeholder="Enter city"
                    {...register("receiverCity")}
                    className="mt-1"
                  />
                  {errors.receiverCity && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverCity.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverState"
                    className="text-sm font-medium text-gray-700"
                  >
                    State/Province*
                  </Label>
                  <Input
                    id="receiverState"
                    placeholder="Enter state/province"
                    {...register("receiverState")}
                    className="mt-1"
                  />
                  {errors.receiverState && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverState.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverPostalCode"
                    className="text-sm font-medium text-gray-700"
                  >
                    Postal Code*
                  </Label>
                  <Input
                    id="receiverPostalCode"
                    placeholder="Enter postal code"
                    {...register("receiverPostalCode")}
                    className="mt-1"
                  />
                  {errors.receiverPostalCode && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverPostalCode.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverPhone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mobile/Phone*
                  </Label>
                  <Input
                    id="receiverPhone"
                    placeholder="Enter mobile/phone"
                    {...register("receiverPhone")}
                    className="mt-1"
                  />
                  {errors.receiverPhone && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverPhone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="receiverEmail"
                    className="text-sm font-medium text-gray-700"
                  >
                    E-Mail*
                  </Label>
                  <Input
                    id="receiverEmail"
                    type="email"
                    placeholder="Enter e-mail"
                    {...register("receiverEmail")}
                    className="mt-1"
                  />
                  {errors.receiverEmail && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.receiverEmail.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              type="submit"
              className="px-8 py-2 bg-blue-600 hover:bg-blue-700"
            >
              Submit Booking
            </Button>
          </div>

          {/* Shipment Information Section */}
         <ShipmentInfo />
        </form>
      </main>
    </div>
  );
}
