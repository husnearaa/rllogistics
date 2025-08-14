"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import LoginImg from "@/assets/image/login.png";
import logo from "@/assets/logo.png";
import Link from "next/link";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    console.log("Login form data:", data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (data.email === "test@example.com" && data.password === "password") {
        toast.success("Login successful! Welcome back.");
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      toast.error(
        (error as Error).message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    toast.info("Google sign in clicked");
  };

  return (
    <div className="min-h-screen flex p-4 md:p-8 bg-gray-50 gap-4 md:gap-[50px]">
      {/* Left side - Image - hidden on small screens, visible on md and up */}
      <div className="hidden lg:flex flex-1 items-center lg:justify-end justify-center">
        <div className="max-w-xl rounded-xl overflow-hidden shadow-lg bg-white">
          <Image
            src={LoginImg}
            alt="Airplane on tarmac at sunset"
            width={500}
            height={500}
            objectFit="cover"
            priority
            className="object-cover w-[482px] h-[570px]"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center lg:justify-start justify-center">
        <div className="w-full md:w-[482px] h-[570px] max-w-xl px-8 border border-gray-200 rounded-xl flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-1">
            <Image
              src={logo}
              alt="rllogistics"
              width={500}
              height={500}
              className="w-[194px] h-[36px]"
            />
          </div>

          {/* Welcome text */}
          <div className="text-center space-y-2 mt-6">
            <h1 className="text-2xl font-bold text-black">Welcome Back!</h1>
            <p className="text-gray-500 text-sm">
              We missed you! Please enter your details.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-50"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-50"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setValue("rememberMe", !!checked)
                  }
                  className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                />
                <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                onClick={() => toast.info("Forgot password clicked")}
              >
                Forgot password
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </Button>

            {/* Google Sign In */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              className="w-full h-12 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3 bg-white rounded-lg"
            >
              <FcGoogle />
              <span>Sign in with google</span>
            </Button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-600 pr-2">
              Don&apos;t have an account?
              <Link href="/register" className="pl-2 text-black font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
