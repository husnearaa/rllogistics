"use client";

import Logo from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { CirclePlus, Plane, Settings2, User } from "lucide-react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaChartColumn } from "react-icons/fa6";
import Image from "next/image";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";


const containerBaseUrl = "/dashboard/superAdmin/container";


const data = {
  super_admin: {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/superAdmin",
        icon: FaChartColumn,
      },
      {
        title: "Booking",
        url: "/dashboard/superAdmin/booking",
        icon: Plane,
      },
      // {
      //   title: "Container",
      //   url: "/dashboard/superAdmin/container",
      //   icon: Settings2,
      // },
      {
        title: "Container",
        url: containerBaseUrl,
        icon: Settings2,
        items: [
          {
            title: "Add Container",
            url: `${containerBaseUrl}/add-container`,
            icon: CirclePlus,
          },
          {
            title: "All Container",
              url: `${containerBaseUrl}/all-container`,
            icon: RiBarChartHorizontalLine,
          },
        ],
      },
      {
        title: "All Orders",
        url: "/dashboard/superAdmin/order",
        icon: User,
      },
      {
        title: "For Delivery",
        url: "/dashboard/superAdmin/delivery",
        icon: User,
      },
      {
        title: "Report",
        url: "/dashboard/superAdmin/report",
        icon: User,
      },
      {
        title: "Message",
        url: "/dashboard/superAdmin/message",
        icon: User,
      },
      {
        title: "Notification",
        url: "/dashboard/superAdmin/notification",
        icon: User,
      },
      {
        title: "Customer",
        url: "/dashboard/superAdmin/customer",
        icon: User,
      },
      {
        title: "Add Employee",
        url: "/dashboard/superAdmin/employee",
        icon: User,
      },
      {
        title: "Setting",
        url: "/dashboard/superAdmin/setting",
        icon: User,
      },
      // {
      //   title: "Go Back To Home",
      //   url: "/",
      //   icon: Home,
      // },
    ],
  },
  admin: {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/admin",
        icon: FaChartColumn,
      },
      {
        title: "Booking",
        url: "/dashboard/admin/booking",
        icon: User,
      },
      {
        title: "Container",
        url: "/dashboard/admin/container",
        icon: User,
      },
      {
        title: "All Orders",
        url: "/dashboard/admin/order",
        icon: User,
      },
      {
        title: "For Delivery",
        url: "/dashboard/admin/delivery",
        icon: User,
      },
      {
        title: "Message",
        url: "/dashboard/admin/message",
        icon: User,
      },
      {
        title: "Notification",
        url: "/dashboard/admin/notification",
        icon: User,
      },
      {
        title: "Customer",
        url: "/dashboard/admin/customer",
        icon: User,
      },
    ],
  },
  manager: {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/manager",
        icon: FaChartColumn,
      },
      {
        title: "Booking",
        url: "/dashboard/manager/booking",
        icon: User,
      },
      {
        title: "Container",
        url: "/dashboard/manager/container",
        icon: User,
      },
      {
        title: "All Orders",
        url: "/dashboard/manager/order",
        icon: User,
      },
      {
        title: "For Delivery",
        url: "/dashboard/manager/delivery",
        icon: User,
      },
      {
        title: "Message",
        url: "/dashboard/manager/message",
        icon: User,
      },
      {
        title: "Notification",
        url: "/dashboard/manager/notification",
        icon: User,
      },
    ],
  },
};

// add roles based on your requirements
interface AppSidebarProps {
  role: string;
}

export default function AppSidebar({ role, ...props }: AppSidebarProps) {
  const sidebarData = data[role?.toLowerCase() as keyof typeof data];

  return (
    <Sidebar
      collapsible="icon"
      className="w-64 bg-white border-r border-blue-200"
      {...props}
    >
      <SidebarHeader>
        <Link
          href={"/"}
          className="flex items-center w-full max-h-40 justify-center"
        >
          <Image
            src={Logo.src}
            alt="Logo"
            width={300}
            height={300}
            className="size-auto "
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData?.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
