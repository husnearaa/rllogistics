"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
// import RegisterBg from '@/assets/image/Sign up.png';


const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Please select a country code"),
  phoneNumber: z.string().min(6, "Phone number must be at least 6 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
})

type SignUpFormData = z.infer<typeof signUpSchema>

const showErrorToast = (message: string) => {
  toast.error(message, {
    duration: 4000,
  })
}

const showSuccessToast = (message: string) => {
  toast.success(message, {
    description: "Account created successfully!",
    duration: 4000,
  })
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      rememberMe: false,
      countryCode: "+880",
    },
  })

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true)

    try {
      // Log form data to console
      console.log("Sign Up Form Data:", data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate random success/error for demo
      const isSuccess = Math.random() > 0.3

      if (isSuccess) {
        showSuccessToast("Welcome aboard!")
        console.log("✅ Sign up successful!")
      } else {
        const errorMessages = [
          "Please check your information and try again",
          "Network connection failed. Please try again",
          "Server is temporarily unavailable",
        ]

        const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)]
        showErrorToast(randomMessage)
        console.error(" Sign up failed")
      }
    } catch (error) {
      showErrorToast("An unexpected error occurred")
      console.error("Unexpected error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked")
    toast.info("Google Sign In", {
      description: "Redirecting to Google...",
    })
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "https://i.postimg.cc/LXcLv16h/Sign-up.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-900">Sign Up</CardTitle>
          <CardDescription className="text-gray-600">Create an account to continue</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Nafiul"
                {...register("name")}
                className="bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500"
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <div className="flex gap-2">
                <Select value={watch("countryCode")} onValueChange={(value) => setValue("countryCode", value)}>
                  <SelectTrigger className="w-24 bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+880">+880</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+91">+91</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  placeholder="1902536398"
                  {...register("phoneNumber")}
                  className="flex-1 bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500"
                />
              </div>
              {(errors.countryCode || errors.phoneNumber) && (
                <p className="text-sm text-red-600">{errors.countryCode?.message || errors.phoneNumber?.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  {...register("password")}
                  className="bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
              {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={watch("rememberMe")}
                  onCheckedChange={(checked) => setValue("rememberMe", !!checked)}
                  className="border-gray-300 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <Button type="button" variant="link" className="text-sm text-red-600 hover:text-red-700 p-0 h-auto">
                Forgot password
              </Button>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>

            {/* Google Sign In */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              className="w-full border-gray-300 hover:bg-gray-50 font-medium py-2.5 bg-transparent"
            >
 <FcGoogle />
              Sign in with Google
            </Button>

            {/* Sign In Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Button
                type="button"
                variant="link"
                className="text-sm text-red-600 hover:text-red-700 p-0 h-auto font-medium"
              >
                Sign in
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
