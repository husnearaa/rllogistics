"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface BookingConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingConfirmationDialog({ open, onOpenChange }: BookingConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-8 text-center border-0 shadow-lg">
        {/* Red circular checkmark icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>
        </div>

        {/* Confirmation text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">Your booking has been confirmed</h2>

        {/* Track Order button */}
        <Button
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-medium rounded-md"
          onClick={() => {
            // Handle track order action
            console.log("Track order clicked")
            onOpenChange(false)
          }}
        >
          Track Order
        </Button>
      </DialogContent>
    </Dialog>
  )
}
