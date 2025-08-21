"use client";
import AppSidebar from "@/components/shared/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
// import { useDecodedToken } from "@/hooks/useDecodedToken";
// import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import AdminImg from "@/assets/image/admin.png";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const token = useAppSelector((state) => state.auth.token);
  // const decodedToken = useDecodedToken(token);
  // const role = decodedToken?.role || "USER";

  return (
    <SidebarProvider>
      {/* Pass the user role dynamically to AppSidebar */}
      {/* <AppSidebar role={role} /> */}
      <AppSidebar role="super_admin" />
      <SidebarInset>
        <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-18 bg-[#f0f0f0]">
          <div className="flex items-center gap-2 px-4 w-full">
            {/* <SidebarTrigger className="-ml-1" /> */}
            <div className="flex justify-between items-center w-full px-6">
              <div className="text-left w-3/4">
                {/* <h1 className="font-semibold text-primary lg:text-2xl text-lg">
                  Welcome Back
                </h1>
                <h2 className="text-base text-primary lg:mt-1">Gaco Pharma</h2> */}
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full h-10 border border-gray-300 bg-white py-2 lg:py-0 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="lg:w-1/4 group relative">
                {/* Profile Image */}
                <div className="flex items-center justify-center gap-2 group-hover:border-orange-600 transition-colors cursor-pointer">
                  <Image
                    src={AdminImg}
                    alt="User profile"
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12"
                    priority
                  />
                  <div>
                    <h1 className="text-black lg:text-sm text-xs font-medium">
                      Md. Irfan Ahmad
                    </h1>
                    <p className="text-black text-xs">
                      Super Admin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 pt-0 bg-[#f0f0f0] min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
