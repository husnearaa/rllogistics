"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function LinkGenerator() {
  const [generatedLink, setGeneratedLink] = useState("https://emamplelink.bd.com")

//   const generateLink = () => {
//     try {
//       // Generate a random link (you can customize this logic)
//       const randomId = Math.random().toString(36).substring(2, 15)
//       const newLink = `https://emamplelink.bd.com/${randomId}`
//       setGeneratedLink(newLink)
//       toast.success("New link generated successfully!")
//     } catch (error) {
//       toast.error( error.message || "Failed to generate link")
// toast.error((error as Error).message || "Failed to generate link");
//     }
//   }

const generateLink = () => {
  try {
    const randomId = Math.random().toString(36).substring(2, 15);
    const newLink = `https://examplelink.bd.com/${randomId}`;
    setGeneratedLink(newLink);
    toast.success("New link generated successfully!");
  } catch (error) {
    let errorMessage = "Failed to generate link";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
  }
};

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(generatedLink)
//       toast.success("Link copied to clipboard!")
//     } catch (error) {
//       toast.error(error.message || "Failed to copy link")
//     }
//   }


  const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedLink);
    toast.success("Link copied to clipboard!");
  } catch (error) {
    let errorMessage = "Failed to copy link";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Optional: Check for other error types (e.g., DOMException)
    else if (typeof error === "string") {
      errorMessage = error;
    }
    toast.error(errorMessage);
  }
};

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="relative">
          <Input
            value={generatedLink}
            readOnly
            className="lg:pr-12 bg-white border border-red-300 text-gray-700 font-mono text-sm md:py-6 md:px-6 px-3 rounded-lg  focus:ring-primary focus:border-transparent"
          />
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <Copy className="h-4 w-4 text-gray-500" />
          </Button>
        </div>

        <Button onClick={generateLink} className="w-full bg-primary hover:bg-transparent hover:text-primary border hover:border-primary text-white px-8 py-5 transition duration-300 rounded-lg font-medium">
          Generate New Link
        </Button>
      </div>
    </div>
  )
}
