"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface ContainerFormData {
  containerId: string
  model: string
  portsAvailable: string
  status: string
  mediumOfTransportation: string
  location: string
  productsInside: string
}

export function AddContainerForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContainerFormData>({
    defaultValues: {
      model: "",
      mediumOfTransportation: "",
      location: "",
    }
  })

  const onSubmit = async (data: ContainerFormData) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log data to console
      console.log("Container Form Data:", data)

      // Simulate random success/error for demo
      const isSuccess = Math.random() > 0.3

      if (isSuccess) {
        toast.success("Container added successfully!")
        reset() // Clear form on success
      } else {
        throw new Error("Failed to add container")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to add container. Please try again.")
    }
  }

  // Watch the select values to ensure they're registered
  const modelValue = watch("model")
  const transportValue = watch("mediumOfTransportation")
  const locationValue = watch("location")

  return (
    <div className="p-6">
      <h1 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-300 pb-4 max-w-[1172px]">Add Container</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Container ID */}
          <div className="space-y-2">
            <Label htmlFor="containerId" className="text-sm font-medium text-gray-700">
              Container ID
            </Label>
            <Input
              id="containerId"
              placeholder="Enter id..."
              className=" border-gray-300 text-gray-900 placeholder:text-gray-400 shadow-none"
              {...register("containerId", { required: "Container ID is required" })}
            />
            {errors.containerId && <p className="text-sm text-red-600">{errors.containerId.message}</p>}
          </div>

          {/* Model */}
          <div className="space-y-2">
            <Label htmlFor="model" className="text-sm font-medium text-gray-700">
              Model
            </Label>
            <Select 
              value={modelValue} 
              onValueChange={(value) => setValue("model", value)}
            >
              <SelectTrigger className="border-b-2 border-gray-300 shadow-none text-gray-900 w-full">
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Container</SelectItem>
                <SelectItem value="refrigerated">Refrigerated Container</SelectItem>
                <SelectItem value="tank">Tank Container</SelectItem>
                <SelectItem value="flat-rack">Flat Rack Container</SelectItem>
              </SelectContent>
            </Select>
            {errors.model && <p className="text-sm text-red-600">{errors.model.message}</p>}
          </div>

          {/* Ports Available */}
          <div className="space-y-2">
            <Label htmlFor="portsAvailable" className="text-sm font-medium text-gray-700">
              Ports Available
            </Label>
            <Input
              id="portsAvailable"
              placeholder="Type here..."
              className=" border-gray-300 text-gray-900 placeholder:text-gray-400 shadow-none"
              {...register("portsAvailable")}
            />
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label htmlFor="status" className="text-sm font-medium text-gray-700">
              Status
            </Label>
            <Input
              id="status"
              placeholder="Type here..."
              className=" border-gray-300 text-gray-900 placeholder:text-gray-400 shadow-none"
              {...register("status")}
            />
          </div>

          {/* Medium of transportation */}
          <div className="space-y-2">
            <Label htmlFor="mediumOfTransportation" className="text-sm font-medium text-gray-700">
              Medium of transportation
            </Label>
            <Select 
              value={transportValue} 
              onValueChange={(value) => setValue("mediumOfTransportation", value)}
            >
              <SelectTrigger className="border-b-2 border-gray-300 shadow-none text-gray-900 w-full">
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ship">Ship</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="train">Train</SelectItem>
                <SelectItem value="plane">Plane</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </Label>
            <Select 
              value={locationValue} 
              onValueChange={(value) => setValue("location", value)}
            >
              <SelectTrigger className="border-b-2 border-gray-300 shadow-none text-gray-900 w-full">
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="port-a">Port A</SelectItem>
                <SelectItem value="port-b">Port B</SelectItem>
                <SelectItem value="warehouse-1">Warehouse 1</SelectItem>
                <SelectItem value="warehouse-2">Warehouse 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products inside - Full width */}
        <div className="space-y-2">
          <Label htmlFor="productsInside" className="text-sm font-medium text-gray-700">
            Products inside
          </Label>
          <Input
            id="productsInside"
            placeholder="Type here..."
            className=" border-gray-300 text-gray-900 placeholder:text-gray-400 shadow-none"
            {...register("productsInside")}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-md font-medium"
          >
            {isSubmitting ? "Adding..." : "Add Container"}
          </Button>
        </div>
      </form>
    </div>
  )
}